import React from 'react'

export default function CarouselComponent () {
    return (
        <> 
            <div className="max-w-full mx-auto h-[100%]">
                <div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                    <div className="relative h-80 md:h-96" data-carousel-inner>
                        <div data-carousel-item>
                            <img src="https://www.beautyindependent.com/wp-content/uploads/2023/08/BI-23-DealsDecade-Desktop-2000px-17-1536x768.jpg"
                                className="object-cover w-full h-full" alt="Slide 1"/>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800"></span>
                        </div>
                        <div data-carousel-item>
                            <img src="https://sublimelife.in/cdn/shop/articles/Trends-CleanBeauty-Desktop-2000px.jpg?v=1597917910"
                                className="object-cover w-full h-full" alt="Slide 2"/>
                        </div>
                        <div data-carousel-item>
                            <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64b6fba22355df001d3be5d7.jpg"
                                className="object-cover w-full h-full" alt="Slide 3"/>
                        </div>
                    </div>
                    <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                    </div>
                    <button type="button"
                        className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                        data-carousel-prev>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button type="button"
                        className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                        data-carousel-next>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
