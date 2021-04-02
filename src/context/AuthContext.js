import React,{useState} from "react";
import {apiCall} from "../utils/apiCall";

const AuthContext = React.createContext();


function AuthProvider(props){
    const [data,setData]=useState({token:null,user:null});

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            apiCall('user',{token}).then(r=>{
                    console.log(r);
                    setData({token,user:r});
                }
            )
        }
    },[])

    const login = (credentials) => {
        apiCall('auth',{data:credentials}).then(r=> {
                setData(r);
                localStorage.setItem("token", r.token);
            }
        )
    }
    const logout = () => {
        localStorage.clear();
        setData({token:null,user:null});
    }

    return(
        <AuthContext.Provider value={{data, login, logout}} {...props}/>
    )
}
const useAuth = () => React.useContext(AuthContext)
export {AuthProvider, useAuth}
