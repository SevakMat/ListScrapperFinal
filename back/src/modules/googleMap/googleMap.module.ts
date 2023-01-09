import { Module } from '@nestjs/common';
import { GoogleMapService } from './googleMap.service';
import { GoogleMapController } from './googleMap.controller';
import { GoogleMapRepository } from './googleMap.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Levle, LevleSchema } from './schemas/level1.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Levle.name, schema: LevleSchema }])],
  controllers: [GoogleMapController],
  providers: [GoogleMapService,GoogleMapRepository]
})
export class GoogleMapModule { }