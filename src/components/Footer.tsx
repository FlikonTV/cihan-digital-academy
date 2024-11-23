import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img 
            src="/lovable-uploads/fb11656c-f7bd-42f1-a004-ba1a2869a8cb.png"
            alt="Cihan Logo"
            className="h-12 w-auto mb-2"
          />
          <div>
            © 2024 Cihan Digital Academy. All rights reserved.
          </div>
          <div>
            Powered by <a 
              href="https://cihanmediacomms.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline inline-flex items-center"
            >
              Cihan Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;