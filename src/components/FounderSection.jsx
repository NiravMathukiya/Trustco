import React from 'react'
import { ChevronRight } from 'lucide-react'
import Founder from "../images/Founder.png"
import Foundergirl from "../images/Foundergirl.png"

export default function FounderSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1A202C]">
              Meet Our Founder
            </h2>
            <blockquote className="text-base md:text-lg text-[#4A5568] mb-6">
              "I think you're better off finding the money to hire someone than actually find a co-founder. The main reason? You probably won't find someone as passionate as you are about the organization you're building. And keep in mind, I have no clue who you are or what you're building so that's no judgment on you or the idea, just the reality I've observed over 20 years of startups."
            </blockquote>
            <div className="mb-6">
              <p className="font-bold text-[#1A202C]">Jason Hound</p>
              <p className="text-[#4A5568]">Founder of Trustco.</p>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-[#0B3B5B] text-white rounded-full flex items-center justify-center md:inline-flex transition duration-300 ease-in-out hover:bg-opacity-90">
              See Team Behind Our Success
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl  md:bg-transparent">
              <img
                src={Founder}
                alt="Founder"
                className="w-full h-auto"
              />
            </div>
            <div className=" hidden md:flex absolute -bottom-6 left-6 md:-left-6 w-40 h-40 md:w-24 md:h-24 rounded-full overflow-hidden border-4 md:border-white md:shadow-lg">
              <img
                src={Foundergirl}
                alt="Team member"
                className="md:w-38 md:h-28 object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-[#0B3B5B] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

