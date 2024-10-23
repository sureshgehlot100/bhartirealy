'use client'
import React, { useState } from 'react'

function VirtualHome() {
    const [activeButton, setActiveButton] = useState('tenants');

    return (
        <div className="w-full bg-white overflow-x-hidden ">
            {/* Main container */}
            <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-8 ">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 ml-9">
                        {/* Toggle Button */}
                        <div className="w-full max-w-[334px] h-16 relative">
                            <div className="w-full h-full rounded-lg bg-[#efeffb]/30 border-[1.5px] border-[#dedef7] p-2">
                                <div className="flex justify-between  h-full">
                                    <div className="w-1/2 relative">
                                        <div
                                            className={`w-full h-full rounded-md border-2 border-[#0e0854]/[0.04] shadow-lg flex items-center justify-center cursor-pointer ${activeButton === 'tenants' ? 'bg-white' : ''}`}
                                            onClick={() => setActiveButton('tenants')}
                                        >
                                            <p className={`text-sm sm:text-lg font-bold ${activeButton === 'tenants' ? 'text-[#7065f0]' : 'text-[#6c727f]'}`}>For tenants</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex items-center ml-4 justify-center cursor-pointer" onClick={() => setActiveButton('landlords')}>
                                        <div className={`w-full h-full rounded-md border-2 border-[#0e0854]/[0.04] shadow-lg flex items-center justify-center ${activeButton === 'landlords' ? 'bg-white' : ''}`}>
                                            <p className={`text-sm sm:text-lg font-medium ${activeButton === 'landlords' ? 'font-bold text-[#7065f0]' : 'text-[#6c727f]'}`}>For landlords</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#000929] max-w-[444px]">
                                We make it easy for tenants and landlords.
                            </h1>
                            <p className="text-[12px] sm:text-base font-medium text-[#6c727f] max-w-[406px]">
                                Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you'll save a bunch of money and time with our services.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7065f0] text-white w-fit">
                            <span className="text-base font-bold">See more</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            {/* Background gradient */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#e0def7] to-[#e0def7]/0 border-[1.5px] border-[#e0def7]" />

                            {/* Main image */}
                            <img
                                src="pexels-binyamin-mellish-1396122-removebg-preview-1.png"
                                alt="Real estate property"
                                className="w-full rounded-lg relative z-10"
                            />

                            {/* Feature cards */}
                            <div className="absolute top-[-20px] sm:top-3 left-4 w-full max-w-[410px] bg-white rounded-lg shadow-lg border border-[#e0def7] md:p-3 p-1 z-20">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-[#F0EFFB] flex items-center justify-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 15.9997V14.0264C14 11.4797 15.8 10.4531 18 11.7197L19.7067 12.7064L21.4133 13.6931C23.6133 14.9597 23.6133 17.0397 21.4133 18.3064L19.7067 19.2931L18 20.2797C15.8 21.5464 14 20.5064 14 17.9731V15.9997Z" stroke="#7065F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#100a55]">Virtual home tour</h3>
                                        <p className="text-sm sm:text-base text-[#4d5461]">We provide you with virtual tour</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute sm:bottom-2 bottom-[-75px] right-4 w-full max-w-[411px] bg-white rounded-lg shadow-lg border border-[#e0def7] md:p-3 p-1 z-20">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-[#7065F0] flex items-center justify-center">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66666 16H4L16 4L28 16H25.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.66666 16V25.3333C6.66666 26.0406 6.94762 26.7189 7.44772 27.219C7.94781 27.719 8.62609 28 9.33333 28H22.6667C23.3739 28 24.0522 27.719 24.5523 27.219C25.0524 26.7189 25.3333 26.0406 25.3333 25.3333V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#100a55]">Find the best deal</h3>
                                        <p className="text-sm sm:text-base text-[#4d5461]">Browse thousands of properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default VirtualHome