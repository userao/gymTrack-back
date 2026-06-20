import { Module } from '@nestjs/common';
import { MuscleGroupsController } from 'src/controllers/muscle-groups.controller';
import { MuscleGroupsService } from 'src/services/muscle-groups.service';

@Module({
  providers: [MuscleGroupsService],
  controllers: [MuscleGroupsController]
})
export class MuscleGroupsModule {}
