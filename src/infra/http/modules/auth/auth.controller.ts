import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//import { CreateUserUseCase } from '../../../../modules/user/useCases/createUserUseCase/createUserUseCase';

@Controller()
export class AuthController {
  //constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  async signIn(@Request() request: any) {
    return request.user;
  }
}
