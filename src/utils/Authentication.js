import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const useAuth = () => {
    const access = sessionStorage.getItem("accessToken");
    return access ? true : false;
};

const Authenticated = () => {
    const isAuth = useAuth();

    return true
}

export default Authenticated;