import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserService } from './auth-user.service';
import { ConfigModule } from "@nestjs/config";

export interface AuthConfig {
  clientId: string;
}
export const AUTH_CONFIG = 'AUTH_CONFIG';

@Module({})
export class AuthModule {
  static register(config: AuthConfig): DynamicModule {
    return {
      module: AuthModule,
      imports: [ConfigModule.forRoot({envFilePath: ".env"})],
      providers: [
        {
          provide: AUTH_CONFIG,
          useValue: config,
        },
        AuthService,
        AuthUserService,
      ],
      exports: [AuthService, AuthUserService],
    };
  }
}
