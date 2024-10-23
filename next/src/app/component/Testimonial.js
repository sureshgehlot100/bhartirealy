import React from 'react'
import { TestimonialAvatar } from '../common/TestimonialAvatar';

function Testimonial() {
    return (
        <div className="w-full  bg-gradient-to-b from-[#f0effb] to-white/0 px-4 py-10 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <header className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000929] mb-4">
                        Testimonials
                    </h2>
                    <p className="text-base text-[#000929] opacity-70 max-w-md mx-auto">
                        See what our property managers, landlords, and tenants have to say
                    </p>
                </header>

                <blockquote className="text-lg md:text-xl font-medium text-center text-[#000929] mb-8">
                    "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo
                    shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and
                    comparative analyzing, Estatery!"
                </blockquote>

                <div className="text-center mb-8">
                    <p className="text-base">
                        <span className="font-bold text-[#000929]">Mira Culos, </span>
                        <span className="text-[#6c727f]">Renter</span>
                    </p>
                </div>

                <div className="flex justify-center items-center gap-4 md:gap-8">
                    <TestimonialAvatar
                        imageSrc="/image.png"
                        isActive={false}
                    />
                    <TestimonialAvatar
                        imageSrc="/image-2.png"
                        isActive={false}
                    />
                    <TestimonialAvatar
                        imageSrc="/image-3.png"
                        isActive={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Testimonial