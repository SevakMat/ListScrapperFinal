import { IsNotEmpty } from 'class-validator';

export class CarsDTO {

  @IsNotEmpty()
  userId: string

  url: string;

  carsUrlList: [carId: string]
}
