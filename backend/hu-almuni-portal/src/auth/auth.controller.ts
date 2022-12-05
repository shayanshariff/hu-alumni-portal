import { Bind, Body, Controller, HttpException, NotFoundException, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Public } from "src/helpers/isPublic.decorator";
import { UserService } from "src/users/user.service";
import { AuthService } from "./auth.service";
import { loginDTO } from "./dto/login.dto";

@Controller("auth")
export class AuthController{
    constructor(private authService : AuthService, private userService : UserService) {}

    @Public()
    @Post('/login')
    async login(@Body() loginDTO : loginDTO) {
        const usr = await this.userService.findOne(loginDTO.email)
        if(!usr){
            throw new NotFoundException(`User with email : ${loginDTO.email} not found`)
        }

        if(usr.password !== loginDTO.password) {
            throw new NotFoundException("Incorrect password")
        }
        //password check here.
        return this.authService.login(usr)
    }
}