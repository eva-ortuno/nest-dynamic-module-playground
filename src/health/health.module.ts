import { ConfigAModule } from '../config-a/config-a.module';
import { Module } from '@nestjs/common';
import { HealthService } from './health.service';

@Module({
  imports: [ConfigAModule],
  exports: [HealthService],
  providers: [HealthService],
})
export class HealthModule {}
