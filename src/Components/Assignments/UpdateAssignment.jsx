import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const UpdateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [deficulty, setDificulty] = useState("easy");

    const dificultyBtn = (e) => {
        setDificulty(e.target.value);
    };

    const updateAssignment = (e) => {
        e.preventDefault();
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
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="text" placeholder="Title..." name="title" required />
                                </div>
                                <div>
                                    <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="number" placeholder="Marks..." name="marks" required />
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

export default UpdateAssignment;
