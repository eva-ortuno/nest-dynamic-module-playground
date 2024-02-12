import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AUTHSERVICE_CONFIGS } from './auth.helper';

@Injectable()
export class AuthOtherService {

  // injects the AuthService with configuration 1 into the AuthService instance
  constructor(@Inject(AUTHSERVICE_CONFIGS.FIRST_CONFIG) private readonly authService: AuthService) {}

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
