import { AddCarDTO } from "../dto/addCar.dto";

export const urlGenerator = (addCarDTO: AddCarDTO["filterInfo"]) => {
  let url = 'https://www.list.am/en/category/23?n=0'
  const entriesArray = Object.entries(addCarDTO);
  entriesArray.map((item: any) => {
    url = url + "&" + item[0] + "=" + item[1]
  })
  return url
}