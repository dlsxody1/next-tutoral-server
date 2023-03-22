import { Dashboard } from './interface/dashboard.interface';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardDto } from './DashboardDto';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Get()
  findAll(): Dashboard[] {
    return this.dashboardService.findAll();
  }

  @Get()
  findOne(): string {
    return 'this action returns one content';
  }

  @Post('/register')
  create(@Body() dashboardDto: DashboardDto) {
    return this.dashboardService.create(dashboardDto);
  }

  @Put('/register/:id')
  update(@Param('id') id: string, @Body() DashboardDto) {
    return `modify contents + ${id}` + DashboardDto;
  }

  @Delete('/register/:id')
  delete(@Param('id') id: string, @Body() DashboardDto) {
    return `remove contents + ${id}` + DashboardDto;
  }
}
