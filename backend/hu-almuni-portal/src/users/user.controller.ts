import { Body, Controller, Get, Module, Param, Post, Query } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    constructor(private userService : UserService) {}
    
    @Post("/")
    saveUser(@Body() userDTO : createUserDTO) {
        this.userService.create(userDTO)
    }

    @Get("/")
    async getUser(@Query('email') email : string){
        return await this.userService.findOne(email)
    }
}
