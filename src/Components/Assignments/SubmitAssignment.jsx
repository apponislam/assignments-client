import { useLoaderData } from "react-router-dom";

const SubmitAssignment = () => {
    const assignment = useLoaderData();
    console.log(assignment);

    const assignmentSubmitBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const document = form.document.value;
        const note = form.note.value;
        console.log(document, note);
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
