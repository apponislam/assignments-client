import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
    const markAssignment = useLoaderData();
    const { _id, note, document } = markAssignment;

    const isPdf = document.slice(-3) === "pdf";

    let borderClr;
    const lastThreeChars = document.slice(-3);
    if (lastThreeChars === "pdf") {
        borderClr = "border-green-600";
    } else {
        borderClr = "border-red-600";
    }

    const markSubmitBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const yougot = form.newMark.value;
        const feedback = form.feedback.value;
        const status = true;
        const reviewed = { yougot, feedback, status };
        console.log(reviewed);
        fetch(`http://localhost:5000/submitted/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewed),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Assignment Reviewed Successfully",
                    });
                }
            });
    };

    return (
        <div className="container mx-auto">
            <div className="my-10 md:my-20">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="mb-10">
                            Note: <span className="font-bold">{note}</span>
                        </p>

                        <div className="flex flex-col w-full border shadow-lg rounded-2xl">
                            <div className="p-5 border-b">
                                <h1 className="text-center font-semibold text-3xl">Submit your assignment</h1>
                            </div>
                            <div className="p-4">
                                <form onSubmit={markSubmitBtn}>
                                    <div className="gap-4 grid grid-cols-1">
                                        <div>
                                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none" type="number" placeholder="Mark..." name="newMark" required />
                                        </div>
                                        <div>
                                            <textarea className="w-full bg-transparent border-b p-3 focus-visible:outline-none h-32" type="text" placeholder="Feedback..." name="feedback" required />
                                        </div>
                                    </div>
                                    <input className="btn w-full mt-4" type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`border ${borderClr}`}>
                        {isPdf ? (
                            <iframe src={document} className="w-full min-h-screen"></iframe>
                        ) : (
                            <div className="w-full min-h-screen flex items-center justify-center">
                                <h1>Invalid Doc Link</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveMark;
