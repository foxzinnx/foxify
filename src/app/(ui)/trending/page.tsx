import { MobileHeader } from "@/components/home/mobileheader";
import { SearchBar } from "@/components/home/searchbar";
import { Stories } from "@/components/home/stories";
import { NavTabs } from "@/components/nav/navtabs";

export default function Page() {
    return(
        <div>
            <MobileHeader />
            <NavTabs />
            <Stories />
            <SearchBar />
        </div>
    );
}