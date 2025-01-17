import { Helmet } from "react-helmet-async";
import Assignment from "./Assignment";
import { useEffect, useState } from "react";

const Assignments = () => {
    const [assignment1, setAssignment1] = useState([]);
    const [assignment2, setAssignment2] = useState([]);

    useEffect(() => {
        fetch("https://assignment-server-wheat.vercel.app/assignments")
            .then((response) => response.json())
            .then((json) => {
                setAssignment1(json);
                setAssignment2(json);
            });
    }, []);

    const [selectedOption, setSelectedOption] = useState("Difficulty Level");
    const handleChange = (e) => {
        // console.log(e.target.value);
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        const filteredEasyData = assignment1.filter((item) => item.deficulty === "easy");
        const filteredMediumData = assignment1.filter((item) => item.deficulty === "medium");
        const filteredHardData = assignment1.filter((item) => item.deficulty === "hard");
        if (selectedOption == "easy") {
            setAssignment2([...filteredEasyData]);
        } else if (selectedOption == "medium") {
            setAssignment2([...filteredMediumData]);
        } else if (selectedOption == "hard") {
            setAssignment2([...filteredHardData]);
        } else {
            setAssignment2(assignment1);
        }
    }, [selectedOption, assignment1]);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Assignments || Appon Assignment Library</title>
            </Helmet>
            <div className="my-20">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">All Assignments</h1>

                <div className="mx-4 mb-5 flex items-center justify-center">
                    {/* <select className="select select-bordered w-full max-w-xs" value={selectedOption} onChange={handleChange}>
                        <option value="">Customization</option>
                        <option>yes</option>
                        <option>no</option>
                    </select> */}
                    <select className="select select-accent w-full max-w-xs" value={selectedOption} onChange={handleChange}>
                        <option value="">Difficulty Level</option>
                        <option>easy</option>
                        <option>medium</option>
                        <option>hard</option>
                    </select>
                </div>

                <div className="container md:mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                        {assignment2.map((assignment) => (
                            <Assignment key={assignment._id} assignment={assignment} assignment1={assignment1} setAssignment1={setAssignment1} setAssignment2={setAssignment2}></Assignment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;
