import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      status: 200,
      msg: 'I have signed in..',
    };
  }

  signup() {
    // Nest will 'coerce' and format the return datatype for you. Below would be same as
    // res.send(200).json(...)
    return {
      status: 200,
      msg: 'Hello. You are signing up!',
    };
  }
}
