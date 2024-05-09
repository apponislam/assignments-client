import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Signup = () => {
    const [viewpass, setViewpass] = useState(false);

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border shadow-lg rounded-2xl">
                    <div className="p-5 border-b">
                        <h1 className="text-center font-semibold text-3xl">Registration</h1>
                    </div>
                    <div className="p-5">
                        <form>
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type="text" placeholder="Name..." name="Name" required />
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type="text" placeholder="Image Url..." name="image" required />
                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type="email" placeholder="Email..." name="email" required />
                            <br />
                            <div className="relative">
                                <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none mb-4" type={viewpass ? "text" : "password"} placeholder="Password..." name="password" required />
                                <div onClick={() => setViewpass(!viewpass)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                    {viewpass ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <input className="btn w-full mb-4" type="submit" value="Register" />
                        </form>
                        <p>
                            Already Registared ? <Link to="/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
