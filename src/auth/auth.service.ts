import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signin() {
    return {
      msg: 'I have signed in..',
    };
  }

  signup() {
    // Nest will 'coerce' and format the return datatype for you. Below would be same as
    // res.send(200).json(...)
    return {
      msg: 'Hello. You are signing up!',
    };
  }
}
