import { DatabaseModule } from './../../../database/database.module';
import { CreateUserUseCase } from './../../../../modules/user/useCases/createUserUseCase/createUserUseCase';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
