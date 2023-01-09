import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = scrappingInfo & Document;

@Schema()
export class scrappingInfo {
  @Prop()
  userId: string;

  @Prop()
  url: string;

  @Prop()
  carsUrlList: [carId: string]

}

export const ScrappingSchema = SchemaFactory.createForClass(scrappingInfo);

