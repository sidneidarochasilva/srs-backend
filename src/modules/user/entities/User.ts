import { randomUUID } from 'crypto';
import { Replace } from './../../../utils/replace';

interface UserSchema {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class User {
  private props: UserSchema;

  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      id: id || randomUUID(),
      createdAt: props.createdAt || new Date(),
    };
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get email() {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password() {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
