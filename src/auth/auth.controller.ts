import { Controller, Post } from '@nestjs/common';
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
  signup() {
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
