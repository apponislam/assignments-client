import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Provider/Provider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://assignment-server-wheat.vercel.app",
    withCredentials: true,
});

const useAxios = () => {
    const { logOut } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        // Add a response interceptor
        axiosSecure.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            function (error) {
                console.log(error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log("LogOut the user");
                    logOut()
                        .then(() => {
                            console.log("Successfully logged out");
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    navigate("/login");
                }
            }
        );
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxios;
