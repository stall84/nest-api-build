import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Originally we had an interface here where we could of course do our own custom validation
// Alternately and far easier, we can import the class-validator/transaltor package and merely
// decorate our (now a class) properties with validation decorators
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
