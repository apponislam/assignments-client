import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Assignment = ({ assignment }) => {
    console.log(assignment);
    const { _id, image, title, marks, deficulty } = assignment;
    return (
        <div className="rounded-xl border shadow-lg relative">
            <img className="h-64 object-cover rounded-xl w-full" src={image} alt="" />
            <p className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-3xl font-bold">{deficulty}</p>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <p className="font-medium">{title}</p>
                    <p className="font-medium bg-blue-600 text-white px-4 py-2 rounded-3xl">{marks}</p>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <button className="btn">Update</button>
                        <button className="btn">Delete</button>
                    </div>
                    <Link to={`/info/${_id}`}>
                        <button className="btn w-full">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Assignment.propTypes = {
    assignment: PropTypes.object,
};

export default Assignment;
