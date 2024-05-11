import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../Provider/Provider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Assignment = ({ assignment, assignment1, setAssignment1, setAssignment2 }) => {
    const { user } = useContext(Context);

    const Useremail = user?.email;
    console.log(Useremail);

    console.log(assignment);
    const { _id, image, title, marks, deficulty, email } = assignment;

    const deleteAssignment = (id) => {
        if (email === Useremail) {
            // console.log(id);

            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete this assignment",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    fetch(`http://localhost:5000/assignments/${id}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const newData = assignment1.filter((data) => data._id !== id);
                                setAssignment2(newData);
                                setAssignment1(newData);
                            }
                        });
                }
            });
        } else {
            console.log("You didn't make it");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You didn't make it",
            });
        }
    };

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
                        <Link to={`/update/${_id}`}>
                            <button className="btn w-full">Update</button>
                        </Link>
                        <button className="btn" onClick={() => deleteAssignment(_id)}>
                            Delete
                        </button>
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
    assignment1: PropTypes.object,
    setAssignment1: PropTypes.func,
    setAssignment2: PropTypes.func,
};

export default Assignment;
