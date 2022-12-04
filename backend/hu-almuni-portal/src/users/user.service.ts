import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { AnyObject, Collection, Connection, Model } from "mongoose";
import { createUserDTO } from "./dto/create-user.dto";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserService{

    userCollection: Collection<AnyObject>;

    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>, @InjectConnection() private connection: Connection) {
        this.userCollection = this.connection.collection("users")
    }

    async create(createUserDTO : createUserDTO) : Promise<User> {
        const createdUser =  new this.userModel(createUserDTO)
        Logger.log("added User with details : ", createdUser)
        return await createdUser.save()
        
    }

    async findOne(email : string){
        return await this.userModel.findOne({email : email})
    }
}