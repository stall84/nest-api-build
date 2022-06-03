import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DbServiceModule } from './dbService/dbService.module';

// Module described as an analogue for the main or app.js files in a react app. ... A consolidation point
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, DbServiceModule],
})
export class AppModule {}
