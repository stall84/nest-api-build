import { Injectable, Req } from '@nestjs/common';
import { DbService } from 'src/dbService/dbService.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private dbService: DbService) {}
  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in db
    const user = await this.dbService.user.create({
      data: {
        email: dto.email,
        hash,
      },
      select: {
        email: true,
        id: true,
        createdAt: true,
      },
    });
    // return saved user
    return user;
  }

  signin() {
    return {
      msg: 'I have signed in..',
    };
  }
}

/**
 * @NOTE Authing notes: We're using as much declarative code as possible, relying on outsourcing as much as possible.
 * After we've brought in our Globally Dependency Injected dbService (Prisma), we use Argon2 (instead of bCrypt) to do our
 * password hashing. Argon2 allows for more information to be stored in the hash than bCrypt does. After awaiting the hash of our
 * already validated DTO password, we easily (almost criminally easily) call on our dbService (Prisma) to create/write this new user
 * to our database.
 * @NOTE Prisma also allows a neat feature where we can use the 'select:' key on the data object to format how we want the return object
 * So in this case we don't want the hash returned after write to db.. so a lot like a graphQL mutation, we use the 'select' prop to select
 * return object fields.
 */
