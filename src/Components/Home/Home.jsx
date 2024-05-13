import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import AssignmentCard2 from "./AssignmentCard2";

const Home = () => {
    const assignments = useLoaderData();
    const someAssignment = assignments.slice(0, 6);
    console.log(someAssignment);

    return (
        <div>
            <Slider></Slider>
            <div className="container md:mx-auto">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">Assignments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                    {someAssignment.map((assignment) => (
                        <AssignmentCard2 key={assignment._id} assignment={assignment}></AssignmentCard2>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
