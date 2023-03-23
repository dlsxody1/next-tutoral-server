import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DashboardService } from './dashboard/dashboard.service';
import LoggerMiddleware from './dashboard/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardEntity } from './dashboard/entity/dashboard.entity';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    DashboardModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rladlsxogkftndlTek!!',
      database: 'dashboard',
      entities: [DashboardEntity],
      synchronize: true,
    }),
  ],
  controllers: [AuthController, UserController, DashboardController],
  providers: [DashboardService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('dashboard');
  }
}
