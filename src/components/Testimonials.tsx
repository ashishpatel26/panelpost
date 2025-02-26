import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Business Owner',
    content: 'Panel Post provided exceptional service for our office displays. Quick turnaround and professional work.',
    rating: 5,
  },
  {
    name: 'Priya Shah',
    role: 'Home Customer',
    content: "Fixed my TV screen when others said it couldn't be repaired. Excellent service at a reasonable price.",
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'IT Manager',
    content: 'Great technical expertise and customer service. Our go-to repair service for all display issues.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
          <p className="text-lg text-gray-600">What our clients say about our services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;