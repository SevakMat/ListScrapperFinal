import { IsNotEmpty } from 'class-validator';

export class GetAddressesDTO {

  @IsNotEmpty()
  userId: string
}