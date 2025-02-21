import * as bcrypt from 'bcrypt';
import { UserRepositoryInMemory } from './../../user/repositories/UserRepositoryInMemory';
import { ValidateUserUseCases } from './validateUserUseCases';
import { makeUser } from './../../user/factories/userFactory';
import { UnauthorizedException } from '@nestjs/common';


let userRepositoryInMemory: UserRepositoryInMemory;
let validateUserUseCases: ValidateUserUseCases;

describe('Validate User Use Cases', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    validateUserUseCases = new ValidateUserUseCases(userRepositoryInMemory);
  });

  it('should be able toreturn user when credentials are correct', async () => {
    const userPasswordWithoutEncrypt = '12340';

    const user = makeUser({
      password: await bcrypt.hash(userPasswordWithoutEncrypt, 10),
    });

    userRepositoryInMemory.users = [user];

    const result = await validateUserUseCases.execute({
      email: user.email,
      password: userPasswordWithoutEncrypt,
    });

    expect(result).toEqual(user);
  });

  it('should not be able to return user when credentials are incorrect', async () => {
    const userPasswordWithoutEncrypt = '12340';

    const user = makeUser({
      password: await bcrypt.hash(userPasswordWithoutEncrypt, 10),
    });

    userRepositoryInMemory.users = [user];

    expect(async () => {
      await validateUserUseCases.execute({
        email: 'wrong_email@gmail.com',
        password: userPasswordWithoutEncrypt,
      });
    }).rejects.toThrow(UnauthorizedException);

    expect(async () => {
      await validateUserUseCases.execute({
        email: user.email,
        password: 'wrong_password',
      });
    }).rejects.toThrow(UnauthorizedException);
  });
});
