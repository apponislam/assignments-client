import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className="min-h-screen flex items-center justify-center">
                <div>
                    <h1 className="text-8xl text-center mb-5">Sorry</h1>
                    <h2 className="text-center text-xl mb-4">404 - Page Not Found</h2>
                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <button className="btn">GO HOME</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
