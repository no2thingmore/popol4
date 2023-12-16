import './inquiry.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../config/contansts';;

function Inquiry() {
    
    const [inquiries, setInquiries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 10;

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
    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await axios.get(`${API_URL}/inquiry`);
                setInquiries(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchInquiries();
    }, []);

    // 페이지 계산
    const firstPostIndex = (currentPage - 1) * pageLimit;
    const lastPostIndex = currentPage * pageLimit;
    const displayedPosts = inquiries.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                                <tr key={item.id} className='KJH_inq_contents_section'>
                                    <td className='KJH_inq_contents_id'>{item.id}</td>
                                    <td className='KJH_inq_contents_kind'>{tagsMapping[item.tags.toString()] || '알 수 없음'}</td>
                                    <td className='KJH_inq_contents_title'>{item.title}</td>
                                    <td className='KJH_inq_contents_created'>{formatDate(item.createdAt)}</td>
                                    <td className='KJH_inq_contents_ctrl'>
                                        <span>답변</span>
                                        <span>삭제</span>
                                    </td>
                                    <td className={`KJH_inq_contents_status ${item.status === 0 || item.status === '0' ? 'status-waiting' : 'status-completed'}`}>
                                        {statusMapping[item.status.toString()] || '알 수 없음'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                </div>
                </div>
            </div>
        </>
    )
}

export default Inquiry;
