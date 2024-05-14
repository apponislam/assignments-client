import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
    const markAssignment = useLoaderData();
    const { _id, note, document, marks } = markAssignment;
    console.log(markAssignment);
    const navigate = useNavigate();

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
        if (yougot > marks) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Mark Can't bigger than assignment marks",
            });
            return;
        }
        const feedback = form.feedback.value;
        const status = true;
        const reviewed = { yougot, feedback, status };
        console.log(reviewed);
        fetch(`https://assignment-server-wheat.vercel.app/submitted/${_id}`, {
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
                    navigate("/mySubmit");
                }
            });
    };

    return (
        <div className="container mx-auto">
            <div className="my-10 md:my-20 mx-3 md:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="mb-2">
                            Total Marks: <span className="font-bold">{marks}</span>
                        </p>
                        <p className="mb-10">
                            Note by user: <span className="font-bold">{note}</span>
                        </p>

                        <div className="flex flex-col w-full border border-green-600 shadow-lg rounded-2xl">
                            <div className="p-5 border-b border-green-600">
                                <h1 className="text-center font-semibold text-2xl md:text-3xl">Submit your assignment</h1>
                            </div>
                            <div className="p-4">
                                <form onSubmit={markSubmitBtn}>
                                    <div className="gap-4 grid grid-cols-1">
                                        <div>
                                            <input className="w-full bg-transparent border-b p-3 focus-visible:outline-none border-green-600" type="number" placeholder="Give mark..." name="newMark" required />
                                        </div>
                                        <div>
                                            <textarea className="w-full bg-transparent border-b p-3 focus-visible:outline-none h-32 border-green-600" type="text" placeholder="Feedback..." name="feedback" required />
                                        </div>
                                    </div>
                                    <input className="btn w-full mt-4 bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white" type="submit" value="Submit" />
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
