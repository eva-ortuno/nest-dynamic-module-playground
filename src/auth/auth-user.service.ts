import { Inject, Injectable } from '@nestjs/common';
import { AuthService, AuthConfig } from './auth.service';
import { AUTH_CONFIG } from './auth.module';

@Injectable()
export class AuthUserService {
  private authService: AuthService;

  constructor(@Inject(AUTH_CONFIG) private config: AuthConfig) {
    this.authService = new AuthService(config);
  }

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
