import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <div>
        © {new Date().getFullYear()} Cihan Digital Academy. All rights reserved.
      </div>
      <div className="mt-2">
        Powered by <a 
          href="https://cihanmediacomms.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:underline"
        >
          Cihan Media
        </a>
      </div>
    </footer>
  );
};

export default Footer;