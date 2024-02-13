import { Inject, Injectable } from "@nestjs/common";
import { AUTH_CONFIG, AuthConfig } from "./auth.module";

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
