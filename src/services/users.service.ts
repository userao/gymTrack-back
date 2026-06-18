import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {Prisma, User } from 'generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }
  getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
  getUser(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id: +id }
    })
  }

  // тут проверку на существование
  createUser(userDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({data: userDto});
  }
}
