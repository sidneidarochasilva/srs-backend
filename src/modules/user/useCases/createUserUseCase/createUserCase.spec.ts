import { UserRepositoryInMemory } from './../../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './createUserUseCase';
import { compare } from 'bcrypt';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
describe('CreateUserUseCase', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  describe('execute', () => {
    it('should be able to create a new user', async () => {
      expect(userRepositoryInMemory.users).toEqual([]);

      const user = await createUserUseCase.execute({
        name: 'User Test',
        email: 'email@gmail.com',
        password: '123460',
      });

      expect(userRepositoryInMemory.users).toEqual([user]);
    });

    it('should create user with encrypted password', async () => {
      const userPasswordWithoutEncryption = '123123';

      const user = await createUserUseCase.execute({
        name: 'User Test',
        email: 'email@gmail.com',
        password: userPasswordWithoutEncryption,
      });

      const userPasswordEncrypted = await compare(
        userPasswordWithoutEncryption,
        user.password,
      );
      expect(userPasswordEncrypted).toBeTruthy();
    });
  });
});
