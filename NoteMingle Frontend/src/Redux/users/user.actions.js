import axios from "axios"
import { BASE_URL } from "../../constants/config"
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types"
const setTokenToStorage = (token) => {
    localStorage.setItem("token", token);
  };

export const getUser=(obj)=>async(distpatch)=>{
    distpatch({type:LOGIN_USER_LOADING})
    try {
        
        let data = await axios(BASE_URL+"/user/login",{
            method:"post",
            data:obj
        
            })
            let {message,token,status} = data.data
            console.log(message)
            if(status==1){
                setTokenToStorage(token);
                console.log("t"+token)
                distpatch({type:LOGIN_USER_SUCCESS,payload:token})
            }else{
                alert(message)
                distpatch({type:LOGIN_USER_ERROR})

            }

    } catch (error) {
        distpatch({type:LOGIN_USER_ERROR})

    }

   





}
