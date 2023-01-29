import { Injectable } from '@nestjs/common';
import { AddCarDTO } from './dto/addCar.dto';
import { CarsDTO } from './dto/cars.dto';
import { urlGenerator } from './scrapping-helpers/urlGenerator';
import { ScrappingRepository } from './scrapping.repository';
import axios from 'axios';
import cheerio from 'cheerio';
import { SCRAPPER_LOOP_COUNT } from './constants';

@Injectable()
export class ScrappingService {
  constructor(private readonly scrappingRepository: ScrappingRepository) { }

  async addCarsList(addressDTO: CarsDTO): Promise<any> {
    // todo add try catch
    return this.scrappingRepository.addCarsList(addressDTO);
  }

  async findCarListById(userID: string): Promise<any> {
    // todo add try catch
    return this.scrappingRepository.findCarListById(userID);
  }
  async updateListById(addressDTO: CarsDTO): Promise<any> {
    // todo add try catch
    return this.scrappingRepository.updateCarList(addressDTO);
  }




  public async addCar(addCarDTO: AddCarDTO): Promise<any> {
    const generatedUrl = urlGenerator(addCarDTO.filterInfo);

    const user = await this.findCarListById(addCarDTO.userId);
    console.log(user);

    if (user) {
      return {
        statusCode: 429,
        status: "You already have a serachable car "
      }
    }

    this.listLoop(generatedUrl, addCarDTO.userId);

    return {
      statusCode: 201,
      status: "Your search is activated",
      success: "success"

    }
  }

  public async getHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }

  public async compareArray(newCarList, oldCarList) {
    let needUpdate = false
    for (let index: number = 0; index < newCarList.length; index++) {
      if (!oldCarList.includes(newCarList[index])) {
        needUpdate = true
        console.log('You have a new car', newCarList[index]);
      }
    }
    return needUpdate
  }

  public async sleep(milliseconds) {
    return new Promise(resolve =>
      setTimeout(resolve, milliseconds))
  };


  public async listLoop(pageUrl, userId) {
    const statements: Array<string> = [];

    for (let j = 0; j < SCRAPPER_LOOP_COUNT; j++) {
      let pageCount = 1;
      console.log('SCRAPPER_LOOP_COUNT', j, "---", userId);
      for (let page = 1; page <= pageCount; page++) {
        // add number of page
        let tempUrl = pageUrl.replace(
          `https://www.list.am/en/category/23`,
          `https://www.list.am/en/category/23/${page}`,
        );
        // get a link of car
        const $ = await this.getHTML(tempUrl);

        $('.gl a').each((i, element: any) => {
          let carLink = element.attribs.href.split('/')[3];
          if (j == 0) {
            statements.push(carLink);
          } else if (!statements.includes(carLink)) {
            statements.push(carLink);
            console.log('link of new car - ', carLink);
          }
        });

        // check is it last page
        if ($('.dlf').eq(0).text().includes('Next >')) {
          pageCount++;
        }
      }
      console.log(statements.length);

      const carInf: CarsDTO = {
        userId: userId,
        url: pageUrl,
        carsUrlList: statements
      }
      if (j == 0) {
        this.addCarsList(carInf)
      } else {

        const arr = await this.findCarListById(userId);
        const needUpdate = await this.compareArray(statements, arr.carsUrlList)
        if (needUpdate) {
          await this.updateListById(carInf)

        }
      }

      await this.sleep(15000);
    }
    return JSON.stringify(statements);
  }
}
