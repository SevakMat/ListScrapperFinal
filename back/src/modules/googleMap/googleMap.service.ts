import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddressDTO } from './dto/address.dto';
import { GetAddressesDTO } from './dto/get-addresses.dto';
import { GoogleMapRepository } from './googleMap.repository';

@Injectable()
export class GoogleMapService {
  constructor(private readonly googleMapRepository: GoogleMapRepository) { }

  public async setAddresses(addressDTO: AddressDTO): Promise<any> {
    const { userId, addresses } = addressDTO;
    try {
      let user = await this.googleMapRepository.findOne(addressDTO.userId);
      if (!user) {
        await this.googleMapRepository.create(addressDTO);
        return {
          statusCode: 201,
          success: true,
        };
      }
      user.addresses.push(addresses);
      await this.googleMapRepository.updateOne(userId, user.addresses);

      return {
        statusCode: 204,
        success: true,
      };
    } catch (err) {
      throw new HttpException('Problem with creating or updating dates', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAddresses(user: GetAddressesDTO): Promise<any> {
    try {


      let userData = await this.googleMapRepository.findOne(user.userId);
      console.log(3333333333333333, userData);

      return {
        statusCode: 204,
        success: true,
        addresses: userData ? userData.addresses : []
      };
    } catch (err) {
      throw new HttpException('Problem with getting user addreses', HttpStatus.INTERNAL_SERVER_ERROR);

    }

  }
}
