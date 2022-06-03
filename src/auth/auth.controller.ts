import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
// Nest allows the Controller decorator take in the prefix route.. so in our case the route/methods below like signup/signin will all be prefixed
// by www.whatever.com/auth/
@Controller('auth')
export class AuthController {
  // Use dependency-injection provided by Nest to furnish an 'instance' of the Auth Service
  // Note that we aren't required to 'new-up' anything, thus decoupling the separate concerns
  // We'll use TS shorthand throughout, functionaly the same as declaring the
  // property/field above and this.whatever = whatever in constructor
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // Nest provides the ability to easily construct Data Transfer Objects (DTO) which is an object the
    // request/response data can be pushed onto to allow for validation of this custom-shaped object.
    // For example we utilize DTO to require the body on a signup POST call to have a valid email and valid password of x length
    console.log({
      dto,
    });
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

/**
 * @NOTE Further Notes: We will use a declarative option from Nest to validate our request bodies (See inside dto folder/interface).
 * . Specificially check out using Pipes and Class Validators here:
 *        https://docs.nestjs.com/pipes   and    https://docs.nestjs.com/pipes#class-validator
 */
