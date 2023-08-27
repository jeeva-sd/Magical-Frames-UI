import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import loki from '../assets/images/loki.jpg';
import nemo from '../assets/images/nemo.jpg';
import john from '../assets/images/john.jpg';
import spidy from '../assets/images/spidy.jpg';
import avengers from '../assets/images/avengers.jpg';

const images = [spidy, loki, avengers, nemo, john];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowImage(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setShowImage(true);
            }, 200);
        }, 2500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="" />
                    <div className=" w-full h-full">
                        <Transition
                            as={Fragment}
                            show={showImage}
                            enter="transition-opacity ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-in duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className='w-full hidden dark:block h-[156px] md:h-[278px] rounded-lg' />
                        </Transition>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
        </div>
    );
};

export default Carousel;