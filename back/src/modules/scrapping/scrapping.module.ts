import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CronService } from "./cron.service";
import { scrappingInfo, ScrappingSchema } from "./schemas/scrappingData.scema";
import { ScrappingController } from "./scrapping.controller";
import { ScrappingRepository } from "./scrapping.repository";
import { ScrappingService } from "./scrapping.service";
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: scrappingInfo.name, schema: ScrappingSchema }]),
    ScheduleModule.forRoot()

  ],
  controllers: [ScrappingController],
  providers: [ScrappingService, ScrappingRepository, CronService],
  exports: [ScrappingService]
})

export class ScrappingModule { }