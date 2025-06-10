import { NavItem } from "../nav/nav-item";

export const MobileNav = () => {
    return(
        <>
            <div className="fixed bg-white bottom-0 right-0 left-0 md:hidden z-50 border-t border-t-neutral-300">
                <div className="flex justify-evenly p-1 items-center">
                    <NavItem href="/home" icon="/icons/home.svg" size={25}  />
                    <NavItem href="/search" icon="/icons/search.svg" size={25} />
                    <NavItem href="/publish" icon="/icons/plus-square.svg" size={29} active />
                    <NavItem href="/messages" icon="/icons/message-circle.svg" size={25} />
                    <NavItem href="/profile" icon="/icons/user.svg" size={25} />
                </div>
            </div>
        </>
    );
}