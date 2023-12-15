import './inquiry.css';
import SubTemplate from "../../sub_template";
import Customer from './data';

function Inquiry(){
    return (
        <>
            {/* 서브메뉴 템플릿 */}
            <div className='KJH_inq_section'>
                {/* 경로 표시 */}
                <div className='KJH_inq_route'>
                    HOME &gt; 문의사항 관리 &gt; 문의 내역
                </div>
                {/* 문의 내역 관리 전체 */}
                <div className='KJH_inq_info'>
                    <div className='KJH_inq_top_section'>
                        <span className='KJH_inq_top_list'>전체목록</span>
                        <span className='KJH_inq_top_pos_num_info'>문의사항</span>
                        <span className='KJH_inq_top_pos_num'>n 건</span> {/* 데이터 종합해서 건수 계산예정 */}
                        <span className='KJH_inq_top_left_qs_info'>남은 문의</span>
                        <span className='KJH_inq_top_left_qs'>n 건</span>
                        <span className='KJH_inq_top_complete_qs_info'>완료 문의</span>
                        <span className='KJH_inq_top_complete_qs'>n 건</span>
                    </div>
                    <div className='KJH_inq_title_section'>
                        <div className='KJH_inq_title_id'>유저 ID</div>
                        <div className='KJH_inq_title_kinds'>종류</div>
                        <div className='KJH_inq_title_title'>제목</div>
                        <div className='KJH_inq_title_created'>등록일</div>
                        <div className='KJH_inq_title_ctrl'>관리</div>
                        <div className='KJH_inq_title_status'>상태</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquiry;