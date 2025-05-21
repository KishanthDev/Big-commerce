'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Sidebar from './Sidebar';

const categories = [
    { name: 'All', image: 'https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png' },
    { name: 'Cafe', image: 'https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png' },
    { name: 'Home', image: 'https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png' },
    { name: 'Toys', image: 'https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png' },
    { name: 'Fresh', image: 'https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png' },
    { name: 'Electronics', image: 'https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png' },
    { name: 'Mobiles', image: 'https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png' },
    { name: 'Beauty', image: 'https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png' },
    { name: 'Fashion', image: 'https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png' },
    { name: 'Deal Zone', image: 'https://cdn.zeptonow.com/production/inventory/banner/3c9537eb-0d84-427a-ae63-3137f74ad6f0.png' },
    { name: 'Baby Store', image: 'https://cdn.zeptonow.com/production/inventory/banner/71ee967e-5e83-46df-95cb-192ff0dde506.png' },
];

const ITEM_WIDTH = 140;

export default function CategoryCarousel() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [xOffset, setXOffset] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const controls = useAnimation();

    const scrollLeft = () => {
        const newX = Math.min(xOffset + ITEM_WIDTH * 2, 0);
        setXOffset(newX);
        controls.start({ x: newX, transition: { type: 'tween', duration: 0.5 } });
    };

    const scrollRight = () => {
        const maxScroll = -(ITEM_WIDTH * categories.length - (containerRef.current?.clientWidth || 0));
        const newX = Math.max(xOffset - ITEM_WIDTH * 2, maxScroll);
        setXOffset(newX);
        controls.start({ x: newX, transition: { type: 'tween', duration: 0.5 } });
    };

    const handleCategoryClick = (index: number) => {
        if (categories[index].name === 'All') {
            setSidebarOpen(true);
            setActiveIndex(null); // Deselect all
        } else {
            setSidebarOpen(false); // Close if open
            setActiveIndex(index);
        }
    };


    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                const { scrollWidth, clientWidth } = containerRef.current;
                const isOverflowing = scrollWidth > clientWidth;

                const isSmallScreen = window.innerWidth < 768;

                setShowButtons(isOverflowing && isSmallScreen);
            }
        };
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, []);


    // Handle horizontal scroll with mouse wheel
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();

            // Normalize scroll delta for horizontal scroll
            const deltaX = e.deltaY;

            const maxScroll = -(ITEM_WIDTH * categories.length - el.clientWidth);
            let newX = xOffset - deltaX;

            if (newX > 0) newX = 0;
            if (newX < maxScroll) newX = maxScroll;

            setXOffset(newX);
            controls.start({ x: newX, transition: { type: 'tween', duration: 0.3 } });
        };

        el.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [xOffset, controls]);

    return (
        <div className="relative max-w-7xl mx-auto px-4 mt-2">
            <div className="relative overflow-hidden">
                <div ref={containerRef} className="overflow-hidden cursor-grab">
                    <motion.div
                        animate={controls}
                        className="flex gap-3"
                        style={{ willChange: 'transform' }}
                    >
                        {categories.map((category, index) => (
                            <div
                                key={category.name}
                                className="relative flex items-center gap-2 px-2 py-3 flex-shrink-0 cursor-pointer select-none"
                                onClick={() => handleCategoryClick(index)}
                            >
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={24}
                                    height={24}
                                    className="object-contain flex-shrink-0"
                                    sizes="100vw"
                                />
                                <span
                                    className={`text-sm font-medium ${activeIndex === index ? 'text-purple-600' : 'text-gray-600'}`}
                                >
                                    {category.name}
                                </span>
                                <div
                                    className={`absolute bottom-0 h-[3px] w-full bg-purple-600 rounded-t-md transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {showButtons && (
                    <>
                        <button
                            onClick={scrollLeft}
                            className="scroll-buttons absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg z-10"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="scroll-buttons absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg z-10"
                            aria-label="Scroll Right"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </>
                )}

            </div>
            {activeIndex !== null && categories[activeIndex].name !== 'All' && (
                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                    {categories[activeIndex].name}
                </h2>
            )}

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
    );
}
