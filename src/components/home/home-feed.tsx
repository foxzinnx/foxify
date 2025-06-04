import { post } from "@/data/post";
import { PostItem } from "../post/post-item";

export const HomeFeed = () => {
    return(
        <div className="px-3 mt-3 space-y-5">
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