import { Injectable } from "@nestjs/common";
import { AddCarDTO } from "./dto/addCar.dto";
import { CarsDTO } from "./dto/cars.dto";
import { listLoop } from "./scrapping-helpers/listLoop";
import { urlGenerator } from "./scrapping-helpers/urlGenerator";
import { ScrappingRepository } from "./scrapping.repository";

@Injectable()
export class ScrappingService {
  constructor(private readonly scrappingRepository: ScrappingRepository) { }


  async addCarsList(addressDTO: CarsDTO): Promise<any> {
    // todo add try catch
    return this.scrappingRepository.addCarsList(addressDTO)
  }



  public async addCar(addCarDTO: AddCarDTO): Promise<any> {
    const generatedUrl = urlGenerator(addCarDTO)

    listLoop(generatedUrl)

  }


}