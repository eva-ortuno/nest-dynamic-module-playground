import { Injectable } from '@nestjs/common';
import { AuthUserService } from './auth/auth-user.service';
import { AuthOtherService } from './auth/auth-other.service';

@Injectable()
export class AppService {
  constructor(private authUserService: AuthUserService, private authOtherService: AuthOtherService) {}
  getHello(): string {
    // AUTH USER SERVICE instantiate the AuthService with configuration 1
    return this.authUserService.extendMessage("extension USER");
  }

  getHello2(): string {
    // AUTH OTHER SERVICE instantiates the AuthService with configuration 2
    return this.authOtherService.extendMessage("extension OTHER");
  }
}
