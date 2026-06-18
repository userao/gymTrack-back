import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Type } from 'generated/prisma/enums';
import type { GroupDTO } from 'src/dto/group.dto';
import { GroupsService } from 'src/services/groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) { }

  @Post()
  createGroup(@Body() groupDto: GroupDTO) {
    return this.groupsService.createGroup(groupDto)
  }

  @Get(":id")
  async getGroup(@Param('id') id: string) {
    const group = await this.groupsService.getGroup(id);

    if (!group) {
      return group;
    }

    const items = await this.groupsService.getGroupItems(group.id);
    return { group, items };
  }

  @Get()
  getAllGroups(@Query('userId') userId: string) {
    return this.groupsService.getAllGroups(userId);
  }

  @Post(':id')
  addItemToGroup(@Param('id') id: string, @Body() item: { type: Type, id: number }) {
    return this.groupsService.addItemToGroup(+id, item);
  }
}
