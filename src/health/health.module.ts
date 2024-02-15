import { ConfigAModule } from '../config-a/config-a.module';
import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { ConfigBModule } from '../config-b/config-b.module';

@Module({
  imports: [ConfigAModule, ConfigBModule],
  exports: [HealthService],
  providers: [HealthService],
})
export class HealthModule {}
