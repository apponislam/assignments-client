import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const assignment = useLoaderData();
    // console.log(assignment);
    const { _id, image, title, marks, deficulty, name, startDate, description } = assignment;

    const maindate = startDate.slice(0, 10);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>{title} || Appon Assignment Library</title>
            </Helmet>
            <div className="my-10 md:my-20 flex items-center justify-center">
                <div className="border w-full md:w-2/3 border-blue-600 rounded-2xl p-4 md:p-5 mx-3 md:mx-0">
                    <div className="relative">
                        <img className="w-full h-96 object-cover mb-4 rounded-2xl" src={image} alt="" />
                        <p className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-3xl font-bold">{deficulty}</p>
                        <p className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-3xl font-bold">Marks: {marks}</p>
                    </div>
                    <p className="text-2xl">Assignment Name: {title}</p>
                    <p>
                        Created By: <span className="font-bold">{name}</span>
                    </p>
                    <p>
                        Creation Date: <span className="font-bold">{maindate}</span>
                    </p>
                    <p>Description: {description}</p>
                    <div className="flex items-center justify-center mt-4">
                        <Link className="w-1/2" to={`/Submit/${_id}`}>
                            <button className="btn w-full bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Take Assignmnet</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
