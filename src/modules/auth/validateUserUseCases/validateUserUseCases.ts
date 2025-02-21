import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserRepository } from './../../user/repositories/UserRepository';

interface ValidateUserRequest {
  email: string;
  password: string;
}
@Injectable()
export class ValidateUserUseCases {
  constructor(private UserRepository: UserRepository) {
    this.UserRepository = UserRepository;
  }

  async execute({ email, password }: ValidateUserRequest) {
    const user = await this.UserRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    const isPasswordMatched = await compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }
    return user;
  }
}
