import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast({
            title: "Authentication Required",
            description: "Please sign in to access the admin panel.",
            variant: "destructive",
          });
          navigate("/");
          return;
        }

        // Check if user is admin by querying the profiles table
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', user.id)
          .single();

        if (profile?.is_admin) {
          setIsAdmin(true);
        } else {
          toast({
            title: "Unauthorized",
            description: "You don't have admin access.",
            variant: "destructive",
          });
          navigate("/");
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        toast({
          title: "Error",
          description: "Failed to verify admin access.",
          variant: "destructive",
        });
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, [navigate, toast]);

  // Fetch registrations
  const { data: registrations, isLoading: isLoadingRegistrations } = useQuery({
    queryKey: ["registrations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: isAdmin, // Only fetch if user is admin
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isLoading || isLoadingRegistrations) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleSignOut} variant="outline">
          Sign Out
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Course Date</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations?.map((registration) => (
              <TableRow key={registration.id}>
                <TableCell>
                  {new Date(registration.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>{registration.full_name}</TableCell>
                <TableCell>{registration.email}</TableCell>
                <TableCell>{registration.phone || "N/A"}</TableCell>
                <TableCell>{registration.course_title}</TableCell>
                <TableCell>
                  {new Date(registration.course_date).toLocaleDateString()}
                </TableCell>
                <TableCell>{registration.course_price}</TableCell>
                <TableCell>
                  <Badge variant={registration.status === "pending" ? "secondary" : "default"}>
                    {registration.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={registration.payment_status === "unpaid" ? "destructive" : "default"}>
                    {registration.payment_status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;