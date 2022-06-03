import { Injectable, Req } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { Request } from 'express';
import { DbService } from 'src/dbService/dbService.service';

@Injectable()
export class AuthService {
  constructor(private dbService: DbService) {}
  signup() {
    // Nest will 'coerce' and format the return datatype for you. Below would be same as
    // res.send(200).json(...)
    return {
      msg: 'Hello. You are signing up!',
    };
  }

  signin() {
    return {
      msg: 'I have signed in..',
    };
  }
}
