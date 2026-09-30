import type PostComment from "../post-comment/PostComment";
import type User from "../user/User";

export default interface Post {
    id: string;
    userId: string;
    title: string;
    body: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    comments: PostComment[];
}