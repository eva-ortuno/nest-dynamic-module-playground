import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => (configService: ConfigService) =>
        new AuthService({ clientId: configService.getOrThrow('MESSAGE') }),
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
