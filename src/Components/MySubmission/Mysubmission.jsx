import { useContext, useEffect, useState } from "react";
import { Context } from "../Provider/Provider";
import useAxios from "./useAxios";

const Mysubmission = () => {
    const { user } = useContext(Context);
    const userEmail = user.email;
    const axiosSecure = useAxios();

    const [myAssignments, setMyAssignments] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/submitted?email=${userEmail}`, { credentials: "include" })
        //     .then((res) => res.json())
        //     .then((data) => setMyAssignments(data));

        axiosSecure.get(`/submitted?email=${userEmail}`).then((res) => setMyAssignments(res.data));
    }, [userEmail, axiosSecure]);

    return (
        <div className="container mx-auto">
            <div className="my-10 md:my-20">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">My Submission</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>You Got/Marks</th>
                                <th>Examinee Name</th>
                                <th>Feedback</th>
                                <th className="text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myAssignments.map((myAssignment) => (
                                <tr key={myAssignment._id}>
                                    <th>{myAssignment.title}</th>
                                    <td>
                                        {myAssignment.yougot ? myAssignment.yougot : "(...)"}/{myAssignment.marks}
                                    </td>
                                    <td>{myAssignment.examineeName}</td>
                                    <td>{myAssignment.feedback}</td>
                                    <td className="text-right">{myAssignment.status ? "Completed" : "Pending"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mysubmission;
