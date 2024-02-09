import { Inject, Injectable } from "@nestjs/common";
import { AUTH_CONFIG, AuthConfig } from "./auth.module";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  private clientId: string;

  constructor(@Inject(AUTH_CONFIG) options: AuthConfig, configService: ConfigService) {
    this.clientId = configService.getOrThrow(options.clientId);
  }

  get(): string {
    return this.clientId;
  }
}
