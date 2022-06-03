import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
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
  signup(@Req() req: Request) {
    // The underlying Express Request object can be accessed via the @Req() decorator..  We will be removing this and
    // Using instead NestJS's @Body() decorator after this commit since it is decoupled from the underlying framework,
    // In case for instance we wanted to change from Express to Fastify NestJS
    return this.authService.signup(req);
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
