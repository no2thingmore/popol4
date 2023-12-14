import './event.css';
import SubTemplate from "../../sub_template";

function Event(){
    return (
        <>
            {/* 서브메뉴 템플릿 */}
            <SubTemplate />
            <div className='KJH_event_section'>
                이벤트 페이지
            </div>
        </>
    )
}

export default Event;