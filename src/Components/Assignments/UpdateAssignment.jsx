import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const assignment = useLoaderData();
    const { _id, title, marks, deficulty, image, description, startDate } = assignment;

    const [startDates, setStartDates] = useState(startDate);
    const [deficultyLevel, setDificultyLevel] = useState(deficulty);

    const dificultyBtn = (e) => {
        setDificultyLevel(e.target.value);
    };

    const navigate = useNavigate();

    const updateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const newTitle = form.title.value;
        const newMark = form.marks.value;
        const newImage = form.image.value;
        const newDescription = form.description.value;
        const newDate = startDates;
        const newDificult = deficultyLevel;
        const assignment = { newTitle, newMark, newImage, newDescription, newDate, newDificult };
        fetch(`http://localhost:5000/assignments/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(assignment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated Successfully",
                    });
                    navigate("/assignments");
                }
            });
    };

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4 border shadow-lg rounded-2xl">
                    <div className="p-5 border-b">
                        <h1 className="text-center font-semibold text-3xl">Create your assignment</h1>
                    </div>
                    <div className="p-4">
                        <form onSubmit={updateAssignment}>
                            <div className="gap-4 grid md:grid-cols-2 grid-cols-1">
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" defaultValue={title} placeholder="Title..." name="title" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="number" defaultValue={marks} placeholder="Marks..." name="marks" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" defaultValue={image} placeholder="Image..." name="image" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" defaultValue={description} placeholder="Description..." name="description" required />
                                </div>
                                <div>
                                    <select onChange={dificultyBtn} defaultValue={deficultyLevel} className="w-full bg-transparent border-b p-3 focus-visible:outline-none">
                                        <option>easy</option>
                                        <option>medium</option>
                                        <option>hard</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <ReactDatePicker className="w-full bg-transparent border-b p-3 focus-visible:outline-none" selected={startDates} onChange={(date) => setStartDates(date)} />
                                </div>
                            </div>
                            <input className="btn w-full mt-4" type="submit" value="Create" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;
