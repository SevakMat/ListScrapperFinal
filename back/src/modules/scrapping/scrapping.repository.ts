import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { scrappingInfo, UserDocument } from './schemas/scrappingData.scema';
import { CarsDTO } from './dto/cars.dto';

@Injectable()
export class ScrappingRepository {
  constructor(
    @InjectModel(scrappingInfo.name) private scrappingModel: Model<UserDocument>,
  ) { }

  async findCarListById(userId: string): Promise<any> {
    return this.scrappingModel.findOne({ userId: userId });
  }

  async addCarsList(addressDTO: CarsDTO): Promise<any> {
    const { userId, url, carsUrlList } = addressDTO;
    console.log('userid', userId);

    const newCars = new this.scrappingModel({
      userId,
      url,
      carsUrl: carsUrlList,
    });
    return newCars.save();
  }

  async updateCarList(userId: string, carsUrlList: Partial<any>): Promise<any> {
    return this.scrappingModel.updateOne(
      { userId: userId },
      { carsUrl: carsUrlList },
    );
  }

}
