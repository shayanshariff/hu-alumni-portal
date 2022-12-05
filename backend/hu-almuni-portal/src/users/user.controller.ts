import { BadRequestException, Body, Controller, Get, Module, Param, Post, Query } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    constructor(private userService : UserService) {}
    
    @Post("/")
    saveUser(@Body() userDTO : createUserDTO) {
        //check if email already exists.
        this.userService.create(userDTO)
    }

    @Get("/")
    async getUser(@Query('email') email : string){
        if(!email){
            throw new BadRequestException("Email must be passed as a query parameter")
        }
        return await this.userService.findOne(email)
    }
}
