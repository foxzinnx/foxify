import { HomeFeed } from "@/components/home/home-feed";
import { MobileHeader } from "@/components/home/mobileheader";
import { SearchBar } from "@/components/home/searchbar";
import { Stories } from "@/components/home/stories";
import { NavTabs } from "@/components/nav/navtabs";

export const metadata = {
  title: 'Página Inicial - Foxify',
};

export default function Page() {
    return(
        <div>
            <MobileHeader />
            <NavTabs />
            <Stories />
            <SearchBar />
            <HomeFeed />
        </div>
    );
}