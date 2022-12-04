import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { loginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private userService : UserService) {}

    async validateUser(loginDTO : loginDTO){
        const user = this.userService.findOne(loginDTO.email)
        return null
    }
}
