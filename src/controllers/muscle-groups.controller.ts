import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { MuscleGroupsService } from 'src/services/muscle-groups.service';

@Controller('muscle-groups')
export class MuscleGroupsController {
  constructor(private muscleGroupService: MuscleGroupsService) { }

  @Get()
  getAllMuscleGroups(@Query('userId') userId: string) {
    return this.muscleGroupService.getAllMuscleGroups();
  }

  @Post()
  createMuscleGroup(@Body() muscleGroupDto: Prisma.MuscleGroupCreateInput) {
    return this.muscleGroupService.createMuscleGroup(muscleGroupDto);
  }
}
