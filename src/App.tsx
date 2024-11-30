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

        // Check if user's email is in the ADMIN_EMAILS array
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

const AuthHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    if (code) {
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