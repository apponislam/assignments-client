import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PendingAssignment = () => {
    const [pendingAssignments, setPendingAssignments] = useState([]);

    useEffect(() => {
        fetch("https://assignment-server-wheat.vercel.app/submitted/status/false")
            .then((res) => res.json())
            .then((data) => setPendingAssignments(data));
    }, []);

    // console.log(pendingAssignments);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Pending Assignments || Appon Assignment Library</title>
            </Helmet>
            <div className="my-10 md:my-20">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">Pending Assignments</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Marks</th>
                                <th>Examinee Name</th>
                                <th>Status</th>
                                <th className="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingAssignments.map((pendingAssignment) => (
                                <tr key={pendingAssignment._id}>
                                    <th>{pendingAssignment.title}</th>
                                    <td>{pendingAssignment.marks}</td>
                                    <td>{pendingAssignment.examineeName}</td>
                                    <td>{pendingAssignment.status ? "Completed" : "Pending"}</td>
                                    <td className="text-right">
                                        <Link to={`/Check/${pendingAssignment._id}`}>
                                            <button className="btn bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Give Mark</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingAssignment;
