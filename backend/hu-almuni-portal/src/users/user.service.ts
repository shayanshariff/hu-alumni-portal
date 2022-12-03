import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createUserDTO } from "./dto/create-user.dto";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>) {}

    async create(createUserDTO : createUserDTO) : Promise<User> {
        const createdUser =  new this.userModel(createUserDTO)
        return createdUser.save()
    }
}