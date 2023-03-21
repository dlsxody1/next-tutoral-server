import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { DashboardDto } from './DashboardDto';

@Controller('dashboard')
export class DashboardController {
  @Get()
  findAll(): string {
    return 'This action returns all content';
  }

  @Get()
  findOne(): string {
    return 'this action returns one content';
  }

  @Post('/register')
  create(@Body() dashboardDto: DashboardDto) {
    return 'this is dto' + dashboardDto;
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
