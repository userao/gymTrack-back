import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ExerciseDto } from 'src/dto/exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private prismaService: PrismaService) {}

  // exercises у которых не задано свойство userId доступны всем
  getUserExercises(userId: string) {
    return this.prismaService.exercise.findMany({
      where: {userId: +userId || undefined}
    })
  }

  createExercise(exerciseDto: ExerciseDto) {
    return this.prismaService.exercise.create({
      data: {
        name: exerciseDto.name,
        muscleGroup: {
          connect: {id: exerciseDto.muscleGroupId}
        },
        user: {
          connect: {id: exerciseDto.userId} 
        }
      }
    })
  }
}
