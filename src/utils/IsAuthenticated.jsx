import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useLocation } from "react-router-dom";
import { useGetTokenExpiryQuery } from "../api/UserApi";
import { toast } from "react-toastify";
const IsAuthenticated = ({ children }) => {
    const user = useSelector((state) => state.auth);
    // console.log(user);
    const location = useLocation();
    const path = location.pathname;
    const { data, isError, refetch, isLoading } = useGetTokenExpiryQuery();


    useEffect(() => {
        const checkTokenExpiry = () => {
            // console.log(data);
            if (!isLoading && isError) {
                toast('Votre session à expiré', { type: 'error' })
                console.log('Error checking token expiry:');
                localStorage.removeItem('user'); // Clear the token from local storage or state
                window.location.href = `/login`; // Redirect to the login page
            }
        };

        // Perform initial check
        checkTokenExpiry();

        // Set up interval to refetch token expiry every 5 minutes
        const interval = setInterval(refetch, 5 * 60 * 1000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, [data, isError, refetch, isLoading]);
    return (
        <>
            {user.isLogin ?
                (
                    <>{children}</>
                ) :
                (
                    <>
                        <Navigate to={`/login`} />
                    </>
                )}
        </>
    );
};

export default IsAuthenticated;
