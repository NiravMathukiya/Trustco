import React from 'react';

const testimonials = [
  {
    name: 'Andrew Wilkins',
    title: 'Managing Director, Yess Company',
    quote: "I'm totally unconvinced that two people can find a person they haven't known previously, and become an effective co-founder.",
    imageUrl: 'https://i.pravatar.cc/50?img=1', // Placeholder image URL
  },
  {
    name: 'Daisy Phelps',
    title: 'Digital Marketing Director, Monatc',
    quote: "I'm totally unconvinced that two people can find a person they haven't known previously, and become an effective co-founder.",
    imageUrl: 'https://i.pravatar.cc/50?img=2', // Placeholder image URL
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto " >
        <div className="flex justify-between items-center mb-8  md:mx-24">
          <h2 className="text-3xl md:text-4xl font-bold">We Believe people we trust</h2>
          <a href="#" className="text-blue-600 hover:underline flex items-center">
            See All <span className="ml-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-yellow-400 text-4xl">❝</span>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-8 rounded-full bg-gray-700"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
