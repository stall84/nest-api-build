import { Module } from '@nestjs/common';
import { DbServiceService } from './dbService.service';

@Module({
  providers: [DbServiceService],
  exports: [DbServiceService],
})
export class DbServiceServiceModule {}
