import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.schema';
import { UserService } from 'src/users/user.service';
import { loginDTO } from './dto/login.dto';
import { signupDTO } from './dto/signup.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    
  }
  static saltRounds = 10;

  async validateUser(loginDTO: loginDTO) {
    const user = this.userService.findOne(loginDTO.email);
    return user;
  }

  async login(user: User) {
    const payload = { username: user.firstName, sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(signupDTO : signupDTO){
    bcrypt.hash(signupDTO.password, AuthService.saltRounds).then(() => {

    }).catch(()=> {})
  }
}
