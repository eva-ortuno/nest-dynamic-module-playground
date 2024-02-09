import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';

@Module({
  // imports: [AuthModule.register({clientId: "My message"})],
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    AuthModule.register({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configId) => (configService: ConfigService) => {
        return new AuthService({clientId: configService.getOrThrow(configId)})
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
