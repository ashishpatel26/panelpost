import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
              alt="Electronics repair"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Panel Post</h2>
            <p className="text-lg text-gray-600 mb-6">
              Panel Post is a leading provider of display repair services in Ahmedabad, specializing in
              LCD, LED, OLED, and 4K panel technologies. With years of experience and a commitment to
              excellence, we deliver high-quality repair solutions to both individual customers and
              businesses.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of skilled technicians uses state-of-the-art equipment and proven techniques
              to diagnose and repair display issues efficiently. We take pride in our quick turnaround
              times and competitive pricing, making quality repair services accessible to everyone.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
                <p className="text-gray-600">Repairs Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">98%</h3>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;