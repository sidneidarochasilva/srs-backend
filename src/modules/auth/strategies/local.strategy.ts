import { ValidateUserUseCases } from './../validateUserUseCases/validateUserUseCases';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private ValidateUserUseCases: ValidateUserUseCases) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    return await this.ValidateUserUseCases.execute({ email, password });
  }
}
