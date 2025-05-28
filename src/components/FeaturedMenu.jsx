import React from 'react';

const items = [
    {
        name: 'Lavender Breeze',
        image: 'https://www.pngall.com/wp-content/uploads/13/Chanel-Perfume-PNG-Cutout.png',
        desc: 'A soothing blend of fresh lavender and subtle vanilla notes, evoking calm and elegance.',
    },
    {
        name: 'Citrus Blossom',
        image: 'https://png.pngtree.com/png-clipart/20230427/original/pngtree-mens-perfume-cosmetics-transparent-png-image_9116566.png',
        desc: 'Bright and invigorating citrus fragrance with hints of orange and grapefruit for a refreshing aura.',
    },
    {
        name: 'Midnight Oud',
        image: 'https://png.pngtree.com/png-clipart/20230427/original/pngtree-mens-perfume-glass-bottle-blue-transparent-png-image_9116567.png',
        desc: 'A deep, mysterious scent combining exotic oud wood with spicy amber, perfect for evening wear.',
    },
];

export default function FeaturedMenu() {
    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-transparent bg-clip-text drop-shadow-lg animate-pulse">
                    Featured Perfumes
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-pink-200"
                        >
                            <div className="flex justify-center items-center pt-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[60%] h-[60%] object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-purple-700 mb-2">{item.name}</h3>
                                <p className="text-gray-700 text-md">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
