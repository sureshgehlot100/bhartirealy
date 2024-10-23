"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
  
    const menuItems = [
      'Rent',
      'Buy',
      'Sell',
      'Manage Property',
      'Resources',
      'LogIn',
      'LogOut'
    ]
    return (
        <nav className="bg-[#fafafe] shadow-md fixed top-0 left-0 w-full z-30 ">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-[black]">
                    <div className='flex'>
                        <svg
                            width={35}
                            height={30}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[31.33px] h-[25.35px] mx-2 relative mt-1"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M22.3333 8.61331L15.2226 3.08264C14.5986 2.59719 13.8306 2.33362 13.04 2.33362C12.2494 2.33362 11.4813 2.59719 10.8573 3.08264L3.74529 8.61331C3.31788 8.94569 2.97208 9.37135 2.7343 9.85778C2.49651 10.3442 2.37304 10.8785 2.37329 11.42V21.02C2.37329 21.7272 2.65424 22.4055 3.15434 22.9056C3.65444 23.4057 4.33271 23.6866 5.03996 23.6866H21.04C21.7472 23.6866 22.4255 23.4057 22.9256 22.9056C23.4257 22.4055 23.7066 21.7272 23.7066 21.02V11.42C23.7066 10.3226 23.2 9.28664 22.3333 8.61331Z"
                                fill="#7065F0"
                                stroke="#7065F0"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>Bharti Realty</div>
                </div>
                <div className="hidden md:flex flex-grow justify-center space-x-6">
                    <Link href="/Rent" className="text-gray-600 hover:text-blue-600">Rent</Link>
                    <Link href="/Buy" className="text-gray-600 hover:text-blue-600">Buy</Link>
                    <Link href="/Sell" className="text-gray-600 hover:text-blue-600">Sell</Link>
                    <Link href="/contact" className="flex items-center text-gray-600 hover:text-blue-600">
                        Manage Property
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </Link>
                    <Link href="/contact" className="flex items-center text-gray-600 hover:text-blue-600">
                        Resources
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/login">
                        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-[#7065f0] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className="md:hidden relative">
                    <button
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {isOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`/${item}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}