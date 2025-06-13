"use client"
import { MobileNav } from "@/components/home/mobile-nav";
import { NavTabs } from "@/components/nav/profile-nav";
import { PostItem } from "@/components/post/post-item";
import { ProfileHeader } from "@/components/ui/profile-header";
import { post } from "@/data/post";
import { user } from "@/data/user";
import { formatNums } from "@/utils/format.nums";
import Link from "next/link";
import { useState } from "react";

const profileTabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'respostas', label: 'Respostas' },
    { id: 'midia', label: 'Mídia' },
    { id: 'curtidas', label: 'Curtidas' },
];

export default function Page() {
    const isMe = true;
    const [activeTab, setActiveTab] = useState('posts');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'posts':
                return <div className="">
                    <PostItem post={post} />
                    <PostItem post={post} />
                    <PostItem post={post} />
                </div>;
            case 'respostas':
                return <div className="p-4">Conteúdo das Respostas...</div>;
            case 'destaques':
                return <div className="p-4">Conteúdo dos Destaques...</div>;
            case 'artigos':
                return <div className="p-4">Conteúdo dos Artigos...</div>;
            case 'midia':
                return <div className="p-4">Conteúdo da Mídia...</div>;
            case 'curtidas':
                return <div className="p-4">Conteúdo das Curtidas...</div>;
            default:
                return <div className="p-4">Conteúdo não encontrado</div>;
        }
    };

    return(
        <div className="bg-white">
            <MobileNav />
            <ProfileHeader backHref="/home">
                <div className="font-semibold text-left truncate max-w-43 flex-none">{user.name}</div>
                <div className="font-medium text-[14px]">{user.postCount} Posts</div>
            </ProfileHeader>
            <section className="">
                <div className="bg-neutral-500 h-28 bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url('+user.cover+')'}}></div>
                <div className="-mt-7 flex flex-col justify-center items-center px-4">
                    <div className="h-[6.5rem] w-[6.5rem] drop-shadow-xs rounded-full">
                        <img src={user.avatar} alt={user.slug} className="w-full h-full rounded-full" />
                    </div>

                    <div className="mt-4 flex flex-col justify-center items-center">
                        <div className="flex items-center gap-1">
                            <div className="text-lg font-semibold text-left truncate max-w-52">{user.name}</div>
                            {user.verified &&
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" width={17}/>
                            }
                        </div>
                        <div className="text-neutral-500">@{user.slug}</div>
                        <div className="mt-2 text-[15.5px] px-4 text-center text-wrap text-neutral-900 ">{user.bio}</div>
                        <div className="mt-5 w-88 lg:w-96 flex justify-between items-center">
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[16.5px] font-semibold">{formatNums(user.postCount ?? 0)}</span>
                                <span className="text-neutral-600 text-[15.5px]">Posts</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[16.5px] font-semibold">{formatNums(user.followers ?? 0)}</span>
                                <span className="text-neutral-600 text-[15.5px]">Seguidores</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <span className="text-[16.5px] font-semibold">{formatNums(user.following ?? 0)}</span>
                                <span className="text-neutral-600 text-[15.5px]">Seguindo</span>
                            </div>
                        </div>

                        <div>
                            {isMe && 
                                <Link href={`/${user.slug}/edit`}>
                                    <button className="cursor-pointer mt-5 bg-[#FF7A00] rounded-3xl font-semibold text-white w-40 h-13">Editar perfil</button>
                                </Link>
                            }
                            {!isMe &&
                                <button className="cursor-pointer mt-5 bg-[#FF7A00] font-semibold rounded-3xl text-white w-35 h-12">Seguir</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-4">
                <NavTabs
                    tabs={profileTabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    className="border-t border-gray-200"
                />
                
                <div className="min-h-96">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}