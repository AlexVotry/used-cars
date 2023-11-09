import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportSrv: ReportsService) {}

  @Post()
  createReport(@Body() body: CreateReportDto) {
    return this.reportSrv.create(body);
  }
}
