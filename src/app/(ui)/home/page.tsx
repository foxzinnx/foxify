import { SearchBar } from "@/components/home/searchbar";
import { Stories } from "@/components/home/stories";

export default function Page() {
    return(
        <div className="">
            <Stories />
            <SearchBar />
        </div>
    );
}