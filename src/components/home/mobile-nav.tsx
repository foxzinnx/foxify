import { NavItem } from "../nav/nav-item";

export const MobileNav = () => {
    return(
        <>
            <div className="fixed bg-white bottom-0 right-0 left-0 md:hidden z-40 border-t border-t-neutral-300">
                <div className="flex justify-evenly items-center">
                    <NavItem href="/home" icon="/icons/home.svg" size={24}  />
                    <NavItem href="/search" icon="/icons/search.svg" size={24} />
                    <NavItem href="/publish" icon="/icons/plus-square.svg" size={28} active />
                    <NavItem href="/messages" icon="/icons/message-circle.svg" size={24} />
                    <NavItem href="/profile" icon="/icons/user.svg" size={24} />
                </div>
            </div>
        </>
    );
}