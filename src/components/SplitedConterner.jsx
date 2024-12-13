import React from 'react'
import { ArrowRight, Diamond } from 'lucide-react';

const SplitedConterner = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                    <DimondcardcomponentText/>
                    <Dimondcardcomponent />
                </div>
            </div>
        </div>
    )
}

export default SplitedConterner


export const DimondcardcomponentText = () => {
    return (
        <div className="flex-1 space-y-6 md:mx-28">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Auto-Marketing And Help Desk Software
            </h1>
            <p className="text-lg text-gray-600">
                Empower your business with our all-in-one solution to deliver
                superior customer service and help grow relationships with customers.
            </p>
            <button className="bg-[#043a53] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors">
                View Reports
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    )
}




export const Dimondcardcomponent = () => {
    return (
        <div className="flex-1">
            <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Help Desk Software"
                className="rounded-lg shadow-xl w-full"
            /><div className="relative">
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