import { Injectable } from '@nestjs/common';
import { AuthUserService } from './auth/auth-user.service';

@Injectable()
export class AppService {
  constructor(private authUserService: AuthUserService) {}
  getHello(): string {
    return this.authUserService.extendMessage('my extension message');
  }
}
