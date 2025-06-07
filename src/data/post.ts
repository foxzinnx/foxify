import { Post } from "@/types/post";
import { user } from "./user";

export const post: Post = {
    id: 10,
    user: user,
    body: 'Fazendo uns ajustes por aqui',
    image: 'https://cdn.discordapp.com/attachments/1069081202025316404/1380296657500901486/20250605_182531.jpg?ex=6844ae6f&is=68435cef&hm=f13c1afedd7b2ffb1541a6c4ef63418489dcce8b57a7bfa0490d67af83b72887&',
    likeCount: 59,
    commentCount: 4,
    repostCount: 0,
    liked: false,
    reposted: false,
    dataPost: new Date(2025, 5, 4, 10, 0, 0)
}