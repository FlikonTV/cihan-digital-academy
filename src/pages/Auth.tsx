import { useEffect } from "react";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/");
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        // Check if the user is the admin email
        if (session?.user?.email === "celestine.achi@gmail.com") {
          // Update the profile to make them an admin
          const { error } = await supabase
            .from("profiles")
            .update({ is_admin: true, full_name: "Celestine Achi" })
            .eq("id", session.user.id);

          if (error) {
            toast({
              title: "Error",
              description: "Failed to set admin privileges",
              variant: "destructive",
            });
          }
        }
        navigate("/");
      } else if (event === "USER_ALREADY_EXISTS") {
        toast({
          title: "Account Exists",
          description: "This email is already registered. Please sign in instead.",
          variant: "default",
        });
      }
    });

    checkAuth();
    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in with your registered email
          </p>
        </div>
        <div className="mt-8">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#2563eb',
                    brandAccent: '#1d4ed8',
                  },
                },
              },
            }}
            providers={[]}
            onError={(error) => {
              if (error.message.includes("User already registered")) {
                toast({
                  title: "Account Exists",
                  description: "This email is already registered. Please sign in instead.",
                  variant: "default",
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;