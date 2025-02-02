import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import AuthProvider from "../context/AuthProvider.jsx";
import ProtectedRoute from "./ProtectedROute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const AuthLayout = () => {
    return <AuthProvider>
        <Outlet />
    </AuthProvider>;
};

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />

            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/",
                        element: <Home />

                    }
                ]
            }

        ]
    }
]);

export default router;
