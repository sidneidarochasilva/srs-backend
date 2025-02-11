import { User } from './../../entities/User';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { hash } from 'bcrypt';

interface CreatedUserRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }: CreatedUserRequest): Promise<User> {
    const user = new User({
      name,
      email,
      password: await hash(password, 10),
    });

    await this.usersRepository.create(user);

    return user;
  }
}
