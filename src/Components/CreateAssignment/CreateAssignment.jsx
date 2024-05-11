import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../Provider/Provider";
import axios from "axios";
import Swal from "sweetalert2";

const CreateAssignment = () => {
    const { user } = useContext(Context);
    const [startDate, setStartDate] = useState(new Date());
    const [deficulty, setDificulty] = useState("easy");

    const dificultyBtn = (e) => {
        setDificulty(e.target.value);
    };

    const createAssignment = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const description = form.description.value;
        const assignment = { name, email, title, marks, image, description, startDate, deficulty };
        console.log(assignment);
        axios.post("http://localhost:5000/assignments", assignment).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Assignment Added Successfully",
                });
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
                        <form onSubmit={createAssignment}>
                            <div className="gap-4 grid md:grid-cols-2 grid-cols-1">
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="Title..." name="title" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="Marks..." name="marks" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="Image..." name="image" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="Description..." name="description" required />
                                </div>
                                <div>
                                    <select onChange={dificultyBtn} defaultValue={deficulty} className="w-full bg-transparent border-b p-3 focus-visible:outline-none">
                                        <option>easy</option>
                                        <option>medium</option>
                                        <option>hard</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <ReactDatePicker className="w-full bg-transparent border-b p-3 focus-visible:outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />
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

export default CreateAssignment;
