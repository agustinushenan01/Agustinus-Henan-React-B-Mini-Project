import { Navigate, Outlet } from 'react-router-dom';

export default function UserRoute() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (isLoggedIn == "false") {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}