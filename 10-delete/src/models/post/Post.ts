import type PostComment from "../post-comment/PostComment";
import type User from "../user/User";
import type PostDraft from "./PostDraft";

export default interface Post extends PostDraft {
    
    id: string;
    userId: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    comments: PostComment[];
}