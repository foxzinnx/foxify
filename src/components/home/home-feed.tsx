import { post } from "@/data/post";
import { PostItem } from "../post/post-item";

export const HomeFeed = () => {
    return(
        <div className="">
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