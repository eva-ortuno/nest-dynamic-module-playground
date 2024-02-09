import { Inject, Injectable } from '@nestjs/common';
import { AUTH_CONFIG, AuthConfig } from './auth.module';

@Injectable()
export class AuthService {
  private clientId: string;

  constructor(@Inject(AUTH_CONFIG) options: AuthConfig) {
    this.clientId = options.clientId;
  }

  get(): string {
    return this.clientId;
  }
}
