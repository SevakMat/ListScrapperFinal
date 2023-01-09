export class CreateUserDto {
  
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  // @IsNotEmpty()
  // address: string;
  password: string;
}