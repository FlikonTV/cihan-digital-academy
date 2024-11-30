import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        toast.success("Welcome! You have successfully signed in.");
        navigate("/");
      } else if (event === "SIGNED_OUT") {
        toast.info("You have been signed out.");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to Cihan Digital Academy
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your courses and resources
          </p>
        </div>
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#2563eb',
                  brandAccent: '#1d4ed8',
                }
              }
            },
            style: {
              button: {
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                padding: '0.625rem 1.25rem',
              },
              input: {
                borderRadius: '0.375rem',
              },
              message: {
                color: 'red',
                fontSize: '0.875rem',
              }
            },
          }}
          providers={[]}
          redirectTo={`${window.location.origin}/`}
          magicLink={false}
          showLinks={true}
          view="sign_in"
          theme="default"
        />
      </div>
    </div>
  );
};

export default Auth;