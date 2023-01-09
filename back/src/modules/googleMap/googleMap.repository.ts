import { AddressDTO } from '@modules/googleMap/dto/address.dto';
import { SignUpDTO } from '@modules/auth/dto/sign-up.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Levle, UserDocument } from './schemas/level1.schema';

@Injectable()
export class GoogleMapRepository {
  constructor(
    @InjectModel(Levle.name) private levleModel: Model<UserDocument>,
  ) {}

  async findOne(userId: string): Promise<any> {
    return this.levleModel.findOne({ userId: userId });
  }

  async create(addressDTO: AddressDTO): Promise<any> {
    const { userId, addresses } = addressDTO;
    console.log('userid', userId);

    const newAddress = new this.levleModel({
      userId,
      addresses: [addresses],
    });
    return newAddress.save();
  }

  async updateOne(userId: string, addresses: Partial<any>): Promise<any> {
    return this.levleModel.updateOne(
      { userId: userId },
      { addresses: addresses },
    );
  }
 
}
