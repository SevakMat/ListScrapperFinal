import { AddCarDTO } from "../dto/addCar.dto";

export const urlGenerator = (addCarDTO: AddCarDTO) => {
  let url = 'https://www.list.am/en/category/23?n=0'
  console.log("addCarDTO", addCarDTO);
  const entriesArray = Object.entries(addCarDTO);
  entriesArray.map((item: any) => {
    url = url + "&" + item[0] + "=" + item[1]
  })
  return url
}