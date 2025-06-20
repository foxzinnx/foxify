import { HomeFeed } from "@/components/home/home-feed";
import { MobileNav } from "@/components/home/mobile-nav";
import { MobileHeader } from "@/components/home/mobileheader";
import { SearchBar } from "@/components/home/searchbar";
import { Stories } from "@/components/home/stories";
import { NavTabs } from "@/components/nav/navtabs";
import { PostComposer } from "@/components/postComposer/post-composer";

export const metadata = {
  title: 'Página Inicial - Foxify',
};

export default function Page() {
    return(
        <div>
            <MobileNav />
            <MobileHeader />
            <NavTabs />
            <Stories />
            <PostComposer />
            {/* <SearchBar /> */}
            <HomeFeed />
        </div>
    );
}