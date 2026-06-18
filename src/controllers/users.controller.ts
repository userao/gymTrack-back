import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  getUser(@Param("id") id: string) {
    try {
      return this.usersService.getUser(id);
    } catch (err) {
      console.log(err)
    }
  }

  @Post()
  registerUser(@Body() userDto: Prisma.UserCreateInput) {
    return this.usersService.createUser(userDto);
  }
}
