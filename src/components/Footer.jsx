import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-12 shadow-inner">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-pink-600 tracking-wide">
                    Essence Perfumerie
                </h2>

                <div className="flex justify-center space-x-10 mb-8 text-sm uppercase tracking-widest font-medium text-gray-500">
                    <a href="#" className="hover:text-pink-600 transition-colors duration-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-pink-600 transition-colors duration-300">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-pink-600 transition-colors duration-300">
                        Contact
                    </a>
                </div>

                <div className="flex justify-center space-x-8 mb-8 text-pink-400 text-2xl">
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="hover:text-pink-600 transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="hover:text-pink-600 transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="hover:text-pink-600 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:contact@essenceperfumerie.com"
                        aria-label="Email"
                        className="hover:text-pink-600 transition-colors duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <p className="text-xs text-gray-400 tracking-wide">
                    &copy; 2025 Essence Perfumerie. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
