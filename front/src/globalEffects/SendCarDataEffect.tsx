import { ISearchForm } from "../components/dashboard/Dashboard";
import { SendCarData } from "../services/scrapping.service";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { setLoadingEffect } from "../store/effects/auth.effects";


export const SendCarDataEffect = (
  searchForm: ISearchForm,
  userId: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): any => {
  return async (dispatch: AppDispatch) => {
    setIsLoading(true)

    try {
      const data = await SendCarData(searchForm, userId as string)
      if (data.data.success) {
        toast.success(data.data.status);
      } else {
        toast.error(data.data.status);
      }
      setIsLoading(false)
    } catch (error: any) {
      setIsLoading(false)
      toast.error("Add car faild");
    } finally {
      setIsLoading(false)
    }
  };
};
