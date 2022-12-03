import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
    @Prop({required : true})
    firstName : string

    @Prop({required : true})
    lastName : string

    @Prop({required : true})
    type : ['student', 'faculty', 'alumni', 'admin']

    @Prop({required : true})
    email : string

    @Prop()
    batch : string

    @Prop()
    major : string

    @Prop() 
    minors : string[]

    @Prop()
    gpa : number

    @Prop()
    graduated : boolean

    @Prop()
    phone : string

    @Prop()
    gradSchoolName : string

    @Prop()
    gradSchoolDegree : string

    @Prop()
    organization : string

    @Prop()
    jobTitle : string

}

export const userSchema = SchemaFactory.createForClass(User)