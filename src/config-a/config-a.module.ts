import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';
import { ConfigAService } from './config-a.service';
import { AuthUserService } from '../auth/auth-user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => (configService: ConfigService) =>
        new AuthService({ clientId: configService.getOrThrow('MESSAGE_A') }),
    }),
  ],
  providers: [
    {
      provide: ConfigAService,
      useExisting: AuthUserService,
    },
  ],
  exports: [ConfigAService],
})
export class ConfigAModule {}
