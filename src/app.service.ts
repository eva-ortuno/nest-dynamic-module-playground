import { Inject, Injectable } from "@nestjs/common";
import { AuthUserService } from './auth/auth-user.service';
import { AUTH_CONFIG } from "./auth/auth.module";

@Injectable()
export class AppService {
  constructor(private authUserService: AuthUserService) {
    console.log("<<<<<<<<<<<<< app service log : ", authUserService);
  }
  getHello(): string {
    return this.authUserService.extendMessage('my extension message');
  }
}
