import React from 'react'
import { ArrowRight } from 'lucide-react'

const MarketingHero = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 text-center">
      <div className="bg-white rounded-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Auto-Marketing And Help Desk Software
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
          Increase company revenue up to 55% with evaluating in depth variety of data sets and including the speed of tech adaptation we can build biriges between any companies and their customers.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 mx-auto">
          View Reports
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default MarketingHero

