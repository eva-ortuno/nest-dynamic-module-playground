import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';
import { ConfigBService } from './config-b.service';
import { AuthUserService } from '../auth/auth-user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => (configService: ConfigService) =>
        new AuthService({ clientId: configService.getOrThrow('MESSAGE_B') }),
    }),
  ],
  providers: [
    {
      provide: ConfigBService,
      useExisting: AuthUserService,
    },
  ],
  exports: [ConfigBService],
})
export class ConfigBModule {}
