import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      statusCode: 201,
      message: 'User created',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    };
  }
}
