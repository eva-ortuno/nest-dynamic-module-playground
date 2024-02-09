import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AUTHSERVICE_FIRST } from './auth.helper';


@Injectable()
export class AuthOtherService {

  // injects the AuthService with configuration 1 into the AuthService instance
  constructor(@Inject(AUTHSERVICE_FIRST) private readonly authService: AuthService) {}

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
