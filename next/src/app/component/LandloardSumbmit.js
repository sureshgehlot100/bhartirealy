import React from 'react'

function LandloardSumbmit() {
    return (
        <div className="w-full bg-[#100a55] text-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-xl md:text-2xl font-bold text-[#7065f0] mb-4">No Spam Promise</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                    Are you a landlord?
                </h2>

                <p className="text-base md:text-lg text-[#d3d5da] text-center mb-8 max-w-xl">
                    Discover ways to increase your home's value and get listed. No Spam.
                </p>

                <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-2 mb-8">
                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 text-lg text-[#000929] placeholder-[#000929]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7065f0]"
                        />
                        <button
                            type="submit"
                            className="bg-[#7065f0] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#5a51c7] transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <p className="text-sm text-center text-[#9ea3ae]">
                    Join <span className="text-white font-medium">10,000+</span> other landlords in our estatery community.
                </p>
            </div>
        </div>
    )
}

export default LandloardSumbmit