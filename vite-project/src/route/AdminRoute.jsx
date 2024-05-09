import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute() {
    const isAdmin = localStorage.getItem("isAdmin")

    if (isAdmin == "false") {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}
