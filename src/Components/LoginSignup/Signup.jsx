import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Provider";
import { signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";

const Signup = () => {
    const [viewpass, setViewpass] = useState(false);
    const { signUpUser, setLoading } = useContext(Context);
    const nvaigate = useNavigate();

    const signUpButton = (e) => {
        e.preventDefault();
        const name = e.target.Name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, image, email, password);

        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters",
            });
            return;
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one uppercase and one lowercase letter",
            });
            return;
        }

        signUpUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image,
                })
                    .then(() => {
                        console.log("profile updated successfully");
                        Swal.fire({
                            icon: "success",
                            title: "Registered Successfully",
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                signOut(auth)
                    .then(() => {
                        console.log("logged out after registration");
                        nvaigate("/login");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Registered Failed",
                });
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border border-green-600 shadow-lg rounded-2xl mx-3 md:mx-0">
                    <div className="p-5 border-b border-green-600">
                        <h1 className="text-center font-semibold text-2xl md:text-3xl">Registration</h1>
                    </div>
                    <div className="p-5">
                        <form onSubmit={signUpButton}>
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type="text" placeholder="Name..." name="Name" required />
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type="text" placeholder="Image Url..." name="image" required />
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type="email" placeholder="Email..." name="email" required />
                            <br />
                            <div className="relative">
                                <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4 border-green-600" type={viewpass ? "text" : "password"} placeholder="Password..." name="password" required />
                                <div onClick={() => setViewpass(!viewpass)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                    {viewpass ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <input className="btn w-full mb-4 bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white" type="submit" value="Register" />
                        </form>
                        <p>
                            Already Registared ?{" "}
                            <Link to="/login" className="text-green-600 font-bold">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
