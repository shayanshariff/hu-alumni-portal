import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
  imports : [UserModule, PassportModule, JwtModule.register({
    secret : jwtConstants.secret,
    signOptions : { expiresIn : '2 days' }
  })],
  controllers : [AuthController],
  providers: [AuthService, JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
