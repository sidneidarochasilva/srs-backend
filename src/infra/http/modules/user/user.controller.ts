import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../modules/user/useCases/createUserUseCase/createUserUseCase';
import { CreateUserBody } from './dto/createUserBody';
import { UserViewModel } from './viewModel/userViewModel';

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { name, email, password } = body;
    console.log('body', body);

    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return UserViewModel.toHttp(user);
  }

  @Get()
  async getUsers() {
    return {
      statusCode: 200,
      message: 'Users fetched',
      data: [],
    };
  }
}
