import { Injectable } from '@nestjs/common';
import { AuthUserService } from '../auth/auth-user.service';
import { HealthService } from '../health/health.service';

@Injectable()
export class AppService {
  constructor(
    private authUserService: AuthUserService,
    private healthService: HealthService,
  ) {}
  getHello(message: string): string {
    return this.authUserService.extendMessage(message);
  }

  healthA(message: string): string {
    return this.healthService.getHelloA(message);
  }

  healthB(message: string): string {
    return this.healthService.getHelloB(message);
  }
}
