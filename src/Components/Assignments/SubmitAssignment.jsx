import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
    const { user } = useContext(Context);
    const examineeName = user.displayName;
    const examineeEmail = user.email;
    console.log(examineeName, examineeEmail);

    const assignment = useLoaderData();
    console.log(assignment);
    const { image, title, marks, deficulty, name, email } = assignment;
    const navigate = useNavigate();

    const assignmentSubmitBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const document = form.document.value;
        const note = form.note.value;
        const ownerName = name;
        const ownerEmail = email;
        const status = false;
        const submittedAssignment = { document, note, image, title, marks, deficulty, ownerName, ownerEmail, examineeName, examineeEmail, status };
        axios.post("http://localhost:5000/submitted", submittedAssignment).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Submitted successfully",
                });
                navigate("/mySubmit");
            }
        });
    };

    return (
        <div className="container mx-auto">
            <div className="md:my-20 my-10">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border shadow-lg rounded-2xl">
                        <div className="p-5 border-b">
                            <h1 className="text-center font-semibold text-3xl">Submit your assignment</h1>
                        </div>
                        <div className="p-4">
                            <form onSubmit={assignmentSubmitBtn}>
                                <div className="gap-4 grid grid-cols-1">
                                    <div>
                                        <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="PDF/Doc Link..." name="document" required />
                                    </div>
                                    <div>
                                        <textarea className="w-full bg-transparent border-b p-3 focus-visible:outline-none h-32" type="text" placeholder="Quick Note..." name="note" required />
                                    </div>
                                </div>
                                <input className="btn w-full mt-4" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitAssignment;
