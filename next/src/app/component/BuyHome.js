import Image from 'next/image';
import React from 'react';

const BuyHome = () => {
    return (
        <div className='flex sm:flex-wrap max-w-full bg-[#ffff] '>
            <div className=" w-full md:w-10/12 lg:w-10/12  flex flex-wrap items-center justify-center m-auto my-8 bg-[#F7F7FD] sm:py-0 lg:py-24">
                <div className="flex flex-col items-center justify-center p-4 md:p-8 ">
                    <h1 className="text-2xl md:text-4xl font-bold text-left text-[#100a55] mb-4">
                        The new way to find your new home
                    </h1>
                    <p className="text-base md:text-lg font-medium text-left text-[#6c727f] mb-6">
                        Find your dream place to live in with more than 10k+ properties listed.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
                            <div className='flex sm:block items-center text-center justify-center'>
                                <div className='pl-0 sm:pl-11'>
                                    <Image
                                        src='/Icon.png'
                                        alt='icon'
                                        width={50}
                                        height={50}
                                    ></Image>
                                </div>
                                <div className='items-center ml-2 sm:ml-0 space-y-0 sm:space-y-4'>
                                    <p className="text-2xl text-start sm:text-center font-bold text-[#000929]">7.4%</p>
                                    <h6 className="text-sm font-semibold text-[#000929]">Property Return Rate</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
                            <div className='flex sm:block items-center text-center justify-center'>
                                <div className='pl-0 sm:pl-11'>
                                    <Image
                                        src='/Icon -2.png'
                                        alt='icon'
                                        width={50}
                                        height={50}
                                    ></Image>
                                </div>
                                <div className='items-center ml-2 sm:ml-0'>
                                    <p className="text-2xl text-start sm:text-center font-bold text-[#000929]">3,856</p>
                                    <h6 className="text-sm font-semibold text-[#000929]">Property in Sell & Rent</h6>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
                            <div className='flex sm:block items-center text-center justify-center'>
                                <div className='pl-0 sm:pl-11'>
                                    <Image
                                        src='/Icon -1.png'
                                        alt='icon'
                                        width={50}
                                        height={50}
                                    ></Image>
                                </div>
                                <div className='items-center ml-2 sm:ml-0'>
                                    <p className="text-2xl text-start sm:text-center font-bold text-[#000929]">2,540</p>
                                    <h6 className="text-sm font-semibold text-[#000929]">Complete Transactions</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:m-0 mb-8'>
                    <Image
                        src={'/illustration.png'}
                        alt='illustration'
                        width={300}
                        height={200}
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default BuyHome;