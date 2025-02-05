import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import AuthProvider from "../context/AuthProvider.jsx";
import ProtectedRoute from "./ProtectedROute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import NoteList from "../components/NoteList.jsx";
import Note from "../components/Note.jsx";

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
                        element: <Home />,
                        path: "/",
                        loader: async () => {
                            const query = `query ExampleQuery {
                                            folders {
                                                id
                                                name
                                                createdAt
                                            }
                                        }`;
                            const res = await fetch('http://localhost:4000/graphql', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({
                                    query
                                })
                            });

                            const { data } = await res.json();
                            console.log(">>> check data: ", data);
                            return data;
                        },
                        children: [
                            {
                                element: <NoteList />,
                                path: `folders/:folderId`,
                                children: [
                                    {
                                        element: <Note />,
                                        path: "note/:noteId"
                                    }
                                ]
                            }
                        ]

                    }
                ]
            }

        ]
    }
]);

export default router;
