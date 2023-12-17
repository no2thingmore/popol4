import SubTemplate from "./sub_template"
import { useParams } from "react-router-dom";
import Faq from './submenu/faq';
import Inquiry from './submenu/inquiry';
import Event from './submenu/event';
import News from './submenu/news';
import Test from "./submenu/test";


function Sup() {
    const { category } = useParams();
    return (
        <>
            <SubTemplate />
            {category === "faq" && <Faq />}
            {category === "inquiry" && <Inquiry />}
            {category === "event" && <Event />}
            {category === "news" && <News />}
            {category === "test" && <Test />}
        </>
    )
}

export default Sup