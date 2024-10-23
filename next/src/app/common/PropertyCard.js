import React from 'react';
import Image from 'next/image';
import { Heart, Bed, Bath, Square } from 'lucide-react';

const PropertyCard = ({ image, price, title, address, beds, baths, area, popular = false }) => (
  <div className="bg-white rounded-lg border border-[#f0effb] overflow-hidden">
    <div className="relative">
      <Image src={image} alt={title} width={352} height={200} className="w-full h-[200px] object-cover" />
      {popular && (
        <div className="absolute top-4 left-0 bg-[#7065f0] text-white text-xs font-bold py-1 px-3 rounded-r-full">
          POPULAR
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-bold text-[#7065f0]">${price}<span className="text-base font-medium text-[#000929] opacity-50">/month</span></p>
        <button className="p-2 rounded-full bg-white border border-[#e8e6f9]">
          <Heart className="w-6 h-6 text-[#7065f0]" />
        </button>
      </div>
      <h3 className="text-2xl font-bold text-[#000929] mb-2">{title}</h3>
      <p className="text-base text-[#000929] opacity-50 mb-4">{address}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bed className="w-5 h-5 text-[#7065f0]" />
          <span className="text-sm text-[#000929] opacity-70">{beds} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="w-5 h-5 text-[#7065f0]" />
          <span className="text-sm text-[#000929] opacity-70">{baths} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Square className="w-5 h-5 text-[#7065f0]" />
          <span className="text-sm text-[#000929] opacity-70">{area}</span>
        </div>
      </div>
    </div>
  </div>
);
export default PropertyCard;