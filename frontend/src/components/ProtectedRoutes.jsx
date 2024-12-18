import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Fixed import for jwt-decode
import api from "../api";
import { useState, useEffect } from "react";

function ProtectedRoutes({ children, allowedRoles }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth();
    }, []);

    const refreshToken = async () => {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) {
            handleLogout();
            return;
        }

        try {
            const res = await api.post("/api/token/refresh/", { refresh });
            if (res.status === 200) {
                localStorage.setItem("access", res.data.access);
                setIsAuthorized(true);
            } else {
                handleLogout();
            }
        } catch (error) {
            console.log("Failed to refresh token:", error);
            handleLogout();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setIsAuthorized(false);
    };

    const auth = async () => {
        const token = localStorage.getItem("access");
        if (!token) {
            handleLogout();
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            // Check if the user's role is allowed to access the route
            const userRole = decoded.role; // Assuming the role is in the token
            if (allowedRoles && !allowedRoles.includes(userRole)) {
                setIsAuthorized(false); // Not authorized due to role
            } else {
                setIsAuthorized(true);
            }
        }
    };

    if (isAuthorized === null) {
        return <div className="flex justify-center items-center w-full min-h-screen font-medium text-2xl text-indigo-600">Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;
