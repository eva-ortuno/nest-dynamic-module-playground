import { Injectable } from '@nestjs/common';
import { ConfigAService } from '../config-a/config-a.service';

@Injectable()
export class HealthService {
  constructor(private configAService: ConfigAService) {}
  getHello(message: string): string {
    return this.configAService.extendMessage(message);
  }
}
