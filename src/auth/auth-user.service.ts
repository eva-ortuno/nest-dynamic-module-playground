import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AUTH_CONFIG } from "./auth.module";

@Injectable()
export class AuthUserService {
  constructor(private authService: AuthService) {}

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
