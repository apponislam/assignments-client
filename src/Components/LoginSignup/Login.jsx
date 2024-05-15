import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Provider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [viewpass, setViewpass] = useState(false);
    const navigate = useNavigate();

    const { signInUser, googleSignInUser, setLoading, githubSignInUser } = useContext(Context);
    const location = useLocation();
    // console.log(location);
    // console.log("Location In Login Page", location);
    // <Navigate to={location?.state ? location.state : "/"}></Navigate>;

    const logInButton = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                // <Navigate to="/"></Navigate>;

                const user = { email };
                axios.post("https://assignment-server-wheat.vercel.app/jwt", user, { withCredentials: true }).then((res) => {
                    console.log(res.data);
                });

                navigate(location?.state ? location?.state : "/");
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Login failed",
                });
            });
    };

    const googleSignInButton = () => {
        googleSignInUser()
            .then((result) => {
                console.log(result.user);

                const email = result.user.email;
                const user = { email };
                axios.post("https://assignment-server-wheat.vercel.app/jwt", user, { withCredentials: true }).then((res) => {
                    console.log(res.data);
                });

                // <Navigate to={location?.state ? location.state : "/"}></Navigate>;
                navigate(location?.state ? location?.state : "/");
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Login failed",
                });
            });
    };

    const githubSignInButton = () => {
        githubSignInUser()
            .then((result) => {
                console.log(result.user);

                const email = result.user.email;
                const user = { email };
                axios.post("https://assignment-server-wheat.vercel.app/jwt", user, { withCredentials: true }).then((res) => {
                    console.log(res.data);
                });

                // <Navigate to={location?.state ? location.state : "/"}></Navigate>;
                navigate(location?.state ? location?.state : "/");
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Login failed",
                });
            });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Sign In Your Account || Appon Assignment Library</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border border-green-600 shadow-lg rounded-2xl mx-3 md:mx-0">
                    <div className="p-5 border-b border-green-600">
                        <h1 className="text-center font-semibold text-2xl md:text-3xl">Log In</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={logInButton}>
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type="email" placeholder="Email..." name="email" required />
                            <br />
                            <div className="relative">
                                <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type={viewpass ? "text" : "password"} placeholder="Password..." name="password" required />
                                <div onClick={() => setViewpass(!viewpass)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                    {viewpass ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <input className="btn w-full mb-4 bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white" type="submit" value="Log In" />
                        </form>
                        <div>
                            <div className="flex justify-center items-center gap-4 p-3 shadow-md border rounded-lg mb-4 cursor-pointer" onClick={googleSignInButton}>
                                <FcGoogle />
                                <p>Login with Google</p>
                            </div>
                            <div className="flex justify-center items-center gap-4 p-3 shadow-md border rounded-lg mb-4 cursor-pointer" onClick={githubSignInButton}>
                                <FaGithub />
                                <p>Login with Github</p>
                            </div>
                        </div>
                        <p>
                            Not a Member?{" "}
                            <Link to="/register" className="text-green-600 font-bold">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
