import React from 'react'

export default function CatecoriesComponent () {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="text-2xl font-bold text-orange-600 lg:text-3xl dark:text-white">Cagtegories</h2>

                            <p className="hidden max-w-screen-sm text-gray-600 dark:text-gray-400 md:block">
                                This is a section of some simple filler text,
                                also known as placeholder text. It shares some characteristics of a real written text.
                            </p>
                        </div>

                        <a href="#"
                            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-purple-200 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                            More
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://i.pinimg.com/564x/68/15/35/681535a325d58f4b25a17d6117b30a97.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cosmetic</span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://i.pinimg.com/564x/d5/21/be/d521be7ccb3c4f0c84bb432d61305d69.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Electronic</span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
