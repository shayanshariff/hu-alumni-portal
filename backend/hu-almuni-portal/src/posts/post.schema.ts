import { HydratedDocument } from "mongoose";
import { CommentDocument } from "./comment.schema";


export type PostDocument = HydratedDocument<Post>

export class Post{
    userId : string
    content : string
    tag : string
    comments : CommentDocument[]
}