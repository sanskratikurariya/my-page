import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
const images = [
    'https://pngimg.com/uploads/perfume/perfume_PNG10262.png',
    'https://static.vecteezy.com/system/resources/previews/035/062/433/original/ai-generated-gold-perfume-bottle-isolated-on-transparent-background-free-png.png',
    'http://pluspng.com/img-png/perfume-png-perfume-png-transparent-image-741.png',
    'http://pngimg.com/uploads/perfume/perfume_PNG10264.png',
];

export default function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const navigate = (direction) => {
        setIndex((prev) =>
            direction === 'next'
                ? (prev + 1) % images.length
                : (prev - 1 + images.length) % images.length
        );
    };

    return (
        <section id="slider" className="relative w-full h-[600px]  mt-12 bg-white flex items-center justify-center overflow-hidden">
            <div className="absolute top-1  mb-4 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-6xl mb-6 font-extrabold text-black tracking-wide animate-fadeInUp hover:scale-110 transition-transform duration-500 cursor-pointer ">
                    Essence of <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-xl animate-pulse'> Elegance</span>
                </h1>
                <p className=" text-lg md:text-xl text-gray-600 font-medium max-w-xl animate-fadeIn delay-500 hover:text-pink-600 transition-colors duration-300 cursor-pointer">
                    Discover the enchanting world of fragrances. Find your signature scent at our luxury perfume store.
                </p>
            </div>
            <div className="relative mt-20 flex items-center justify-center gap-6 perspective-[1000px] w-full h-full">
                {images.map((img, i) => {
                    const isActive = i === index;
                    const isPrev = i === (index - 1 + images.length) % images.length;
                    const isNext = i === (index + 1) % images.length;

                    return (
                        <div
                            key={i}
                            className={`absolute w-[60%] md:w-[30%] h-[30%] md:h-[50%] transition-all duration-700 rounded-2xl shadow-2xl overflow-hidden group
                ${isActive
                                    ? 'z-30 transform scale-110 translate-x-0 rotate-y-0 hover:scale-125 hover:shadow-3xl'
                                    : isPrev
                                        ? 'z-20 transform scale-90 -translate-x-[220px] rotate-y-45 hover:scale-95'
                                        : isNext
                                            ? 'z-20 transform scale-90 translate-x-[220px] rotate-y-[-45deg] hover:scale-95'
                                            : 'opacity-0 pointer-events-none'
                                }`}
                            style={{ perspective: '1000px' }}
                        >
                            <img
                                src={img}
                                alt={`slide-${i}`}
                                className="w-full h-full object-contain bg-white rounded-2xl group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    );
                })}
            </div>
            <button
                onClick={() => navigate('prev')}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md transition-all duration-300"
            >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={() => navigate('next')}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md transition-all duration-300"
            >
                <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border border-white hover:scale-150
              ${i === index ? 'bg-amber-500 scale-125' : 'bg-gray-800/40'}`}
                    />
                ))}
            </div>
        </section>
    );
}