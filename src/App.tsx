import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log("Current user:", user); // Debug log

        if (!user) {
          console.log("No user found, redirecting to auth"); // Debug log
          setIsAdmin(false);
          setIsLoading(false);
          return;
        }

        // First check if profile exists
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', user.id)
          .single();

        console.log("Profile data:", profile, "Error:", error); // Debug log

        if (error) {
          if (error.code === 'PGRST116') {
            console.log("Profile doesn't exist, creating new profile"); // Debug log
            const { data: newProfile, error: insertError } = await supabase
              .from('profiles')
              .insert([{ id: user.id, is_admin: false }])
              .select('is_admin')
              .single();

            console.log("New profile created:", newProfile, "Error:", insertError); // Debug log

            if (insertError) {
              console.error('Error creating profile:', insertError);
              setIsAdmin(false);
            } else {
              setIsAdmin(!!newProfile?.is_admin);
            }
          } else {
            console.error('Error fetching profile:', error);
            setIsAdmin(false);
          }
        } else {
          console.log("Setting admin status to:", !!profile?.is_admin); // Debug log
          setIsAdmin(!!profile?.is_admin);
        }
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

  console.log("Final isAdmin value:", isAdmin); // Debug log
  return isAdmin ? <>{children}</> : <Navigate to="/auth" />;
};

const AuthHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (code) {
      // If there's a code parameter, redirect to auth page with reset=true
      navigate('/auth?reset=true');
    }
  }, [location, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;