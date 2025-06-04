"use client"
import { user } from "@/data/user";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export const Stories = () => {
    const users = [user, user, user, user, user, user];
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    
    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            
            setCanScrollLeft(scrollLeft > 0);
            
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };
    
    useEffect(() => {
        checkScrollability();
        
        const handleScroll = () => {
            checkScrollability();
        };
        
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }
        
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -160,
                behavior: 'smooth'
            });
        }
    };
    
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 160,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <div className="bg-white rounded-md py-5 relative border-b-2 pb-3 border-neutral-200/50">
            {canScrollLeft && (
                <div className="hidden drop-shadow-md lg:flex absolute top-10 px-3 z-10">
                    <img 
                        src="/icons/arrow-left-circle.svg" 
                        alt="Scroll Left" 
                        width={30} 
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={scrollLeft}
                    />
                </div>
            )}
            
            {canScrollRight && (
                <div className="hidden lg:flex absolute top-10 right-0 px-3 z-10">
                    <img 
                        src="/icons/arrow-right-circle.svg" 
                        alt="Scroll Right" 
                        width={30} 
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={scrollRight}
                    />
                </div>
            )}
            
            <div
                ref={scrollContainerRef}
                className="grid auto-cols-max gap-x-2 overflow-x-auto scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-[rgb(241,159,60)] scrollbar-track-gray-100"
                style={{
                    gridTemplateColumns: 'auto 1fr',
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <div className="flex col-span-2">
                    <div className="flex pl-1 flex-col items-center gap-2 min-w-[5rem] flex-shrink-0">
                        <Link href={'/story/publish'} className="group group inline-block p-[2px] rounded-full transition-all duration-500 bg-gradient-to-r from-[#FF7A00] via-[#FF7D09] to-[#FFD600]">
                            <div className="w-16 flex justify-center items-center h-16 object-cover rounded-full border-2 border-white p-[1px]">
                                <img src="/icons/plus.svg" alt="" className="w-9 transition-all group-hover:scale-110 group-hover:rotate-360 duration-500 object-cover filter invert"/>
                            </div>
                        </Link>
                        <span className="text-sm text-center truncate w-24 font-medium">Seu story</span>
                    </div>
                    {users.map((user, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 min-w-[5rem] flex-shrink-0">
                            <Link href={`${user.slug}/storys`} className="p-[2px] rounded-full inline-block bg-gradient-to-r from-orange-400 via-orange-400 to-yellow-400">
                                <img
                                    src={user.avatar}
                                    alt={`${user.slug} avatar`}
                                    className="w-16 object-cover rounded-full p-[1px]"
                                />
                            </Link>
                            <span className="text-sm text-center truncate w-24 font-medium">{user.slug}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};