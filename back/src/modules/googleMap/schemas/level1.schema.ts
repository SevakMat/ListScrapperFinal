import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = Levle & Document;

@Schema()
export class Levle {
  @Prop()
  userId: string;

  @Prop()
  addresses: [addressesList]

}

@Schema()
export class addressesList {
  addressesList:[
    {
      lat: string;
      lng: string;
    }
  ]
}


export const LevleSchema = SchemaFactory.createForClass(Levle);


// {
//   userId: ""
//   addreses:[
//    [
//     {
//       lat:""
//       lng:""
//     },
//     {
//       lat:""
//       lng:""
//     }    {
//       lat:""
//       lng:""
//     }
//    ]
//   ],
//   [
//     {
//       lat:""
//       lng:""
//     },
//     {
//       lat:""
//       lng:""
//     }    {
//       lat:""
//       lng:""
//     }
//    ]
//   ],
// }