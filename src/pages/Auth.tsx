import { useEffect, useState } from "react";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import PasswordReset from "@/components/PasswordReset";

const ADMIN_EMAIL = "cdatraining@cihanmediacomms.com";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/");
      }
    };

    // Check if we're returning from a password reset
    const isReset = searchParams.get('reset');
    if (isReset) {
      toast({
        title: "Set New Password",
        description: "Please enter your new password below.",
      });
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        toast({
          title: "Password Reset",
          description: "You can now set your new password.",
        });
      }
      
      if (event === "SIGNED_IN") {
        if (!session?.user) return;

        try {
          // Check if profile exists
          const { data: existingProfile } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (!existingProfile) {
            // Create profile if it doesn't exist
            const { error: profileError } = await supabase
              .from("profiles")
              .insert([{
                id: session.user.id,
                is_admin: session.user.email === ADMIN_EMAIL
              }]);

            if (profileError) throw profileError;
          } else if (session.user.email === ADMIN_EMAIL && !existingProfile.is_admin) {
            // Update admin status if needed
            const { error: updateError } = await supabase
              .from("profiles")
              .update({ is_admin: true })
              .eq("id", session.user.id);

            if (updateError) throw updateError;
          }

          navigate("/");
        } catch (error) {
          console.error("Error setting up profile:", error);
          toast({
            title: "Error",
            description: "There was a problem setting up your profile. Please try again.",
            variant: "destructive",
          });
        }
      }
    });

    checkAuth();
    return () => subscription.unsubscribe();
  }, [navigate, toast, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {showReset ? "Reset Password" : "Sign in to your account"}
          </h2>
          {!showReset && (
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <button
                onClick={() => setShowReset(true)}
                className="font-medium text-primary hover:text-secondary"
              >
                reset your password
              </button>
            </p>
          )}
          {showReset && (
            <p className="mt-2 text-center text-sm text-gray-600">
              <button
                onClick={() => setShowReset(false)}
                className="font-medium text-primary hover:text-secondary"
              >
                Back to sign in
              </button>
            </p>
          )}
        </div>
        <div className="mt-8">
          {showReset ? (
            <PasswordReset />
          ) : (
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;