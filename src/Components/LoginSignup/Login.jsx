import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Provider";
import Swal from "sweetalert2";

const Login = () => {
    const [viewpass, setViewpass] = useState(false);
    const navigate = useNavigate();

    const { signInUser, googleSignInUser, setLoading, githubSignInUser } = useContext(Context);
    // const location = useLocation();
    // console.log("Location In Login Page", location);
    // <Navigate to={location?.state ? location.state : "/"}></Navigate>;

    const logInButton = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                // <Navigate to="/"></Navigate>;
                navigate("/");
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
                // <Navigate to={location?.state ? location.state : "/"}></Navigate>;
                navigate("/");
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
                // <Navigate to={location?.state ? location.state : "/"}></Navigate>;
                navigate("/");
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
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border shadow-lg rounded-2xl">
                    <div className="p-5 border-b">
                        <h1 className="text-center font-semibold text-3xl">Log In</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={logInButton}>
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type="email" placeholder="Email..." name="email" required />
                            <br />
                            <div className="relative">
                                <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type={viewpass ? "text" : "password"} placeholder="Password..." name="password" required />
                                <div onClick={() => setViewpass(!viewpass)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                    {viewpass ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <input className="btn w-full mb-4" type="submit" value="Log In" />
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
                            Not a Member? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
