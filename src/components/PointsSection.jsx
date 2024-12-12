import React from 'react';
import svg1 from '../images/svg1.png'
import svg2 from '../images/svg2.png'
import svg3 from '../images/svg3.png'

  export default function PointsSection() {
    

    return (
      <section className="max-w-7xl mx-auto pt-4 px-4 md:py-24 md:px-6 lg:px-8 md:flex md:gap-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-white bg-[#0B3B5B] rounded-full text-sm font-medium">
            Beneficial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B3B5B]">
            Beneficial Elements
          </h2>
          <p className="text-lg text-gray-600">
            An awesome & poweful tools for your business, increase business revenue
          </p>
        </div>

        {/* Points Grid */}
        <Infrocard />
      </section>
    )
  }


export function Infrocard() { 
  const points = [
    {
      title: "Happy Customers",
      description: "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
      image: svg1
    },
    {
      title: "Best Integrations",
      description: "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
      image: svg2
    },
    {
      title: "Grow Without Problems",
      description: "with evaluating in depth variety of data sets and including the speed of tech adaptation we can build bridges between any companies and their customers.",
      image: svg3
    }
  ]
  return(

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 mt-4">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-gray-300 rounded-2xl p-8 transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <img
                  src={point.image}
                  alt=""
                  className="w-20 h-20"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0B3B5B]">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
  )
} 