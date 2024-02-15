import { Injectable } from '@nestjs/common';
import { ConfigAService } from '../config-a/config-a.service';
import { ConfigBService } from '../config-b/config-b.service';

@Injectable()
export class HealthService {
  constructor(
    private configAService: ConfigAService,
    private configBService: ConfigBService,
  ) {}
  getHelloA(message: string): string {
    return this.configAService.extendMessage(message);
  }

  getHelloB(message: string): string {
    return this.configBService.extendMessage(message);
  }
}
