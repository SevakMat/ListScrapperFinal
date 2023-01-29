import axios from "../config/axios"
import { ISearchForm } from "../components/dashboard/Dashboard"

export const SendCarData = async (searchForm: ISearchForm, userId: string): Promise<any> => {
  return axios.post("api/v1/scrapping/add-car", { "filterInfo": searchForm, "userId": userId })
}