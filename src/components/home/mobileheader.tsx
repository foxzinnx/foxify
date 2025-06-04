import { NavItem } from "../nav/nav-item";
import { Logo } from "../ui/logo";

export const MobileHeader = () => {
    return(
        <header className="bg-white flex md:hidden justify-between items-center px-4 py-2">
            <div>
                <Logo size={100} />
            </div>

            <div>
                <NavItem href="/notifications" icon="/icons/bell.svg" size={25} active />
            </div>
        </header>
    );
}