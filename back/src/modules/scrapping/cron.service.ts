import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron('* 30 * * * *')
  handleCron() {
    console.log("cron is working");
  }
}