import { Body, Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose'
import { createUserDTO } from './users/dto/create-user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async PostHello(dto : any) {
    return dto
  }
}
