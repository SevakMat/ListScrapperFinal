import { JwtAuthGuard } from "@modules/auth/strategy/jwt-auth.guard";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AddCarDTO } from "./dto/addCar.dto";
import { ScrappingService } from "./scrapping.service";



@UseGuards(JwtAuthGuard)
@Controller('scrapping')

export class ScrappingController {

  constructor(private readonly scrappingService: ScrappingService) { }

  @UseGuards(JwtAuthGuard)
  @Post('add-car')
  private addCar(@Body() addCarDTO: AddCarDTO): Promise<any> {
    return this.scrappingService.addCar(addCarDTO);
  }

}