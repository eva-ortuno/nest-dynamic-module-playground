import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AUTHSERVICE_CONFIGS } from './auth.helper';

@Injectable()
export class AuthUserService {

  // injects the AuthService with configuration 2 into the AuthService instance
  constructor(@Inject(AUTHSERVICE_CONFIGS.SECOND_CONFIG) private readonly authService: AuthService) {}

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
