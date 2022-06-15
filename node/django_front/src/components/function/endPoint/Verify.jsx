import axios from "axios";

export default function Verify() {
    axios.post('http://localhost:8000/api-auth/jwt/verify/', {
        token: localStorage.getItem("access")
    })

    .then(function (response) {
        console.log(response.data.verify)
        return(response.data.verify)
    })
    .catch(function (error) {
        console.log(error);
    })
};