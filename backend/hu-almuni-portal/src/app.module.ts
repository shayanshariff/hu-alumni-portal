import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserModule } from './users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://faiz-haseeb1:yousuck561@cluster0.dzkfo.mongodb.net/alumni-portal', {
    connectionFactory: (connection) => {
      connection.plugin(require('mongoose-autopopulate'));
      return connection;
    }
  }), AuthModule, UserModule],
  providers : [{
    provide : APP_GUARD,
    useClass : JwtAuthGuard
  }]
})
export class AppModule {}
