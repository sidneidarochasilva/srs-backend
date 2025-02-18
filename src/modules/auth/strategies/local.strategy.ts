
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies } from '@nestjs/common';


@Injectable()
//@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
        usernameField: 'email',
        passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
   //TODO: Implement the validate method
  }
}
