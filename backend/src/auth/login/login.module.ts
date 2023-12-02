import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { UserModule } from 'src/models/user/user.module';
import { UserService } from 'src/models/user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, UserService],
})
export class LoginModule {}
