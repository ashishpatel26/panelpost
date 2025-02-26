import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert Panel
              <span className="block text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                Repair Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Specializing in advanced repair solutions for LCD, LED, OLED, and 4K panels with state-of-the-art technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;