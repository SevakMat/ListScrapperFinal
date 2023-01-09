import { hashPassword } from "@common/utils";
import { SignUpDTO } from "@modules/auth/dto/sign-up.dto";
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }


  async createUser(signUpDTO: SignUpDTO): Promise<User> {
    // todo add try catch
    const salt = await hashPassword(signUpDTO.password);
    const userId = uuidv4() as string;

    return this.usersRepository.create(signUpDTO, userId, salt)
  }

  async findOneUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email })
  }





  // async getUsers(): Promise<any[]> {
  //   return this.usersRepository.find({});
  // }
  // async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
  //   return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  // }
}