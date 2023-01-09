import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AddressDTO } from "./dto/address.dto";
import { JwtAuthGuard } from "../auth/strategy/jwt-auth.guard";
import { GoogleMapService } from "./googleMap.service";
import { GetAddressesDTO } from "./dto/get-addresses.dto";


@UseGuards(JwtAuthGuard)
@Controller('google-map')

export class GoogleMapController {

  constructor(private readonly googleMapService: GoogleMapService) { }

  @Post('addresses')
  private setAddresses(@Body() addressDTO: AddressDTO): Promise<any> {
    return this.googleMapService.setAddresses(addressDTO);
  }

  @Post('get-addresses')
  private getAddresses(@Body() user: GetAddressesDTO): Promise<any> {
    return this.googleMapService.getAddresses(user);
  }

}