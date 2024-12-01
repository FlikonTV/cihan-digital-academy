import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link, useNavigate } from "react-router-dom";

const ADMIN_EMAILS = [
  'cdatraining@cihanmediacomms.com',
  'aiautomation@cihanmediacomms.com'
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setIsAuthenticated(true);
          setIsAdmin(ADMIN_EMAILS.includes(user.email || ''));
        } else {
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Error in checkAuth:', error);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const scrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/fb11656c-f7bd-42f1-a004-ba1a2869a8cb.png" 
              alt="Cihan Digital Academy" 
              className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Courses", "Learning Methods", "Why Choose Us", "Corporate Training"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Sign In
              </Link>
            )}
            <a 
              href="#courses" 
              onClick={scrollToCourses}
              className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-secondary transition-all duration-300 transform hover:scale-105 text-sm font-medium shadow-md hover:shadow-lg hover:shadow-primary/25"
            >
              Enroll Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary transition-colors duration-300 p-2 rounded-md hover:bg-primary/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {["Courses", "Learning Methods", "Why Choose Us", "Corporate Training"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-300 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-300 text-sm font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
            <a 
              href="#courses" 
              onClick={scrollToCourses}
              className="block px-3 py-2 text-primary font-medium hover:bg-primary hover:text-white rounded-md transition-all duration-300 text-sm"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
