import { Body, Controller, Module, Post } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    constructor(private userService : UserService) {}
    
    @Post("/")
    saveUser(@Body() userDTO : createUserDTO) {
        this.userService.create(userDTO)
    }
}
