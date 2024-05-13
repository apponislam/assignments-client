import { useLoaderData } from "react-router-dom";

const GiveMark = () => {
    const markAssignment = useLoaderData();
    const { note, document } = markAssignment;

    const isPdf = document.slice(-3) === "pdf";

    let borderClr;
    const lastThreeChars = document.slice(-3);
    if (lastThreeChars === "pdf") {
        borderClr = "border-green-600";
    } else {
        borderClr = "border-red-600";
    }

    return (
        <div className="container mx-auto">
            <div className="my-10 md:my-20">
                <div className="grid grid-cols-2 gap-4">
                    <p>Note: {note}</p>
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
