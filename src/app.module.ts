import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AUTH_CONFIG, AuthModule } from './auth/auth.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [AuthModule.register({clientId: "My message"})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
