import React from 'react';
import { FaLeaf, FaRecycle, FaAward, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md"></div>
      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-xl animate-pulse">
          Experience Fragrance Like Never Before
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          At <span className="font-semibold text-purple-600">Scentora</span>, we believe perfume is not just a fragrance — it’s a feeling. With more than a decade of experience, we craft each bottle as a blend of elegance, emotion, and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaLeaf className="text-4xl text-purple-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Natural Ingredients</h4>
            <p className="text-gray-600 text-sm mt-2">Sourced globally for a refined and organic blend.</p>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaRecycle className="text-4xl text-pink-500 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Eco Packaging</h4>
            <p className="text-gray-600 text-sm mt-2">We care for the planet with every drop you wear.</p>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaAward className="text-4xl text-red-500 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Award-Winning</h4>
            <p className="text-gray-600 text-sm mt-2">Recognized globally for quality and luxury.</p>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaGlobe className="text-4xl text-blue-500 mb-4" />
            <h4 className="text-lg font-bold text-gray-800">Worldwide Reach</h4>
            <p className="text-gray-600 text-sm mt-2">Loved and shipped to over 40+ countries.</p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-5xl font-semibold text-gray-800 mb-4 font-bold">Our Mission</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            To empower self-expression and confidence through signature fragrances that linger in memories and hearts. We design scents that speak your language — elegant, bold, and unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
