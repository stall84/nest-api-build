import { Global, Module } from '@nestjs/common';
import { DbService } from './dbService.service';

// Global decorator will allow you to have this module available
// in any other modules without having to explicitly import it
@Global()
@Module({
  providers: [DbService],
  exports: [DbService],
})
export class DbServiceModule {}
