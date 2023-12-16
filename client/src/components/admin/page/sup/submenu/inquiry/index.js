import './inquiry.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../config/contansts';
import ArrowDown from './arrowdown.png';
import ArrowUp from './arrowup.png';

function Inquiry() {
    
    const [inquiries, setInquiries] = useState([]); // 문의내역
    const [currentPage, setCurrentPage] = useState(1); // 페이지변경
    const pageLimit = 10; // 페이지 글 제한
    const [showContents, setShowContents] = useState({}); // title 의 내용보기
    const [comentInput, setComentInput] = useState({}); // 답변
    const [answers, setAnswers] = useState({}); // 각 문의사항 답변관리

    // 종류 변환
    const tagsMapping = {
        '0': '기타',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };
    // 날짜 형식 변환 함수
    // 예시) 20년 10월 10일 15:30:45
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');

        return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
    };
    const statusMapping = {
        '0': '대기',
        '1': '완료'
    };

    // 데이터 가져오기
    const fetchInquiries = async () => {
        try {
            const response = await axios.get(`${API_URL}/inquiry`);
            setInquiries(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchInquiries();
    }, []);

    // 답변 제출
    const submitAnswer = async (id) => {
        try {
            const response = await axios.patch(`${API_URL}/inquiry/admin`, {
                id: id,
                status: 1,
                comment: answers[id],
                admin_id: 1
            });
            fetchInquiries();
            console.log('답변이 성공적으로 제출되었습니다:', response.data);
        } catch (error) {
            console.error('답변 제출 중 오류가 발생했습니다:', error);
        }
    };

    // 페이지 계산
    const firstPostIndex = (currentPage - 1) * pageLimit;
    const lastPostIndex = currentPage * pageLimit;
    const displayedPosts = inquiries.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 답변 변경 핸들러
    const handleAnswerChange = (id, text) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [id]: text
        }));
    };

    // 내용보기 toggle
    const toggleContent = (id) => {
        setShowContents(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setComentInput(prevState => ({
            ...prevState,
            [id]: !prevState[id] && prevState[id] // showContents가 활성화되면 comentInput도 닫힘
        }));
    };

    // 답변 토글 핸들러
    const toggleComentInput = (id) => {
        setComentInput(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setShowContents(prevState => ({
            ...prevState,
            [id]: true
        }));
    };

    // 활성화된 내용 toggle 모두 닫기
    const closeAllToggles = () => {
        setShowContents({});
    };
    // 내용 모두 열기
    const openAllToggles = () => {
        const allOpen = inquiries.reduce((acc, inquiry) => {
            acc[inquiry.id] = true;
            return acc;
        }, {});
        setShowContents(allOpen);
    };

    

    return (
        <>
            <div className='KJH_inq_section'>
                <div className='KJH_inq_route'>
                    HOME &gt; 문의사항 관리 &gt; 문의 내역
                </div>
                <div className='KJH_inq_info'>
                    <div className='KJH_inq_top_section'>
                        <span className='KJH_inq_top_list'>전체목록</span>
                        <span className='KJH_inq_top_pos_num_info'>문의사항</span>
                        <span className='KJH_inq_top_pos_num'>{inquiries.length} 건</span>
                        <span className='KJH_inq_top_toggle_section'>
                            {/* 내용 모두 닫기 */}
                            <button onClick={closeAllToggles} className="KJH_inq_top_close_toggle_section">
                                <img src={ArrowUp} alt='위쪽 화살표' />
                            </button>
                            {/* 내용 모두 열기 */}
                            <button onClick={openAllToggles} className="KJH_inq_open_all_toggle">
                                <img src={ArrowDown} alt='아래쪽 화살표' />
                            </button>
                        </span>
                        {/* 페이지 버튼 */}
                        <span className='KJH_inq_top_page_button_section'>
                            {[...Array(Math.ceil(inquiries.length / pageLimit)).keys()].map(number => (
                            <button key={number} onClick={() => handlePageChange(number + 1)}>
                                {number + 1}
                            </button>
                            ))}
                        </span>
                    </div>
                    <table className='KJH_inq_table_section'>
                        <colgroup>
                            <col style={{width: "140px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "500px"}} />
                            <col style={{width: "300px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "120px"}} />
                        </colgroup>
                        <thead className='KJH_inq_table_thead_section'>
                            <tr className='KJH_inq_title_section'>
                                <th className='KJH_inq_title_id'>유저 ID</th>
                                <th className='KJH_inq_title_kinds'>종류</th>
                                <th className='KJH_inq_title_title'>제목</th>
                                <th className='KJH_inq_title_created'>등록일</th>
                                <th className='KJH_inq_title_ctrl'>관리</th>
                                <th className='KJH_inq_title_status'>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedPosts.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr className='KJH_inq_contents_section' onClick={() => toggleContent(item.id)}>
                                        <td className='KJH_inq_contents_id'>{item.id}</td>
                                        <td className='KJH_inq_contents_kind'>{tagsMapping[item.tags.toString()] || '알 수 없음'}</td>
                                        <td className='KJH_inq_contents_title' >{item.title}</td>
                                        <td className='KJH_inq_contents_created'>{formatDate(item.createdAt)}</td>
                                        <td className='KJH_inq_contents_ctrl'>
                                        <span onClick={(e) => {
                                            e.stopPropagation();
                                            toggleComentInput(item.id);
                                        }}>답변</span>
                                            <span>삭제</span>
                                        </td>
                                        <td className={`KJH_inq_contents_status ${item.status === 0 || item.status === '0' ? 'status-waiting' : 'status-completed'}`}>
                                            {statusMapping[item.status.toString()] || '알 수 없음'}
                                        </td>
                                    </tr>
                                    {showContents[item.id] && (
                                        <>
                                            <tr className='KJH_inq_coment_tr_1st'>
                                                <td />
                                                <td colSpan="2" className='KJH_inq_contents_content'>{item.content}</td>
                                                <td />
                                                <td />
                                                <td />
                                            </tr>
                                            {comentInput[item.id] && (
                                                <tr className='KJH_inq_coment_tr_2nd'>
                                                    <td />
                                                    <td colSpan="2">
                                                        <textarea 
                                                            placeholder="답변을 작성해주세요." 
                                                            value={answers[item.id] || ''} 
                                                            onChange={(e) => handleAnswerChange(item.id, e.target.value)}
                                                        ></textarea>
                                                        <button onClick={() => submitAnswer(item.id)}>작성</button>
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                </tr>
                                            )}
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

export default Inquiry;
