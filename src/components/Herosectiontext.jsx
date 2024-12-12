import React from 'react'
import { Star, Play } from 'lucide-react'

const Herosectiontext = () => {
    return (
        <div className="md:mx-auto max-w-4xl text-center mt-6 r mx-2">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Find High-Potential
                <br />
                Customers with{' '}
                <span className="text-[#0f766e]">Trustco.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
                We provide sales teams and professionals with the knowledge, skill and
                <br />
                discipline they need to be 10x more successful.
            </p>
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className=" py-2 px-3 text-white rounded-3xl bg-[#0f766e] hover:bg-[#115e59]">
                    Get Started
                </button>
                <button className="gap-2 flex items-center">
                    {/* <div className="h-6 w-6 rounded-full bg-[#0f766e]" /> */}
                    <Play className='h-10  w-10 py-2 px-2 rounded-full text-white bg-[#0f766e]' /> Check Our Video
                </button>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center justify-center gap-2">
                <Star
                    className="h-5 w-5 fill-current text-[#4abd36]"
                />
                TrustPilot
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="h-4 w-4 fill-current text-yellow-400"
                        />
                    ))}
                </div>
                <span className="text-sm font-medium">
                    +900+ 5 Stars
                </span>
            </div>
        </div>
    )
}

export default Herosectiontext
