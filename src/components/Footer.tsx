import React from 'react';
import { Monitor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Panel Post</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for professional display repair services in Ahmedabad.
              Specializing in LCD, LED, OLED, and 4K panel repairs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+91 94270 27561</li>
              <li>+91 98247 78855</li>
              <li>panelpost6@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Panel Post. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;