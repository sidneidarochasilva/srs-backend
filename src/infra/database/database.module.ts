
import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaUserRepository } from '../database/prisma/repositories/PrismaUserRepository';
import { UserRepository } from '../../modules/user/repositories/UserRepository';

@Module({
    providers: [PrismaService, {
        provide: UserRepository,
        useClass: PrismaUserRepository,
    }],
    exports: [UserRepository],
})
export class DatabaseModule {}