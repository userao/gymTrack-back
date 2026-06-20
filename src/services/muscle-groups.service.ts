import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class MuscleGroupsService {
  constructor(private prismaService: PrismaService) { }

  getAllMuscleGroups() {
    return this.prismaService.muscleGroup.findMany();
  }

  createMuscleGroup(muscleGroupDto: Prisma.MuscleGroupCreateInput) {
    return this.prismaService.muscleGroup.create({
      data: {
        name: muscleGroupDto.name
      }
    })
  }
}
