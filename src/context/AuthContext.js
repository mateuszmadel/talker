import React,{useState} from "react";

const AuthContext = React.createContext();


function AuthProvider(props){
    const [data,setData]=useState({token:null,user:null});

    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            fetch('http://localhost:8080/user',{
                headers: {
                    'Authorization':token
                },
            }).then(response => response.json())
                .then(json=> {
                    setData({token,user:json});
                }).catch((error) => {

            });
        }
    },[])

    const login = (credentials) => {
        fetch('http://localhost:8080/auth',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }).then(response => response.json())
            .then(json=> {
                setData(json);
                localStorage.setItem("token",json.token);
            })
            .catch((error) => {

            });
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
