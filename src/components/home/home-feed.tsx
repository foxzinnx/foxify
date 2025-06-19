import { post } from "@/data/post";
import { PostItem } from "../post/post-item";

export const HomeFeed = () => {
    return(
        <div className="mt-3">
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