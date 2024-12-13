import React from 'react'
import TeamImagegrid from './TeamImagegrid'

const PhotoGridsection = () => {
    const images = [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800",
    ]

    return (
        <div className="w-full overflow-x-auto mt-8">
  <div className="grid grid-cols-4 lg:gap-10 max-w-full md:grid md:grid-cols-4 md:gap-3 lg:grid-cols-4">
    {images.map((src, index) => (
      <div
        key={index}
        className={` w-[94px] overflow-hidden scroll-none flex-shrink-0 mx-auto md:w-auto ${index % 2 === 0 ? 'mt-10' : ''}`}
      >
        <TeamImagegrid src={src} index={index} />
      </div>
    ))}
  </div>
</div>

    )
}

export default PhotoGridsection
