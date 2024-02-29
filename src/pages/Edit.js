import { useSearchParams } from "react-router-dom";

const Edit = () => {
    const [searchParams, setSearchParms] = useSearchParams();

    const id = searchParams.get("id");

    return (
        <div>
            <h1>Edit</h1>
            <p>This is Diary Edit Page.</p>
        </div>
    );
};

export default Edit;