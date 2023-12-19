import Inquiry from ".";
import SubTemplate from "../../sub_template";
import { useParams } from "react-router-dom";
import Comment from "./comment";

function Com() {
    const { id } = useParams();
    return (
        <>
            <SubTemplate />
            {id === "/:id" && <Comment />}
        </>
    )
}

export default Com;