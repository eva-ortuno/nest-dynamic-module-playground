import { Injectable } from '@nestjs/common';

export interface AuthConfig {
  clientId: string;
}

@Injectable()
export class AuthService {
  private clientId: string;

  constructor(config: AuthConfig) {
    this.clientId = config.clientId;
  }

  get(): string {
    return this.clientId;
  }
}
