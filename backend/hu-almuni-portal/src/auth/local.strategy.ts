import {
  Dependencies,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
@Dependencies(AuthService, JwtService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private jwtService : JwtService) {
    super();
    this.authService = authService;
    this.jwtService = jwtService;
  }

  async validate(loginDTO: loginDTO) {
    const user = await this.authService.validateUser(loginDTO);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
