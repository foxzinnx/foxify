import { MobileNav } from "@/components/home/mobile-nav";
import { ProfileHeader } from "@/components/ui/profile-header";
import { user } from "@/data/user";
import { formatNums } from "@/utils/format.nums";

export const metadata = {
    title: `@${user.slug} - Foxify`
}

export default function Page() {
    return(
        <div className="bg-white">
            <MobileNav />
            <ProfileHeader backHref="/home">
                <div className="font-semibold text-left truncate max-w-43 flex-none">{user.name}</div>
                <div className="font-medium text-[14px]">{user.postCount} Posts</div>
            </ProfileHeader>
            <section className="">
                <div className="bg-neutral-500 h-28 bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url('+user.cover+')'}}></div>
                <div className="-mt-6 flex flex-col justify-center items-center px-4">
                    <div className="h-[6.5rem] w-[6.5rem] border-3 border-neutral-300 rounded-full">
                        <img src={user.avatar} alt={user.slug} className="w-full h-full rounded-full" />
                    </div>

                    <div className="mt-6 flex flex-col justify-center items-center">
                        <div className="flex items-center gap-1">
                            <div className="text-lg font-semibold text-left truncate max-w-52">{user.name}</div>
                            {user.verified &&
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" width={17}/>
                            }
                        </div>
                        <div className="text-neutral-500">@{user.slug}</div>
                        <div className="mt-2 text-[15.5px] px-4 text-center text-wrap max-w-96 text-neutral-900 ">{user.bio}</div>
                        <div className="mt-5 w-88 lg:w-96 flex justify-between items-center">
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[17px] font-semibold">{formatNums(user.postCount ?? 0)}</span>
                                <span className="text-neutral-600">Posts</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[17px] font-semibold">{formatNums(user.followers ?? 0)}</span>
                                <span className="text-neutral-600">Seguidores</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[17px] font-semibold">{formatNums(user.following ?? 0)}</span>
                                <span className="text-neutral-600">Seguindo</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}