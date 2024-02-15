import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':message')
  getMessage(@Param() params: any): string {
    switch (params.message) {
      case 'healthA':
        return this.appService.healthA('HEALTH A');
      case 'healthB':
        return this.appService.healthB('HEALTH B');
      default:
        return this.appService.getHello(params.message);
    }
  }
}
