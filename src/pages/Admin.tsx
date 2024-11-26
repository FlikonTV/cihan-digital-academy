import { useEffect } from "react";
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

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (!profile?.is_admin) {
        toast({
          title: "Unauthorized",
          description: "You don't have access to this page.",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    checkAdmin();
  }, [navigate, toast]);

  // Fetch registrations
  const { data: registrations, isLoading } = useQuery({
    queryKey: ["registrations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
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
                  <Badge variant={registration.status === "pending" ? "secondary" : "success"}>
                    {registration.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={registration.payment_status === "unpaid" ? "destructive" : "success"}>
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