"use client"
import { user } from "@/data/user";
import { Post } from "@/types/post";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat, faHeart as faHeartFilled, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatRelativeTime } from "@/utils/format.relative";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import useScrollLock from "@/hooks/useScrollLock";

type Props = {
    post: Post;
}

export const PostItem = ({ post }: Props) => {
    const [liked, setLiked] = useState(post.liked);
    const [likeCount, setLikeCount] = useState(post.likeCount);
    const [repost, setRepost] = useState(post.reposted);
    const [repostCount, setRepostCount] = useState(post.repostCount);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    useScrollLock(imageModalOpen);

    const openImageModal = () => {
        setIsAnimating(false);
        setImageModalOpen(true);
        setTimeout(() => setIsAnimating(true), 10);
    }

    const closeImageModal = () => {
        setImageModalOpen(false);
        setTimeout(() => setImageModalOpen(false), 300);
    }

    return(
        <div className="">
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
                            <div className="flex flex-col justify-start items-start">
                                <div className="flex items-center gap-1 font-semibold text-[15px]">
                                    <Link href={`/${post.user.slug}`} className="">{post.user.name}</Link>
                                    {user.verified && 
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/047/309/918/small_2x/verified-badge-profile-icon-png.png" alt="" width={13} />
                                    }
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="text-[13px] text-neutral-500">@{post.user.slug}</div>
                                    <div className="text-[13px] opacity-60">· {formatRelativeTime(post.dataPost)}</div>
                                </div>
                            </div>

                            <div className="-mt-3 cursor-pointer">
                                <img src="/icons/more-horizontal.svg" alt="" width={22}/>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 text-[15px]">{post.body}</div>
                    {post.image &&
                        <div className="w-full h-96 mb-4">
                            <img 
                                src={post.image}
                                alt=""
                                className="w-full rounded-2xl h-full object-cover border border-neutral-300 cursor-pointer hover:opacity-95 transition-opacity"
                                onClick={openImageModal}
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

            {mounted && imageModalOpen && createPortal(
                <>
                    <button
                        onClick={closeImageModal}
                        className="cursor-pointer fixed top-4 left-4 z-50 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
                    >
                        <FontAwesomeIcon icon={faXmark} className="size-6 cursor-pointer" />
                    </button>

                    <div 
                        className={`fixed inset-0 bg-black/50 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-40 p-4 transition-all duration-300 ease-out ${isAnimating ? 'bg-opacity-70 backdrop-blur-sm' : 'bg-opacity-0'}`}
                        onClick={closeImageModal}
                    >
                        <div className={`relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[100vh] w-full mx-auto transition-all duration-300 ease-out ${isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4'} grid place-items-center`}>
                            <img
                                src={post.image}
                                alt=""
                                className="max-w-full lg:fixed transition-all duration-300 max-h-full object-contain rounded-lg shadow-2xl lg:max-h-[100vh] lg:max-w-[90vw]"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                </>,
                document.body
            )}
        </div>
    );
}