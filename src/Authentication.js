import { useNavigate, Outlet } from "react-router-dom";
import React from "react";

const useAuth = () => {
    
    const access = sessionStorage.getItem("accessToken");
    console.log(access);

    return access ? true : false;
};

const Authenticated = () => {
    const navigate = useNavigate()
    const isAuth = useAuth();

    return !isAuth && navigate("/login");
}

export default Authenticated;