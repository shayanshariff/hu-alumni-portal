import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://faiz-haseeb1:yousuck561@cluster0.dzkfo.mongodb.net/test', {
    connectionFactory: (connection) => {
      connection.plugin(require('mongoose-autopopulate'));
      return connection;
    }
  }), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
