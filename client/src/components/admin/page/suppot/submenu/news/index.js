import './news.css';
import SubTemplate from "../../sub_template";

function News(){
    return (
        <>
            {/* 서브메뉴 템플릿 */}
            <SubTemplate />
            <div className='KJH_news_section'>
                공지 페이지
            </div>
        </>
    )
}

export default News;