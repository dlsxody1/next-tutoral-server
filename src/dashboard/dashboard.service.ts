import { Injectable } from '@nestjs/common';
import { Dashboard } from './interface/dashboard.interface';

@Injectable()
export class DashboardService {
  private readonly dashboard: Dashboard[] = [];

  create(dashboard: Dashboard) {
    this.dashboard.push(dashboard);
  }

  findAll(): Dashboard[] {
    return this.dashboard;
  }
}
