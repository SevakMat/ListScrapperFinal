import { IsEmail, IsNotEmpty, IsMobilePhone, IsOptional } from 'class-validator';
import { ERROR_MESSAGES } from 'src/common/constants';

import { IsFile } from 'src/core/validators';

export class SignUpDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsMobilePhone("any")
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  level: string;

  @IsNotEmpty()
  password: string;

  // as on sign-up user will have default image. Image could be changed via correspondent endpoint.
  //   @IsFile(
  //     { mime: ['image/jpg', 'image/png'] },
  //     { message: ERROR_MESSAGES.INVALID_FILE },
  //   )
  //   profileImage: any;
}
