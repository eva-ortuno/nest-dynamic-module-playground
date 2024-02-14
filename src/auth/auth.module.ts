import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';

export interface ModuleOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: () => (...args: any) => any;
  inject: any[];
}
export const AUTH_CONFIG = 'AUTH_CONFIG';

@Module({})
export class AuthModule {
  static register(options: ModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: options.imports,
      providers: [
        {
          provide: AUTH_CONFIG,
          useFactory: options.useFactory(),
          inject: options.inject,
        },
        AuthUserService,
      ],
      exports: [AuthUserService],
    };
  }
}
