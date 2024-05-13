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
// import Sigined from "./Components/PrivateRoutes/Sigined.jsx";
import Assignments from "./Components/Assignments/Assignments.jsx";
import CreateAssignment from "./Components/CreateAssignment/CreateAssignment.jsx";
import PendingAssignment from "./Components/PendingAssignment/PendingAssignment.jsx";
import NotSigined from "./Components/PrivateRoutes/NotSigined.jsx";
import UpdateAssignment from "./Components/Assignments/UpdateAssignment.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Details from "./Components/Assignments/Details.jsx";
import SubmitAssignment from "./Components/Assignments/SubmitAssignment.jsx";
import Mysubmission from "./Components/MySubmission/Mysubmission.jsx";
import GiveMark from "./Components/PendingAssignment/GiveMark.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/assignments"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Signup></Signup>,
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
                path: "/Submit/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`),
                element: (
                    <NotSigined>
                        <SubmitAssignment></SubmitAssignment>
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
                path: "/Check/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/submitted/${params.id}`),
                element: (
                    <NotSigined>
                        <GiveMark></GiveMark>
                    </NotSigined>
                ),
            },
            {
                path: "/mySubmit",
                element: (
                    <NotSigined>
                        <Mysubmission></Mysubmission>
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
