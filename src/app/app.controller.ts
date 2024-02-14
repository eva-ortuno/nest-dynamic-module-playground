import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':message')
  getMessage(@Param() params: any): string {
    return this.appService.getHello(params.message);
  }

  @Get()
  getHealthA(): string {
    return this.appService.healthA('HEALTH A');
  }
}
