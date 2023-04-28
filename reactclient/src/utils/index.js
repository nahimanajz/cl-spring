import { toast } from "react-toastify"

export const SERVER_URL="http://localhost:9000/api/v1"
export const checkThenNavigate = (data, showNext, value)=>{
    if (data.includes("length should be") || data.includes("Invalid credentials")) {
        toast(data)
    } else {
        showNext(value)
    }

}