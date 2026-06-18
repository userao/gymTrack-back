import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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

    return group;
  }

  @Delete(":id")
  deleteGroup(@Param('id') id: string) {
    return this.groupsService.deleteGroup(id);
  }

  @Get()
  getAllGroups(@Query('userId') userId: string) {
    return this.groupsService.getAllGroups(userId);
  }

  @Delete()
  deleteAllGroups() {
    return this.groupsService.deleteAllGroups();
  }

  // @Post(':id')
  // addItemToGroup(@Param('id') id: string, @Body() item: { type: Type, id: number }) {
  //   return this.groupsService.addItemToGroup(+id, item);
  // }
}
