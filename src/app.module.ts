import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule.register({clientId: "MESSAGE"})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
