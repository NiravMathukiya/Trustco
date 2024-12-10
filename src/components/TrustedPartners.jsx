import React from 'react';
import google from '../images/Google.png'
import walmart from '../images/Walmart.png'
import amazon from '../images/Amazon.png'
import Atlassian from '../images/Atlassian.png'
import canon from '../images/canon.png'

export function TrustedPartners() {
  return (
    <section className="w-full py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex justify-center  items-center content-center ">
        <p className="text-center  text-sm font-medium text-gray-600 mb-2 md:w-1/2 ">
          Trusted by the best in the world
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-75">
          <img src={google} className="col-span-1 blend-darken  h-8 text-gray-700" />
          <img src={walmart} className="col-span-1 blend-darken  h-8 text-gray-700" />
          <img src={amazon} className="col-span-1 blend-darken  h-8 text-gray-700" />
          <img src={Atlassian} className="col-span-1 blend-darken h-8 text-gray-700" />
          <img src={canon} className="hidden md:flex content-center col-span-1 blend-darken  h-8 text-gray-700" />
        </div>
      </div>
    </section>
  );
}
