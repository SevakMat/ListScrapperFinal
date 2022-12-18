import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../components/login/login"
import { RootState, useAppSelector } from "../store"

 const LoginPage = (): JSX.Element => {

    return <Login/>
}
export default LoginPage