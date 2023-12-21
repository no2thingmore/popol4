import SubTemplate from "./sub_template"
import { useParams } from "react-router-dom";
import Faq from './submenu/faq';
import Inquiry from './submenu/inquiry';
import Event from './submenu/event';
import News from './submenu/news';
import CreateFAQ from "./submenu/faq/createfaq";
import UpdateFAQ from "./submenu/faq/updatefaq";

function Sup() {
    const { category } = useParams();
    return (
        <>
            <SubTemplate />
            {category === "faq" && <Faq />}
            {category === "inquiry" && <Inquiry />}
            {category === "event" && <Event />}
            {category === "news" && <News />}

            {/* FAQ  */}
            {category === "createfaq" && <CreateFAQ />} {/* FAQ 등록 */}
            {category === "updatefaq" && <UpdateFAQ />} {/* FAQ 수정 */}
        </>
    )
}

export default Sup;