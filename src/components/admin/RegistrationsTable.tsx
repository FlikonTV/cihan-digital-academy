import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const RegistrationsTable = () => {
  const { toast } = useToast();

  const { data: registrations, isLoading } = useQuery({
    queryKey: ['registrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error fetching registrations",
          description: error.message,
        });
        throw error;
      }

      return data;
    },
  });

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('registrations')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error updating status",
        description: error.message,
      });
      return;
    }

    toast({
      title: "Status updated successfully",
    });
  };

  const updatePaymentStatus = async (id: string, payment_status: string) => {
    const { error } = await supabase
      .from('registrations')
      .update({ payment_status })
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error updating payment status",
        description: error.message,
      });
      return;
    }

    toast({
      title: "Payment status updated successfully",
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Organization</TableHead>
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
              <TableCell>{new Date(registration.created_at).toLocaleDateString()}</TableCell>
              <TableCell>{registration.full_name}</TableCell>
              <TableCell>{registration.email}</TableCell>
              <TableCell>{registration.phone || '-'}</TableCell>
              <TableCell>{registration.organization || '-'}</TableCell>
              <TableCell>{registration.course_title}</TableCell>
              <TableCell>{new Date(registration.course_date).toLocaleDateString()}</TableCell>
              <TableCell>{registration.course_price}</TableCell>
              <TableCell>
                <Select
                  defaultValue={registration.status || 'pending'}
                  onValueChange={(value) => updateStatus(registration.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  defaultValue={registration.payment_status || 'unpaid'}
                  onValueChange={(value) => updatePaymentStatus(registration.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unpaid">Unpaid</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RegistrationsTable;