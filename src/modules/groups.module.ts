import { Module } from '@nestjs/common';
import { GroupsController } from 'src/controllers/groups.controller';
import { GroupsService } from 'src/services/groups.service';
import { PrismaService } from 'src/services/prisma.service';
import { TemplatesModule } from './templates.module';
import { PrismaModule } from './prisma.module';
import { ExercisesModule } from './exercises.module';

@Module({
  imports: [TemplatesModule, ExercisesModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
