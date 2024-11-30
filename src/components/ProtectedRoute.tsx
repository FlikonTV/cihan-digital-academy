import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const ADMIN_EMAILS = [
  'cdatraining@cihanmediacomms.com',
  'aiautomation@cihanmediacomms.com'
];

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log("Current user:", user);

        if (!user) {
          console.log("No user found, redirecting to auth");
          setIsAdmin(false);
          setIsLoading(false);
          return;
        }

        const userIsAdmin = ADMIN_EMAILS.includes(user.email || '');
        console.log("Is admin?", userIsAdmin);
        setIsAdmin(userIsAdmin);
        setIsLoading(false);
      } catch (error) {
        console.error('Error in checkAdmin:', error);
        setIsAdmin(false);
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Final isAdmin value:", isAdmin);
  return isAdmin ? <>{children}</> : <Navigate to="/auth" />;
};

export default ProtectedRoute;