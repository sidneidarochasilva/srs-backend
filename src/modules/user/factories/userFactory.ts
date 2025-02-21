import { User } from '../entities/User';

type Override = Partial<User>;

export const makeUser = ({ id, ...overrride }: Override) => {
  return new User(
    {
      name: 'Jonh Doe',
      email: 'jonh@gmail.com',
      password: '12340',
      ...overrride,
    },
    id,
  );
};
