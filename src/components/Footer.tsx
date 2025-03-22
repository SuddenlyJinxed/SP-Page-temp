
import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="font-display font-bold text-xl tracking-tight opacity-90 hover:opacity-100 transition-opacity"
            >
              ALEXANDRA
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Olympic gold medalist, bestselling author, and motivational speaker sharing the mindset of champions.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {year} Alexandra Coleman. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
