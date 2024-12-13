import React from 'react'
import Description from './Description'
import Headingtextofherosection from './Headingtextofherosection'
import PhotoGridsection from './PhotoGridsection'

const Herosectionofgrided = () => {
  return (
    
      <section className="min-h-screen bg-[#003952] p-6 md:p-12 pb-0 md:pb-0 lg:pb-0lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="mb-4 flex gap-[100px]">
            <Headingtextofherosection 
              text="We are a small team who" 
              highlightedText="thinks big!!!"
            />
            <Description />
          </div>
          <PhotoGridsection />
        </div>
      </div>
    </section>
  )
}

export default Herosectionofgrided
