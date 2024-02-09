import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AUTH_CONFIG } from "./auth.module";

@Injectable()
export class AuthUserService {
  constructor(@Inject(AUTH_CONFIG) private authService: AuthService) {
    console.log("Set up authUserService: ", authService.get());
  }

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
