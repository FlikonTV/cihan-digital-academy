import { useEffect } from "react";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const ADMIN_EMAIL = "cdatraining@cihanmediacomms.com";

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
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;