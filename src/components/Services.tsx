import React from 'react';
import { Monitor, Tv, Smartphone, PenTool as Tool } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-12 w-12" />,
    title: 'LCD Panel Repair',
    description: 'Expert repair services for LCD panels of all sizes, restoring clarity and functionality.',
  },
  {
    icon: <Tv className="h-12 w-12" />,
    title: 'LED Panel Bonding',
    description: 'Professional LED panel bonding services using advanced techniques and equipment.',
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: 'OLED Screen Repair',
    description: 'Specialized repair solutions for OLED displays, maintaining color accuracy and brightness.',
  },
  {
    icon: <Tool className="h-12 w-12" />,
    title: '4K Panel Services',
    description: 'Comprehensive repair and maintenance services for 4K resolution displays.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive display repair solutions using cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover-scale"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;