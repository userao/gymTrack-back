import { PrismaModule } from './modules/prisma.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './modules/groups.module';
import { TemplatesModule } from './modules/templates.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [PrismaModule, UsersModule, GroupsModule, TemplatesModule, ConfigModule.forRoot(), ],
  controllers: [],
  providers: [],
})
export class AppModule { }
