import { Module } from '@nestjs/common';
import { ExercisesController } from 'src/controllers/exercises.controller';
import { ExercisesService } from 'src/services/exercises.service';
import { MuscleGroupsModule } from './muscle-groups.module';

@Module({
  imports: [MuscleGroupsModule],
  providers: [ExercisesService],
  controllers: [ExercisesController]
})
export class ExercisesModule {}
