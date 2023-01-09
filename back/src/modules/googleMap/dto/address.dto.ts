import { IsNotEmpty } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  userId: string

  @IsNotEmpty()
  addresses: [
    {
      lat:string,
      lng:string
    }  
  ]
}
