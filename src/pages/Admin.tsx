import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import RegistrationsTable from "@/components/admin/RegistrationsTable";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Admin = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session?.user?.email || session.user.email !== 'cdatraining@cihanmediacomms.com') {
      navigate('/');
    }
  }, [session, navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (!session?.user?.email || session.user.email !== 'cdatraining@cihanmediacomms.com') {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Course Registrations Admin Panel</h1>
        <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
      </div>
      <RegistrationsTable />
    </div>
  );
};

export default Admin;