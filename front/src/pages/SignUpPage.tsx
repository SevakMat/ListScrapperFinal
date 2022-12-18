import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/registrationPage/SignUp"
import { RootState, useAppSelector } from "../store";

 const SignUpPage = (): JSX.Element => {
    const {isLoggedIn} = useAppSelector((state: RootState) => state.auth)
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn){
            navigate("/dashboard")
        }
    }, [isLoggedIn])
    
    return <SignUp/>
}
export default SignUpPage