import React from 'react'
import PropertyCard from '../common/PropertyCard'
import { listings } from '../common/CardDetails'

function Property() {
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#f0effb] p-4 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000929] mb-2">
            Based on your location
          </h1>
          <p className="text-base text-[#000929] opacity-70">
            Some of our picked properties near your location.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <PropertyCard key={index} {...listing} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#7065f0] text-white font-bold py-4 px-8 rounded-lg">
            Browse more properties
          </button>
        </div>
      </div>
    </div>
  )
}

export default Property