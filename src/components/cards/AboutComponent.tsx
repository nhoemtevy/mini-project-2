import React from 'react'

export const AboutComponent = () => {
    return (
        <div className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 className="text-3xl font-bold leading-tight text-orange-600 dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                    am
                    <br className="block sm:hidden" />Tevy Carter
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                    Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>

                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-orange-500 dark:bg-gray-900"></span>
                    <span className="relative"> Have a question? </span>
                    </span>
                    <br className="block sm:hidden" />Ask me on <a href="#" title=""
                        className="transition-all duration-200 text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-600 hover:underline">Twitter</a>
                </p>
            </div>

            <div className="relative">
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="pic tevy" />
            </div>

        </div>
    </div>
        </div>
    )
}
