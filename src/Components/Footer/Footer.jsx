import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#1a2845]">
            <div className="container mx-auto">
                <footer className="grid grid-cols-2 md:grid-cols-4 py-10 text-base-content">
                    <nav className="text-white flex flex-col gap-3">
                        <h6 className="footer-title text-white opacity-100">Contact</h6>
                        <a href="tel:01722779803" className="link link-hover">
                            +880 1722 779803
                        </a>
                        <a href="mailto:11appon11@gmail.com" className="link link-hover">
                            11appon11@gmail.com
                        </a>
                        <a target="_blank" href="https://maps.app.goo.gl/ktAHsTSTxpp7pzKw8" className="link link-hover">
                            Fulbari Bus Stand, Dinajpur
                        </a>
                    </nav>

                    <nav className="text-white flex gap-3 flex-col">
                        <h6 className="footer-title opacity-100">Services</h6>
                        <a className="link link-hover">Create Assignment</a>
                        <a className="link link-hover">Challanges</a>
                        <a className="link link-hover">Good Design</a>
                        <a className="link link-hover">Web Learner</a>
                    </nav>
                    <nav className="text-white flex gap-3 flex-col">
                        <h6 className="footer-title opacity-100">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <aside>
                        <img className="w-28" src="/logo.png" alt="" />
                        <p className="text-white">You can practice web here</p>
                    </aside>
                </footer>

                <div className="flex flex-col md:flex-row  items-center justify-between mt-6 py-6 border-t border-green-600 gap-4 px-0 lg:px-0 mx-3 xl:mx-0">
                    <p className="text-white font-bold">&copy; 2024 Your Assignment. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <p className="text-white font-bold">Follow Us : </p>
                        <a target="_blank" href="https://www.facebook.com/appon19/" className="text-white text-xl">
                            <FaFacebook />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/apponislam/" className="text-white text-xl">
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://twitter.com/Appon2003" className="text-white text-xl">
                            <FaXTwitter />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/apponislam/" className="text-white text-xl">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
