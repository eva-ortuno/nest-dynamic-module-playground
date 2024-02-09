import { Inject, Injectable } from "@nestjs/common";
import { AuthUserService } from './auth/auth-user.service';
import { AUTH_CONFIG } from "./auth/auth.module";

@Injectable()
export class AppService {
  constructor(@Inject(AUTH_CONFIG) private authUserService: AuthUserService) {}
  getHello(): string {
    return this.authUserService.extendMessage('my extension message');
  }
}
