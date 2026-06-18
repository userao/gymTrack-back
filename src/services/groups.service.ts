import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Group, Prisma, User } from 'generated/prisma/client';
import { GroupDTO } from 'src/dto/group.dto';

@Injectable()
export class GroupsService {
  constructor(private prismaService: PrismaService) { }

  async createGroup(groupDto: GroupDTO): Promise<Group> {
    return this.prismaService.group.create({
      data: {
        name: groupDto.name,
        user: {
          connect: {
            id: groupDto.userId
          }
        },
        parentId: groupDto.parentId
      }
    })
  }

  getGroup(id: string): Promise<Group | null> {
    return this.prismaService.group.findFirst({
      where: {
        id: +id
      },
      include: {
        childrenGroups: true,
        childrenTemplates: true,
      }
    })
  }

  deleteGroup(id: string) {
    return this.prismaService.group.delete({
      where: { id: +id }
    })
  }

  async getAllGroups(userId: string): Promise<any> {
    const where = userId ? {
      user: {
        some: {
          id: +userId
        }
      },
    } : {};

    return this.prismaService.group.findMany({
      where
    })
  }

  deleteAllGroups(): Promise<{count: number}> {
    return this.prismaService.group.deleteMany();
  }
}
