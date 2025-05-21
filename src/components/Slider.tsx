import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const categories = [
    { name: 'All', href: '/all', image: 'https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png', active: true },
    { name: 'Cafe', href: '/cafe', image: 'https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png', active: false },
    { name: 'Home', href: '/home', image: 'https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png', active: false },
    { name: 'Toys', href: '/toys', image: 'https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png', active: false },
    { name: 'Fresh', href: '/fresh', image: 'https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png', active: false },
    { name: 'Electronics', href: '/electronics', image: 'https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png', active: false },
    { name: 'Mobiles', href: '/mobiles', image: 'https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png', active: false },
    { name: 'Beauty', href: '/beauty', image: 'https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png', active: false },
    { name: 'Fashion', href: '/fashion', image: 'https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png', active: false },
    { name: 'Deal Zone', href: '/deal-zone', image: 'https://cdn.zeptonow.com/production/inventory/banner/3c9537eb-0d84-427a-ae63-3137f74ad6f0.png', active: false },
    { name: 'Baby Store', href: '/baby-store', image: 'https://cdn.zeptonow.com/production/inventory/banner/71ee967e-5e83-46df-95cb-192ff0dde506.png', active: false },
];

export default function CategoryCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const scrollAmount = 200;
    const scrollDuration = 600; 

    const smoothScroll = (element: HTMLDivElement, target: number, duration: number) => {
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();

        const easeInOutCubic = (t: number) => {
            t /= duration / 2;
            if (t < 1) return (change / 2) * t * t * t + start;
            t -= 2;
            return (change / 2) * (t * t * t + 2) + start;
        };

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.scrollLeft = easeInOutCubic(progress * duration);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        cancelAnimationFrame((element as any)._scrollAnimation);
        (element as any)._scrollAnimation = requestAnimationFrame(animateScroll);
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            const target = carouselRef.current.scrollLeft - scrollAmount;
            smoothScroll(carouselRef.current, target, scrollDuration);
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const target = carouselRef.current.scrollLeft + scrollAmount;
            smoothScroll(carouselRef.current, target, scrollDuration);
        }
    };

    const handleCategoryClick = (index: number) => {
        setActiveIndex(index);
        console.log(`Category ${categories[index].name} clicked:`, new Date());
    };

    useEffect(() => {
        const checkOverflow = () => {
            if (carouselRef.current) {
                const { scrollWidth, clientWidth } = carouselRef.current;
                setShowButtons(scrollWidth > clientWidth);
            }
        };

        checkOverflow(); 
        window.addEventListener('resize', checkOverflow); 

        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="relative overflow-hidden">
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                    style={{ willChange: 'scroll-position', scrollBehavior: 'smooth' }}
                >
                    {categories.map((category, index) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="relative flex items-center gap-2 px-2 py-3 shrink-0 snap-start"
                            onClick={() => handleCategoryClick(index)}
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={24}
                                height={24}
                                className="object-contain flex-shrink-0"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                            />
                            <span
                                className={`text-lg font-medium leading-5 ${activeIndex === index ? 'text-purple-600' : 'text-gray-600'}`}
                            >
                                {category.name}
                            </span>
                            <div
                                className={`absolute bottom-0 h-[3px] w-full bg-purple-600 transition-opacity duration-300 rounded-t-md ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </Link>
                    ))}
                </div>
                {showButtons && (
                    <>
                        <button
                            onClick={scrollLeft}
                            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white p-2 shadow-lg"
                            aria-label="Scroll Right"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}