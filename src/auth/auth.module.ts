import { DynamicModule, Module, ModuleMetadata, Provider, Type } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserService } from './auth-user.service';
import { AuthOtherService } from './auth-other.service';
import { AUTHSERVICE_FIRST, AUTHSERVICE_SECOND } from './auth.helper';

export interface AuthConfig {
  clientId: string;
}

@Module({})
export class AuthModule {
  static register(options: MyModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: options.imports,
      providers: [
        // AUTHSERVICE_FIRST provider uses AuthService with configuration 1
        {
          provide: AUTHSERVICE_FIRST,
          useFactory: options.useFactory("FIRST_CONFIG"), // this will return the function (configService) => new AuthService(configId) see line 15-16 on app.module.ts
          inject: options.inject || [],
        },
        // AUTHSERVICE_SECOND provider uses AuthService with configuration 2
        {
          provide: AUTHSERVICE_SECOND,
          useFactory: options.useFactory("SECOND_CONFIG"), // this will return the function (configService) => new AuthService(configId) see line 15-16 on app.module.ts
          inject: options.inject || [],
        },
        AuthUserService,
        AuthOtherService
      ],
      exports: [AuthUserService, AuthOtherService]
    };
  }

}

interface MyModuleOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<any>;
  useClass?: Type<any>;
  useFactory?: (configId:string) => (
    ...args: any[]
  ) => Promise<AuthService> | AuthService;
  inject?: any[];
}
