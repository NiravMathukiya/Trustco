import React from 'react'

const TeamImagegrid = ({ src, index }) => {
    return (
        <div className="relative overflow-hidden rounded-lg ">
            <img
                src={src}
                alt={`Team member ${index + 1}`}
                className="md:w-[300px] w-16 rounded h-36 md:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
    )
}

export default TeamImagegrid
