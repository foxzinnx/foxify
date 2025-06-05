import { post } from "@/data/post";
import { PostItem } from "../post/post-item";

export const HomeFeed = () => {
    return(
        <div className="px-2 mt-3 space-y-4">
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
            <PostItem post={post}/>
        </div>
    );
}