import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/LoginSignup/Login.jsx";
import Signup from "./Components/LoginSignup/Signup.jsx";
import Provider from "./Components/Provider/Provider.jsx";
import { HelmetProvider } from "react-helmet-async";
import Sigined from "./Components/PrivateRoutes/Sigined.jsx";
import Assignments from "./Components/Assignments/Assignments.jsx";
import CreateAssignment from "./Components/CreateAssignment/CreateAssignment.jsx";
import PendingAssignment from "./Components/PendingAssignment/PendingAssignment.jsx";
import NotSigined from "./Components/PrivateRoutes/NotSigined.jsx";
import UpdateAssignment from "./Components/Assignments/UpdateAssignment.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Details from "./Components/Assignments/Details.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: (
                    <Sigined>
                        <Login></Login>
                    </Sigined>
                ),
            },
            {
                path: "/register",
                element: (
                    <Sigined>
                        <Signup></Signup>
                    </Sigined>
                ),
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>,
                loader: () => fetch("http://localhost:5000/assignments"),
            },
            {
                path: "/info/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`),
                element: (
                    <NotSigined>
                        <Details></Details>
                    </NotSigined>
                ),
            },
            {
                path: "/createAssignment",
                element: (
                    <NotSigined>
                        <CreateAssignment></CreateAssignment>
                    </NotSigined>
                ),
            },
            {
                path: "/pendingAssignment",
                element: (
                    <NotSigined>
                        <PendingAssignment></PendingAssignment>
                    </NotSigined>
                ),
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`),
                element: (
                    <NotSigined>
                        <UpdateAssignment></UpdateAssignment>
                    </NotSigined>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider>
            <HelmetProvider>
                <>
                    <RouterProvider router={router} />
                </>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
