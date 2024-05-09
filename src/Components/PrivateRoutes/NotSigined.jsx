import PropTypes from "prop-types";
import { DNA } from "react-loader-spinner";
import { Context } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

const NotSigined = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

NotSigined.propTypes = {
    children: PropTypes.node,
};

export default NotSigined;
