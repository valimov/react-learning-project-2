import type User from "../user/User.ts";
import type PostCommentDraft from "./PostCommentDraft.ts";

export default interface PostComment  extends PostCommentDraft{
    id: string;
    postId: string;
    userId: string; 
    createdAt: string; 
    updatedAt: string;
    user: User;
} 