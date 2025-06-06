import { user } from "@/data/user";

export const SearchBar = () => {
    return(
        <div className="mt-2 flex justify-center items-center px-4 mb-5">
            <div className="bg-white  drop-shadow-sm w-full h-[50px] rounded-xl gap-3 flex justify-center items-center px-4">
                <input type="text" placeholder={`O que está acontecendo, ${user.name.split(' ')[0]}?`} className="w-full border-none outline-none"/>
                <img src="/icons/edit-2.svg" alt="" className="w-[17px] opacity-50"/>
            </div>
        </div>
    );
}