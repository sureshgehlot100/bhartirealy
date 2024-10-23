import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="mb-8 md:mb-0">
                        <Logo />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FooterColumn title="SELL A HOME" links={["Request an offer", "Pricing", "Reviews", "Stories"]} />
                        <FooterColumn title="BUY A HOME" links={["Buy", "Finance"]} />
                        <FooterColumn title="BUY, RENT AND SELL" links={["Buy and sell properties", "Rent home", "Builder trade-up"]} />
                        <FooterColumn title="TERMS & PRIVACY" links={["Trust & Safety", "Terms of Service", "Privacy Policy"]} />
                        <FooterColumn title="ABOUT" links={["Company", "How it works", "Contact", "Investors"]} />
                        <FooterColumn title="RESOURCES" links={["Blog", "Guides", "FAQ", "Help Center"]} />
                    </div>
                </div>
                <div className="border-t border-[#E8E6F9] pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[#000929] opacity-50 mb-4 md:mb-0">
                        ©2024 Bharti Realty. All rights reserved
                    </p>
                    <div className="flex space-x-6">
                        <FaFacebook size={24} color="#4267B2" />
                        <FaInstagram size={24} color="#C13584" />
                        <FaTimes size={24} color="#000" />
                        <FaLinkedin size={24} color="#0077B5" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Logo() {
    return (
        <div className="flex items-center">
            <svg
                width={39}
                height={36}
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[38.21px] h-9 relative"
                preserveAspectRatio="xMidYMid meet"
            >
                <g clip-path="url(#clip0_601_1825)">
                    <path
                        d="M30.249 13.0656L21.7586 6.84363C21.0135 6.29749 20.0965 6.00098 19.1525 6.00098C18.2084 6.00098 17.2914 6.29749 16.5463 6.84363L8.05435 13.0656C7.54401 13.4396 7.13111 13.9184 6.84719 14.4657C6.56327 15.0129 6.41583 15.614 6.41614 16.2231V27.0231C6.41614 27.8188 6.7516 28.5818 7.34873 29.1445C7.94586 29.7071 8.75575 30.0231 9.60022 30.0231H28.7047C29.5492 30.0231 30.3591 29.7071 30.9562 29.1445C31.5533 28.5818 31.8888 27.8188 31.8888 27.0231V16.2231C31.8888 14.9886 31.2838 13.8231 30.249 13.0656Z"
                        fill="#7065F0"
                        stroke="#7065F0"
                        stroke-width={3}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M25.4724 22.5C21.954 24.4995 16.2513 24.4995 12.7361 22.5"
                        stroke="#F9FAFB"
                        stroke-width={3}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </g>
                <defs>
                    <clippath id="clip0_601_1825">
                        <rect width="38.209" height={36} fill="white" />
                    </clippath>
                </defs>
            </svg>
            <span className="ml-2 text-2xl font-bold text-[#0e0854]">Bharti Realty</span>
        </div>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div className="mb-8">
            <h3 className="font-bold text-base text-[#000929] mb-4">{title}</h3>
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="mb-2">
                        <a href="#" className="text-[#000929] opacity-70 hover:opacity-100 transition-opacity">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}