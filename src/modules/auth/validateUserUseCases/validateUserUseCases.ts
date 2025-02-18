import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateUserUseCases {
  async execute(email: string, password: string): Promise<boolean> {
    return true;
  }
}
