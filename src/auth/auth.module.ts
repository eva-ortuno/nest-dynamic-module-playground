import { Module, Provider } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserService } from './auth-user.service';
import { AuthOtherService } from './auth-other.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AUTHSERVICE_CONFIGS } from './auth.helper';

export interface AuthConfig {
  clientId: string;
}

const buildAuthServiceProvider = (providerName: keyof typeof AUTHSERVICE_CONFIGS, configId?: string): Provider => ({
  provide: providerName,
  useFactory: (configService: ConfigService) => (
    new AuthService({clientId: configService.getOrThrow(configId ?? providerName)})
  ),
  inject: [ConfigService],
})

@Module({
  imports: [ConfigModule],
  providers: [
    // builds auth service provider using first config
    buildAuthServiceProvider(AUTHSERVICE_CONFIGS.FIRST_CONFIG),
    // builds auth service provider using second config
    buildAuthServiceProvider(AUTHSERVICE_CONFIGS.SECOND_CONFIG),
    AuthUserService,
    AuthOtherService
  ],
  exports: [AuthUserService, AuthOtherService]})
export class AuthModule {}