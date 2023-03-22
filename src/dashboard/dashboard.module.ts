import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { DashboardEntity } from './entity/dashboard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DashboardEntity])],
  exports: [TypeOrmModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
