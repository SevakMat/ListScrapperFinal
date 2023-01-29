import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { AppDispatch } from "..";
import {
  loginRequest,
  logOutRequest,
  SignUpRequest,
} from "../../services/auth.service";
import { LoginData, SignInData } from "../../services/types";
import {
  loginRequestSuccess,
  logOutRequestSuccess,
  setLoading,
} from "../actions/auth.actions";

export const loginEffect = (
  loginData: LoginData,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const result = await loginRequest(loginData);
      const {
        data: { access_token, user },
      } = result;

      await localStorage.setItem("accessToken", access_token);
      dispatch(loginRequestSuccess(user));

      toast.success("Successfully logged in");
      navigate("/dashboard");

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const setLoadingEffect = (loading: boolean): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(loading));
  };
};

export const logOutEffect = (navigate: NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await logOutRequest();

      await localStorage.clear();

      dispatch(logOutRequestSuccess());

      toast.success("Successfully logout");
      navigate("/login");
      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logaut faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const signUpEffect = (signInData: SignInData, navigate: NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await SignUpRequest(signInData);

      toast.success("Successfully sign Up");
      navigate('/login');

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
