import { Navigate, Outlet } from 'react-router-dom';

export default function UserRoute() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}