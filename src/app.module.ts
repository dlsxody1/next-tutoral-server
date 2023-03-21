import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DashboardService } from './dashboard/dashboard.service';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AuthController, UserController, DashboardController],
  providers: [DashboardService],
})
export class AppModule {}
