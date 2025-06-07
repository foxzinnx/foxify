import { user } from "@/data/user";
import Link from "next/link";

export const NavProfile = () => {

    const formatFollowers = (count: number) => {
        if (count >= 1_000_000){
            return (count / 1_000_000).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
            }) + 'M';
        }

        if(count >= 1_000){
            return (count / 1_000).toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
            }) + 'k';
        }

        return count.toLocaleString('pt-BR');
    }

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="size-23 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img 
                        src={user.avatar}
                        alt={user.name}
                        className="size-full"
                    />
                </Link>
            </div>
            <div className="flex-1 flex justify-center flex-col items-center gap-1 mt-4 overflow-hidden">
                <div className="flex justify-center flex-col items-center">
                    <Link href={`/${user.slug}`} className="text-lg text-center justify-center flex items-center gap-1 font-semibold">
                        <p className="w-50 truncate">{user.name}</p>
                    </Link>
                    <div className="text-md font-medium opacity-60">@{user.slug}</div>
                </div>
                <div>
                    {user.verified &&
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-sm opacity-50 select-none">Verificado</span>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" alt="verified-icon" width={17}/>
                        </div>
                    }
                </div>
                <div className="mt-3 border-b-2 border-neutral-200/50 pb-5 flex w-82 ml-7 justify-center gap-12 items-center">
                    <div className="flex flex-col items-center">
                        <span className="text-[17px] font-semibold">{user.postCount}</span>
                        <p className="font-medium text-[14px] opacity-70">Posts</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[17px] font-semibold">{formatFollowers(user.followers)}</span>
                        <p className="font-medium text-[14px] opacity-70">Seguidores</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[17px] font-semibold">{user.following}</span>
                        <p className="font-medium text-[14px] opacity-70">Seguindo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}