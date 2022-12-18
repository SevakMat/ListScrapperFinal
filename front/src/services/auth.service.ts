import axios from "../config/axios"

import { LoginData, RefreshToken, SignInData } from "./types"

export const loginRequest = async (loginData: LoginData): Promise<any> => {
    return axios.post("api/v1/auth/sign-in", { ...loginData })
}
export const logOutRequest = async (): Promise<any> => {
    return axios.post("api/v1/auth/sign-out", {})
}

export const SignUpRequest = async (signInData: SignInData): Promise<any> => {
    return axios.post("api/v1/auth/sign-up", { ...signInData })
}

export const SignInByRefreshTocenRequest = async (refreshToken: RefreshToken): Promise<any> => {
    return axios.post("api/v1/auth/sign-in-by-refresh-token", { ...refreshToken })
}

