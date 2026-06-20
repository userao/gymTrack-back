import { ExercisesService } from './../services/exercises.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import type { ExerciseDto } from 'src/dto/exercise.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  getUserExercises(@Query("userId") userId: string)  {
    return this.exercisesService.getUserExercises(userId);
  }

  @Post()
  createExercise(@Body() exerciseDto: ExerciseDto) {
    return this.exercisesService.createExercise(exerciseDto);
  }
}
