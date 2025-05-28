import React, { useState, useEffect } from "react";

const navLinks = [
    { href: "#slider", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#menu", label: "Menu" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#slider");
    const [menuHeight, setMenuHeight] = useState(0);
    const [measuring, setMeasuring] = useState(false);
    const [menuStyle, setMenuStyle] = useState({ height: 0, overflow: "hidden", transition: "height 0.3s ease" });


    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 150;
            let currentActive = activeLink;

            for (const link of navLinks) {
                const section = document.querySelector(link.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        currentActive = link.href;
                        break;
                    }
                }
            }

            if (window.scrollY < 50) {
                currentActive = "#slider";
            }

            setActiveLink(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeLink]);


    const handleClick = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveLink(href);
            if (isOpen) toggleMenu();
        }
    };


    const toggleMenu = () => {
        if (isOpen) {
            setMenuStyle({ height: menuHeight, overflow: "hidden", transition: "height 0.3s ease" });
            setTimeout(() => {
                setMenuStyle({ height: 0, overflow: "hidden", transition: "height 0.3s ease" });
            }, 10);
        } else {
            setMeasuring(true);
            setIsOpen(true);
        }
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        if (isOpen && measuring) {
            const menu = document.getElementById("mobile-menu");
            if (menu) {
                const height = menu.scrollHeight;
                setMenuHeight(height);
                setMenuStyle({ height: height, overflow: "hidden", transition: "height 0.3s ease" });
                setMeasuring(false);
            }
        }
    }, [isOpen, measuring]);

    const baseClasses = `transition duration-300 font-medium relative px-3 py-2 border-b-2`;
    const hoverClasses = `hover:text-indigo-600 hover:border-indigo-600`;

    return (
        <>

            <header className="fixed top-0 w-full z-50 bg-white shadow-md h-16">
                <nav className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

                    <img
                        src="https://assets.limetray.com/assets/image_manager/uploads/5204/limetray-logo.webp"
                        alt="Logo"
                        className="h-10 w-auto"
                    />


                    <ul className="hidden md:flex space-x-6 text-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={`${baseClasses} ${hoverClasses} ${activeLink === link.href ? "text-indigo-600 border-indigo-600" : "border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>


                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >

                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                <div
                    id="mobile-menu"
                    style={menuStyle}
                    className="overflow-hidden transition-[height] duration-300 md:hidden"
                >
                    <ul className="px-4 pt-4 pb-6 space-y-2 bg-white text-gray-700 rounded-md shadow-md">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={`${baseClasses} ${hoverClasses} block w-full ${activeLink === link.href ? "text-indigo-600 border-indigo-600" : "border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            <div className="pt-16"></div>
        </>
    );
}

