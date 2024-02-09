import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AUTH_CONFIG, AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [AuthModule, ConfigModule.forRoot({envFilePath: ".env"})],
  controllers: [AppController],
  providers: [
    AppService,
    {
      inject: [ConfigService],
      provide: AUTH_CONFIG,
      useFactory: (configService: ConfigService) => {
        return {
          clientId: configService.getOrThrow("MESSAGE"),
        }
      }
    }
  ],
})
export class AppModule {}
