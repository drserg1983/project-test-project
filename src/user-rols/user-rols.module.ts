import { Module } from '@nestjs/common';
import { UserRolsService } from './user-rols.service';
import { UserRolsController } from './user-rols.controller';

@Module({
  controllers: [UserRolsController],
  providers: [UserRolsService]
})
export class UserRolsModule {}
