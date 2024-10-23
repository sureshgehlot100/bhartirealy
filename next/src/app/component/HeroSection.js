import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative w-full  bg-[#f7f7fd] overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Elements */}
            <div className="absolute right-0 top-24 w-full md:w-1/2 h-[80vh] opacity-20 lg:opacity-100">
                <img
                    className="w-full h-full object-cover"
                    src="rectangle-2684.png"
                    alt="background"
                />
            </div>
            {/* Decorative Circles */}
            {[
                "right-8 top-64",
                "right-1/4 top-[680px]",
                "right-1/3 top-80",
            ].map((position, index) => (
                <div
                    key={index}
                    className={`absolute ${position} w-3.5 h-3.5 rounded-full bg-[#7570FF] opacity-40 hidden lg:block`}
                />
            ))}
            {/* Main Content Container */}
            <div className="relative container mx-auto max-w-7xl pt-24 pb-12">
                {/* Hero Content */}
                <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:space-x-2">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000929] leading-tight">
                            Buy, rent, or sell your property easily
                        </h1>
                        <p className="text-lg sm:text-xl text-[#000929] max-w-xl">
                            A great platform to buy, sell, or even rent your properties without any commisions.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                            {[
                                { number: "50k+", label: "renters" },
                                { number: "10k+", label: "properties" },
                            ].map((stat, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <div className="w-1 h-16 bg-[#e0def7]" />
                                    <div>
                                        <p className="text-3xl font-bold text-[#7065f0]">{stat.number}</p>
                                        <p className="text-[#6c727f]">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Search Container */}
                        <div className="w-full  bg-transparent  rounded-lg mt-8 shadow-lg">
                            {/* Tabs */}
                            <div className="flex ">
                                {["Rent", "Buy", "Sell"].map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-6 bg-white py-2 text-lg font-medium rounded-lg transition-colors
                                            ${index === 0
                                                ? "text-[#7065f0] border-b-2 border-[#7065f0]"
                                                : "text-[#000929]"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Search Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-3 ">
                                <div className="space-y-1 w-full">
                                    <label className="text-[#001619]/70">Location</label>
                                    <p className="font-bold">Barcelona, Spain</p>
                                </div>
                                <div className="space-y-1 w-full">
                                    <label className="text-[#001619]/70">When</label>
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold">Select Move-in Date</p>
                                        <label htmlFor="date">
                                            <CalendarIcon className="w-4 h-4 opacity-50" />
                                        </label>
                                        <input type="date" name="date" className=" border border-[#e0def7] hidden" />
                                    </div>
                                </div>
                                <button className="bg-[#7065f0] text-white px-6 py-3 rounded-lg font-bold"> {/* Added w-full to ensure full width */}
                                    Browse Properties
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Property Card */}
                    <div className="w-full lg:w-1/2 flex justify-start items-center hidden lg:flex">
                        <div className="w-1/2 max-w-sm bg-white rounded-lg shadow-xl p-4 ml-16"> 
                            <div className="aspect-video relative rounded-lg overflow-hidden">
                                <img
                                    src="pexels-binyamin-mellish-106399-1.jpeg"
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex justify-between items-start flex-col space-y-2">
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold text-[#7065f0]">$2,700</span>
                                        <span className="text-sm text-[#6c727f]">/month</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold">Beverly Springfield</h3>
                                        <p className="text-[#6c727f]">2821 Lake Sevilla, Palm Harbor, TX</p>
                                    </div>
                                </div>
                                <hr className="border-[#f0effb]" />
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <BedIcon className="w-5 h-5 text-[#7065f0]" />
                                        <span className="text-[#6c727f]">4</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BathIcon className="w-5 h-5 text-[#7065f0]" />
                                        <span className="text-[#6c727f]">2</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AreaIcon className="w-5 h-5 text-[#7065f0]" />
                                        <span className="text-[#6c727f]">6x7.5 m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {typon card} */}
            <div className=" absolute bottom-4 right-10 lg:block bg-white p-2 rounded-lg hidden">
                <div className=" bottom-0 right-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-40">
                        <Image
                            src="/pexels-pixabay-259588-1.jpeg"
                            width={200}
                            height={300}
                            objectFit="cover"
                        />
                    </div>
                    <div className="px-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-bold text-blue-600">$1,600</span>
                            <span className="text-sm text-gray-500">/month</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">Tarpon Bay</h3>
                        <p className="text-sm text-gray-600 mb-2">Palm Harbor, TX</p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>4 beds</span>
                            <span>2 baths</span>
                            <span>6x8 m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Icon Components
const CalendarIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.06177 6.26931H13.9444" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9614 8.87307H10.9675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.0031 8.87307H8.00928" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.03862 8.87307H5.0448" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10.8255 2.38599H5.18064C3.22285 2.38599 2 3.47661 2 5.48134V11.5144C2 13.5507 3.22285 14.6665 5.18064 14.6665H10.8193C12.7833 14.6665 14 13.5696 14 11.5649V5.48134C14.0062 3.47661 12.7895 2.38599 10.8255 2.38599Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BedIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BathIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33333 10H16.6667C16.8877 10 17.0996 10.0878 17.2559 10.2441C17.4122 10.4004 17.5 10.6123 17.5 10.8333V13.3333C17.5 14.2174 17.1488 15.0652 16.5237 15.6904C15.8986 16.3155 15.0507 16.6667 14.1667 16.6667H5.83333C4.94928 16.6667 4.10143 16.3155 3.47631 15.6904C2.85119 15.0652 2.5 14.2174 2.5 13.3333V10.8333C2.5 10.6123 2.5878 10.4004 2.74408 10.2441C2.90036 10.0878 3.11232 10 3.33333 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AreaIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);