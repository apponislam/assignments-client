import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AssignmentCard2 = ({ assignment }) => {
    const { _id, image, title, marks, deficulty } = assignment;

    return (
        <div className="rounded-xl border border-green-600 shadow-lg relative">
            <img className="h-64 object-cover rounded-xl w-full" src={image} alt="" />
            <p className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-3xl font-bold">{deficulty}</p>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <p className="font-medium">{title}</p>
                    <p className="font-medium bg-blue-600 text-white px-4 py-2 rounded-3xl">{marks}</p>
                </div>
                <div>
                    <Link to={`/info/${_id}`}>
                        <button className="btn w-full bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

AssignmentCard2.propTypes = {
    assignment: PropTypes.object,
};

export default AssignmentCard2;
