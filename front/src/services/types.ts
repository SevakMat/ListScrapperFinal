export interface LoginData {
    email: string,
    password: string
}

export interface SignInData {
    firstName: string
    lastName: string
    email: string,
    password: string,
    phoneNumber: string
    level: string

}
export interface RefreshToken {
    refreshToken: string | null,
}