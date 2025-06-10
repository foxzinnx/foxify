"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label?: string;
    icon: string;
    href: string;
    active?: boolean;
    className?: string;
    size: number;
}

export const NavItem = ({ label, icon, href, active, size, className }: Props) => {
    const pathName = usePathname();
    const isMe = pathName === href;
    const isActive = active || isMe;

    const getSolidIcon = (iconPath: string) => {
        return iconPath.replace('.svg', '-solid.svg');
    };

    return(
        <Link href={href} className={`flex items-center gap-4 group rounded-2xl px-4 py-3 transition-all duration-200 ${className} ${active || isMe ? 'opacity-100' : 'opacity-60'} hover:opacity-100`}>
            <img src={isActive ? getSolidIcon(icon) : icon} width={size}/>
            <div id="nav-label" className={`text-[17px] font-medium group-hover:font-semibold ${active || isMe ? 'font-semibold' : 'font-medium'}`}>{label}</div>
        </Link>
    );
}