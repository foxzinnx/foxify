"use client"
import { NavItem } from "@/components/nav/nav-item";
import { NavProfile } from "@/components/nav/nav-profile";
import { TrendingTopics } from "@/components/right-side/trendingTopics";
import { UserRanking } from "@/components/right-side/userRanking";
import { Logo } from "@/components/ui/logo";
import { user } from "@/data/user";
import { ReactNode, useEffect, useState, useRef } from "react";

type Props = {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    const [topOffset, setTopOffset] = useState(0);
    const asideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateOffset = () => {
            if (asideRef.current) {
                const viewportHeight = window.innerHeight;
                const asideHeight = asideRef.current.scrollHeight;
                
                if (asideHeight > viewportHeight) {
                    const offset = asideHeight - viewportHeight + 40;
                    setTopOffset(-offset);
                } else {
                    setTopOffset(0);
                }
            }
        };

        const timer = setTimeout(calculateOffset, 100);
        
        window.addEventListener('resize', calculateOffset);
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateOffset);
        };
    }, []);

    return(
        <main id="main-layout" className="rounded-2xl min-h-screen flex justify-center mx-auto max-w-7xl">
            <section id="left-side" className="bg-white rounded-lg hidden md:flex flex-col sticky top-0 h-screen w-93 px-8 border-r-2 border-neutral-200">
                <div className="flex-1 mt-6">
                    <div className="w-26">
                        <Logo size={100} />
                    </div>
                    <div id="nav-profile" className="mt-9">
                        <NavProfile />
                    </div>
                    <div id="nav-items" className="mt-3 mb-3 flex flex-col overflow-hidden">
                        <NavItem href="/home" label="Página inicial" icon="/icons/home.svg" size={30} />
                        <NavItem href="/notifications" label="Notificações" icon="/icons/bell.svg" size={30} />
                        <NavItem href={`/profile`} label="Meu perfil" icon="/icons/user.svg" size={30} />
                        <NavItem href="/messages" label="Mensagens" icon="/icons/message-circle.svg" size={30} />
                        <NavItem href="/publish" label="Publicar" icon="/icons/plus-square.svg" size={30} />
                        <NavItem href="/search" label="Buscar" icon="/icons/search.svg" size={30} />
                        <NavItem href="/settings" label="Configurações" icon="/icons/settings.svg" size={30} />
                    </div>

                    <div id="about-area" className="flex border-t-2 border-neutral-200 pt-6 px-4 justify-center items-center mb-5">
                        <ul className="flex font-medium opacity-75 text-center flex-wrap text-[13px] gap-3">
                            <li><a href="/about" className="hover:underline">Sobre</a></li>
                            <li className="select-none opacity-50">|</li>
                            <li><a href="/help" className="hover:underline">Ajuda</a></li>
                            <li className="select-none opacity-50">|</li>
                            <li><a href="/privacy" className="hover:underline">Privacidade</a></li>
                            <li className="select-none opacity-50">|</li>
                            <li><a href="/terms" className="hover:underline">Termos</a></li>
                            <li className="select-none opacity-50">|</li>
                            <li><a href="/publicy" className="hover:underline">Publicidade</a></li>
                            <li className="select-none opacity-50">|</li>
                            <li><a href="/services" className="hover:underline">Serviços corporativos</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="children-section" className="flex-1 md:mx-auto max-w-full">
                {children}
            </section>
            <aside 
                id="aside-right" 
                ref={asideRef}
                className="bg-white rounded-lg hidden lg:flex flex-col gap-6 h-fit w-96 px-8 py-6 border-l-2 border-neutral-200 sticky"
                style={{
                    top: `${topOffset}px`
                }}
            >
                <TrendingTopics />
                <UserRanking />
            </aside>
        </main>
    );
}