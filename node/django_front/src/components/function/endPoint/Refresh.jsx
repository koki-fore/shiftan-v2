import axios from "axios";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const Refresh = (refreshToken) => {
    axios.post('http://localhost:8000/api-auth/jwt/refresh/', {
        refresh: refreshToken
    })
    .then(function (response) {
        console.log(response.data.access)
        console.log("Refresh!")
        return(
            window.localStorage.setItem("access", response.data.access),
            window.localStorage.setItem("refresh", response.data.refresh)
        )
    })
    .catch(function (error) {
        // console.log(error);
        return(
            console.log("Not refresh!"),
            window.localStorage.setItem("access", undefined),
            window.localStorage.setItem("refresh", undefined)
        )
        
        
    })
};