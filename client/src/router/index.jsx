import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";

const AuthLayout = () => {
    return <Outlet />;
};

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/", element: <Home /> }
        ]
    }
]);

export default router;
