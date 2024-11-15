import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="https://cihanmediacomms.com/wp-content/uploads/2023/10/Cihan-Media-Logo-1.png" alt="Cihan Digital Academy" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-primary transition-colors">Courses</a>
            <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Learning Methods</a>
            <a href="#why-us" className="text-gray-700 hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#corporate" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors">Corporate Training</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Courses</a>
            <a href="#delivery" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Learning Methods</a>
            <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#corporate" className="block px-3 py-2 text-primary font-medium">Corporate Training</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;