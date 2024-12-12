import React from 'react'
import { Diamond, ArrowRight } from 'lucide-react'
import info from '../images/info.png';

const InformationSection = () => {
    return (
        <div className="mb-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center md:justify-between gap-20">
                    {/* Left side with image */}
                    <div>
                        <Leftsideimageofcompany/>
                    </div>

                    {/* Right side with content */}
                    <div>
                        <h1 className="text-5xl font-bold mb-6">
                            Building bridges between{' '}
                            <span className="text-gray-400">companies</span>
                            <br />
                            <span className="text-gray-400">and customers</span>
                        </h1>
                        <p className="text-gray-600 mb-8 text-lg">
                            With evaluating in depth variety of data sets and including the speed
                            of tech adaptation we can build bridges between any companies and
                            their customers.
                        </p>
                        <button className="bg-[#043a53] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors">
                            View Reports
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection

export function Leftsideimageofcompany() {
    return (
        <div className='mx-4'>
            <img
                src={info}
                alt="Business meeting"
                className="rounded-lg shadow-2xl md:m-4 "
            />
            <div className="relative">
                <div className="absolute bg-[#043a53] -bottom-16 md:-bottom-10 md:-right-10 -right-0 bg-primary  md:p-6 p-4 m-2 md:m-0  md:x-0 x-8 rounded-full">
                    <div className="text-white text-center">
                        <Diamond className=" mx-auto mb-2" />
                        <div className="text-2xl font-bold">#1</div>
                        <div className="text-sm">Best Award</div>
                        <div className="text-sm">2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
