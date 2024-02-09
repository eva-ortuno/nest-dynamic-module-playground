import { Injectable } from '@nestjs/common';
import { AuthConfig } from './auth.module';

@Injectable()
export class AuthService {
  private clientId: string;

  constructor(private readonly options: AuthConfig) {
    this.clientId = options.clientId;
  }

  get(): string {
    return this.clientId;
  }
}
