import { Post } from "@/types/post";
import { user } from "./user";

export const post: Post = {
    id: 10,
    user: user,
    body: 'Fazendo uns ajustes por aqui',
    image: '/example.jpg',
    likeCount: 59,
    commentCount: 4,
    repostCount: 0,
    liked: false,
    reposted: false,
    dataPost: new Date(2025, 5, 4, 10, 0, 0)
}