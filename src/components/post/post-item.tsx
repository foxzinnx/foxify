"use client"
import { user } from "@/data/user";
import { Post } from "@/types/post";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat, faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatRelativeTime } from "@/utils/format.relative";
import Link from "next/link";
import { useState } from "react";

type Props = {
    post: Post;
}

export const PostItem = ({ post }: Props) => {
    const [liked, setLiked] = useState(post.liked);
    const [likeCount, setLikeCount] = useState(post.likeCount);
    const [repost, setRepost] = useState(post.reposted);
    const [repostCount, setRepostCount] = useState(post.repostCount);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(prev => prev - 1);
        } else {
            setLiked(true);
            setLikeCount(prev => prev + 1);
        }
    }

    const handleRepost = () => {
        if (repost) {
            setRepost(false);
            setRepostCount(prev => prev - 1);
        } else {
            setRepost(true);
            setRepostCount(prev => prev + 1);
        }
    }

    return(
        <div className="bg-white p-5 flex gap-3 border border-neutral-200 drop-shadow-xs rounded-xl">
            <div>
                <Link href={`/${post.user.slug}`}>
                    <img 
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>

            <div className="flex-1">
                <div className="flex flex-wrap items-center font-light gap-1">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1 font-semibold text-[15px]">
                                <Link href={`/${post.user.slug}`} className="">{post.user.name}</Link>
                                {user.verified && 
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" alt="" width={13} />
                                }
                            </div>
                            <div className="text-[13px] text-neutral-500">@{post.user.slug}</div>
                        </div>

                        <div className="cursor-pointer">
                            <img src="/icons/more-horizontal.svg" alt="" width={22}/>
                        </div>
                    </div>
                    <div className="text-[12.5px] -mt-1 opacity-60">{formatRelativeTime(post.dataPost)}</div>
                </div>
                <div className="py-3 text-[15px]">{post.body}</div>
                {post.image &&
                    <div className="w-full h-96 mb-4">
                        <img src={post.image}
                        alt=""
                        className="w-full rounded-2xl h-full object-cover border border-neutral-300"
                        />
                    </div>
                }
                <div className="flex items-center gap-5">
                    <div onClick={handleLike} className="">
                        <div className={`inline-flex items-center gap-2 cursor-pointer ${liked && 'text-red-500'}`}>
                            <FontAwesomeIcon icon={liked ? faHeartFilled : faHeart } className="size-[18px]" />
                            <div className="text-[14px]">{likeCount}</div>
                        </div>
                    </div>
                    <div className="">
                        <div onClick={handleRepost} className={`inline-flex items-center gap-2 cursor-pointer ${repost && 'text-orange-400'}`}>
                            <FontAwesomeIcon icon={faRepeat} className="size-[17px]" />
                            <div className="text-[14px]">{repostCount}</div>
                        </div>
                    </div>
                    <div className="">
                        <Link href={`/post/${post.id}`}>
                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faComment} className="size-[18px]" />
                                <div className="text-[14px]">{post.commentCount}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}