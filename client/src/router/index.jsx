import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import AuthProvider from "../context/AuthProvider.jsx";
import ProtectedRoute from "./ProtectedROute.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import NoteList from "../components/NoteList.jsx";
import Note from "../components/Note.jsx";
import { addNewNote, noteLoader, notesLoader, updateNote } from "../utils/noteUtils.js";
import { foldersLoader } from "../utils/folderUtils.js";

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
                        loader: foldersLoader,
                        children: [
                            {
                                element: <NoteList />,
                                path: `folders/:folderId`,
                                action: addNewNote,
                                loader: notesLoader,
                                children: [
                                    {
                                        element: <Note />,
                                        path: "note/:noteId",
                                        action: updateNote,
                                        loader: noteLoader,
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
