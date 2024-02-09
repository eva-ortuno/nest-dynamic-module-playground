import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthUserService {
  constructor(private authService: AuthService) {}

  extendMessage(extension: string) {
    return this.authService.get() + ' - ' + extension;
  }
}
