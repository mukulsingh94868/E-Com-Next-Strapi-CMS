import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>

                    <div className='flex-[1] py-3'>
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 G
                        </div>

                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>

                        <div className='text-lg font-semibold'>
                            MRP : $ 193434.00
                        </div>

                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>

                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`{Also include all applicable duties}`}
                        </div>

                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>

                                <div className='text-md font-medium text-black/[0.5]'>
                                    Select guide
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black[0.1] opacity-50'>
                                    UK 10
                                </div>
                            </div>

                            <div className='text-red-600 mt-1'>
                                Size Selection ius required
                            </div>
                        </div>

                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                            Add to Cart
                        </button>
                        
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Feel unbeatable from the tee box to the final putt in a design
                                Feel unbeatable from the tee box to the final putt in a design
                                Feel unbeatable from the tee box to the final putt in a design
                                Feel unbeatable from the tee box to the final putt in a design
                                Feel unbeatable from the tee box to the final putt in a design
                                Feel unbeatable from the tee box to the final putt in a design
                            </div>
                        </div>

                    </div>
                </div>

                <RelatedProducts />
            </Wrapper>
        </div>
    )
}

export default ProductDetails;
