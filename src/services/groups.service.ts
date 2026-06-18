import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Group, GroupItems, Prisma, Template, User } from 'generated/prisma/client';
import { UserGroup } from 'generated/prisma/browser';
import { Type } from 'generated/prisma/enums';
import { GroupDTO } from 'src/dto/group.dto';

@Injectable()
export class GroupsService {
  constructor(private prismaService: PrismaService) { }

  async createGroup(groupDto: GroupDTO): Promise<boolean> {
    const dbGroup = await this.prismaService.group.create({
      data: {
        name: groupDto.name
      }
    });

    if (groupDto.parentId) {
      this.addItemToGroup(groupDto.parentId, { type: "GROUP", id: dbGroup.id });
    }

    const dbUser = await this.prismaService.user.findUnique({ where: { id: groupDto.userId } }) as User;
    return !!this.prismaService.userGroup.create({
      data: {
        groupId: dbGroup.id,
        userId: dbUser.id,
      }
    })
  }

  getGroup(id: string): Promise<Group | null> {
    return this.prismaService.group.findUnique({ where: { id: +id } })
  }

  async getAllGroups(userId: string): Promise<Group[]> {
    if (!userId) {
      return this.prismaService.group.findMany();
    }

    const dbUserGroups = await this.prismaService.userGroup.findMany({ where: { userId: +userId } });
    const groupIds = dbUserGroups.map(userGroup => userGroup.groupId);
    return this.prismaService.group.findMany({
      where: {
        id: { in: groupIds }
      }
    })
  }

  async addItemToGroup(groupId: number, item: { type: Type, id: number }): Promise<any> {
    const dbGroup = await this.prismaService.group.findUnique({ where: { id: groupId } }) as Group;

    const dataObject: Prisma.GroupItemsUncheckedCreateInput = {
      groupId: dbGroup.id,
      type: item.type,
      itemId: item.id,
    }
    return await this.prismaService.groupItems.create({
      data: dataObject
    })
  }

  async getGroupItems(id: number) {
    const dbGroupItems = await this.prismaService.groupItems.findMany({
      where: { groupId: id }
    });

    const dbItems = await Promise.all(dbGroupItems.map((groupItems) => {
      if (groupItems.type === "GROUP") {
        return this.prismaService.group.findUnique({ where: { id: groupItems.itemId } });
      }
      return this.prismaService.template.findUnique({ where: { id: groupItems.itemId } });
    }));
    return dbItems;
  }
}
