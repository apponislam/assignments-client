import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../Provider/Provider";
import { useContext } from "react";
import { DNA } from "react-loader-spinner";

const Sigined = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
            </div>
        );
    }

    if (!user) {
        return children;
    }

    // if (successLogin) {
    //     toast.success("Login successfully");
    //     console.log("Successfully logged");
    // }

    return (
        <div>
            <Navigate to={location?.state ? location.state : "/"}></Navigate>
        </div>
    );
};

Sigined.propTypes = {
    children: PropTypes.node,
};

export default Sigined;
