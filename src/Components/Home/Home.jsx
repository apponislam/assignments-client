import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import AssignmentCard2 from "./AssignmentCard2";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const assignments = useLoaderData();
    const someAssignment = assignments.slice(0, 6);

    return (
        <div>
            <Helmet>
                <title>Appon Assignment Library</title>
            </Helmet>
            <Slider></Slider>
            <div className="container md:mx-auto">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">Assignments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                    {someAssignment.map((assignment) => (
                        <AssignmentCard2 key={assignment._id} assignment={assignment}></AssignmentCard2>
                    ))}
                </div>
            </div>
            <div className="container md:mx-auto">
                <h1 className="text-2xl md:text-4xl text-center my-12 font-extrabold">FAQs</h1>

                <div className="flex items-center justify-center flex-col mb-10">
                    <div className="px-3 md:px-0 w-full md:w-1/2 gap-4 flex flex-col">
                        <div className="w-auto collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">How do I submit my website assignment?</div>
                            <div className="collapse-content">
                                <p>You can submit your website assignment by insert submission method here, e.g., uploading files to a specific platform, sharing a link via email, etc.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What should be included in my website submission?</div>
                            <div className="collapse-content">
                                <p>Your submission should include all necessary files and assets required to view and interact with your website. This typically includes HTML, CSS, JavaScript, images, and any other relevant files.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Is there a preferred file format for submission?</div>
                            <div className="collapse-content">
                                <p>We prefer that you submit your website in a compressed file format (e.g., ZIP or RAR) to ensure all files are organized and easily accessible.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Can I submit multiple versions of my website?</div>
                            <div className="collapse-content">
                                <p>While we encourage you to iterate on your designs, please submit only the final version of your website for evaluation. If you have multiple iterations, you may include them in your submission folder for reference.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do I need to include documentation or a README file?</div>
                            <div className="collapse-content">
                                <p>Yes, please include a README file with your submission that provides an overview of your website, any special features or functionalities, instructions for navigating the site, and any other relevant information.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What are the criteria for evaluation?</div>
                            <div className="collapse-content">
                                <p>Your website will be evaluated based on criteria such as design aesthetics, user experience, functionality, responsiveness, code quality, and adherence to assignment guidelines. Please review the assignment rubric for specific evaluation criteria.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">When is the deadline for submission?</div>
                            <div className="collapse-content">
                                <p>The submission deadline for the website assignment is [insert deadline date and time here]. Late submissions may incur penalties, so please ensure you submit your assignment on time.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border bg-transparent rounded-none border-green-600">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Who should I contact if I have questions about the assignment or submission process?</div>
                            <div className="collapse-content">
                                <p>If you have any questions or need clarification about the assignment or submission process, please reach out to [insert contact information here, e.g., your instructor or TA].</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
