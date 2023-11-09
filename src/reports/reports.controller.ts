import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportSrv: ReportsService) {}

  @Get()
  getEstimate(@Query() query: GetEstimateDto) {
    return this.reportSrv.createEstimate(query);
  }
  
  @Post()
  createReport(@Body() body: CreateReportDto) {
    return this.reportSrv.create(body);
  }
}
