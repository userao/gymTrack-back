import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UsersService } from 'src/services/users.service';
import { GroupsModule } from './groups.module';

@Module({
  imports: [GroupsModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
