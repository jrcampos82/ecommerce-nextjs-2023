import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma-service';
import { UserModule } from './models/user/user.module';
import { PrismaModule } from './database/prisma.module';
import { LoginModule } from './auth/login/login.module';

@Module({
  imports: [UserModule, PrismaModule, LoginModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
