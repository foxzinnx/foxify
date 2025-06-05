import { Post } from "@/types/post";
import { user } from "./user";

export const post: Post = {
    id: 10,
    user: user,
    body: 'Fazendo uns ajustes por aqui',
    image: 'https://cdn.discordapp.com/attachments/1069081202025316404/1380296657500901486/20250605_182531.jpg?ex=68435cef&is=68420b6f&hm=665fbab740e3b2917849c20e9cd22a4335421ebc1994f813532d9e55374f2000&',
    likeCount: 59,
    commentCount: 4,
    repostCount: 0,
    liked: false,
    reposted: false,
    dataPost: new Date(2025, 5, 4, 10, 0, 0)
}