import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute() {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (!isLoggedIn || !isAdmin) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
