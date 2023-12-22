import SubTemplate from "./sub_template"
import { useParams } from "react-router-dom";
import Faq from './submenu/faq';
import Inquiry from './submenu/inquiry';
import Event from './submenu/event';
import News from './submenu/news';
import CreateFAQ from "./submenu/faq/createfaq";
import UpdateFAQ from "./submenu/faq/updatefaq";
import CreateEvt from "./submenu/event/createevt/index,";
import UpdateEvt from "./submenu/event/updateevt/index,";

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
            {category === "create-faq" && <CreateFAQ />} {/* FAQ 등록 */}
            {category === "update-faq" && <UpdateFAQ />} {/* FAQ 수정 */}

            {/* 이벤트 */}
            {category === "create-evt" && <CreateEvt />} {/* FAQ 등록 */}
            {category === "update-evt" && <UpdateEvt />} {/* FAQ 등록 */}
        </>
    )
}

export default Sup;