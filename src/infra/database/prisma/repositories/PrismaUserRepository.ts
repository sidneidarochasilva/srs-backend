import { User } from './../../../../modules/user/entities/User';
import { PrismaService } from './../prisma.service';
import { UserRepository } from './../../../../modules/user/repositories/UserRepository';
import { PrismaUserMapper } from './../mappers/PrismaUserMapper';
import { Users as UserRow } from '@prisma/client';
import { Injectable } from '@nestjs/common';


@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    console.log('this.prisma', this.prisma);
    console.log('userRaw', userRaw);
   
    await this.prisma.users.create({
      data:{
        id: userRaw.id as string,
        name: userRaw.name,
        email: userRaw.email,
        password: userRaw.password,
        createdAt: userRaw.createdAt,
      }
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user ? PrismaUserMapper.toDomain(user) : null;
  }
   
}
