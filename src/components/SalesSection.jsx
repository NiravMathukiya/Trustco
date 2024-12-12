import React from 'react'
import { Play } from 'lucide-react'

export default function SalesSection() {
  return (
    <div className="bg-[#003652]  md:pt-8 lg:px-12" style={{paddingBottom:"-10px"}}>
      <div className="max-w-7xl mx-auto p-2">
        {/* Header Section */}
        <div className="space-y-2 mb-6 mx-4 mt-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            High-Level Sales
            <span className="block text-[#FDB813]">Teams & Professionals</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl">
            Circuit is flexible and affordable and offers you exceptional support to achieve your career goals. Circuit is a Global training provider based across the UK that specializes.
          </p>
        </div>

        {/* Video Card Section */}
        <div className="w-100 overflow-hidden md:m-20 bg-[#f5e6d3] rounded-lg shadow-lg m-4">
          <div className="relative aspect-video ">
            {/* Video Thumbnail */}
            <div className=" absolute inset-0 bg-[url('./images/videobg.png')] bg-cover bg-center" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                onClick={() => console.log('Play video')}
                aria-label="Play video"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#003652]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

