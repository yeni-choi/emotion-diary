import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParms] = useSearchParams();

    const id = searchParams.get("id");

    return (
        <div>
            <h1>Edit</h1>
            <p>This is Diary Edit Page.</p>

            <button
                onClick={() => {
                    navigate("/home");
                }}
            >
            Back to Home  
            </button>
        </div>
    );
};

export default Edit;