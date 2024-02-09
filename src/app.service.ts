import { Inject, Injectable } from "@nestjs/common";
import { AuthUserService } from './auth/auth-user.service';
import { AUTH_CONFIG, AuthConfig } from "./auth/auth.module";

@Injectable()
export class AppService {
  private authUserService: AuthUserService;

  constructor(@Inject(AUTH_CONFIG) private authConfig: AuthConfig) {
    this.authUserService = new AuthUserService(authConfig);
  }
  getHello(message): string {
    return this.authUserService.extendMessage(message);
  }
}
