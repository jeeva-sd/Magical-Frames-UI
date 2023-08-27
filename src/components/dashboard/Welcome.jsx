import React from 'react';
import { SiWarnerbros, SiAbbott, Si3M, SiAlliedmodders, Si4D } from 'react-icons/si';
import Carousel from "../../widgets/Carousel";

const productionHouses = [
    { icon: SiWarnerbros, name: 'Bros' },
    { icon: SiAbbott, name: 'Giff' },
    { icon: Si3M, name: '3AM' },
    { icon: SiAlliedmodders, name: 'Marvel' },
    { icon: Si4D, name: '4D' }
];

const Welcome = () => {
    return (
        <div>
            <section>
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            Handpicked Favorites, Just for You
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
                            With our wide selection of movies and TV shows, you're sure to find something you'll love. We also offer a variety of features to make your streaming experience even better with high streaming quality options.
                            Subtitles and closed captions: You can choose to have subtitles or closed captions on your movies and TV shows, regardless of the language they're in. And
                            You can create a watchlist of movies and TV shows that you want to watch later.
                        </p>

                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Carousel />
                    </div>
                </div>
            </section>

            <section>
                <div className="py-32">
                    <div className="mx-auto max-w-7xl px-6 ">
                        <h2 className="text-center font-light text-xl text-gray-700">
                            Movies by acclaimed directors and production houses.
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            {productionHouses.map((company, i) =>
                            (
                                <div className={`lg:flex md:flex items-center gap-2 ${i === productionHouses.length - 1 ? 'hidden' : null}`} key={i}>
                                    <company.icon fontSize={60} />
                                    <span className='text-2xl font-bold'>{company.name}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Welcome;