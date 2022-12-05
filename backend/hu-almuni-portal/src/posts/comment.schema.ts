import { HydratedDocument } from "mongoose";

export type CommentDocument = HydratedDocument<Comment>

export class Comment{
    userId : string
    content : string
}