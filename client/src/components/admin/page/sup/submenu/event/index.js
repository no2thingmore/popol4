import './event.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../config/contansts';
import { Link } from 'react-router-dom';
import ArrowDown from '../../images/arrowdown.png';
import ArrowUp from '../../images/arrowup.png';

function Event(){

    const [event, setEvnet] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(1); // 페이지변경
    const pageLimit = 10; // 페이지 글 제한
    const [showContents, setShowContents] = useState({});

    // 이벤트 데이터 요청
    const fetchEvent = async () => {
        try {
            const res = await axios.get(`${API_URL}/event`);
            setEvnet(res.data);
            // console.log('이벤트 데이터조회 완료')
            // console.log(res.data);
        } catch (error) {
            // console.log('이벤트 데이터조회 실패')
            console.error(error);
        }
    };
    useEffect(() => {
        fetchEvent();
    }, []);



    // 페이지 계산
    const firstPostIndex = (currentPage - 1) * pageLimit;
    const lastPostIndex = currentPage * pageLimit;
    const displayedPosts = event.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const statusMapping = {
        '0': '진행중',
        '1': '종료'
    };

    // 내용보기 toggle
    const toggleContent = (id) => {
        setShowContents(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    // 활성화된 내용 toggle 모두 닫기
    const closeAllToggles = () => {
        setShowContents({});
    };

    // 내용 모두 열기
    const openAllToggles = () => {
        const allOpen = event.reduce((acc, evnet) => {
            acc[event.id] = true;
            return acc;
        }, {});
        setShowContents(allOpen);
    };

    return (
        <>
            <div className='KJH_evt_section'>
                <div className='KJH_evt_route'>
                    Admin &gt; 고객 지원 &gt; 이벤트
                </div>
                <div className='KJH_evt_info'>
                    <div className='KJH_evt_top_section'>
                        <span className='KJH_evt_top_pos_num_info'>등록된 이벤트</span>
                        <span className='KJH_evt_top_pos_num'>{event.length} 개</span>
                        <span className='KJH_evt_top_toggle_section'>
                            {/* 내용 모두 닫기 */}
                            <button onClick={closeAllToggles} className="KJH_evt_top_close_toggle_section">
                                <img src={ArrowUp} alt='위쪽 화살표' />
                            </button>
                            {/* 내용 모두 열기 */}
                            <button onClick={openAllToggles} className="KJH_evt_top_open_toggle_section">
                                <img src={ArrowDown} alt='아래쪽 화살표' />
                            </button>
                        </span>
                        
                        {/* 페이지 버튼 */}
                        <span className='KJH_evt_top_page_button_section'>
                            {[...Array(Math.ceil(event.length / pageLimit)).keys()].map(number => (
                            <button key={number} onClick={() => handlePageChange(number + 1)}>
                                {number + 1}
                            </button>
                            ))}
                        </span>
                        <Link to="/admin/support/create-evt">
                            <div className='KJH_evt_top_create_faq'>
                                등록하기
                            </div>
                        </Link>
                    </div>
                    <table className='KJH_evt_table_section'>
                        <thead className='KJH_evt_table_thead_section'>
                            <tr className='KJH_evt_title_section'>
                                <th className='KJH_evt_title_kinds'>제목</th>
                                <th>이벤트 기간</th>
                                <th className='KJH_evt_title_ctrl'>관리</th>
                                <th className='KJH_evt_title_status'>진행상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedPosts.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr className='KJH_evt_contents_section' onClick={() => toggleContent(item.id)}>
                                        <td className='KJH_evt_contents_title' >{item.title}</td>
                                        <td className='KJH_evt_contents_date'>이벤트 기간 데이터</td>
                                        <td className='KJH_evt_contents_ctrl'>
                                            <span className='KJH_evt_contents_ans'>
                                            <Link to={`/admin/support/update-evt`}
                                                state={{id:item.id}}
                                            >수정</Link>
                                            </span>
                                            <span className='KJH_evt_contents_del'>삭제</span>
                                        </td>
                                        {/* 상태 state 관리 : 완료 or 대기 */}
                                        <td className={`KJH_evt_contents_status ${item.status === 0 || item.status === '0' ? 'status_evn_ing' : 'status_evn_end'}`}>
                                            {statusMapping[item.status.toString()] || '알 수 없음'}
                                        </td>
                                    </tr>
                                    {showContents[item.id] && (
                                        <>
                                            <tr className='KJH_evt_coment_tr_1st'>
                                                <td colSpan="4" className='KJH_evt_contents_content'>{item.content}</td>
                                            </tr>
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Event;