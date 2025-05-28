export type User = {
    name: string;
    slug: string;
    avatar: string;
    cover?: string;
    verified: boolean;
    bio?: string;
    postCount?: number;
    followers: number;
    following: number;
}