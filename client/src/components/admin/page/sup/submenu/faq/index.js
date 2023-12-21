import './faq.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../config/contansts';
import { Link } from 'react-router-dom';
import ArrowDown from '../../images/arrowdown.png';
import ArrowUp from '../../images/arrowup.png';

function Faq(){

    const [faq, setFaq] = useState([]);
    // 페이지네이션
    const [currentPage, setCurrentPage] = useState(1); // 페이지변경
    const pageLimit = 10; // 페이지 글 제한
    const [showContents, setShowContents] = useState({});

    // // faq 데이터 요청
    // const fetchFaq = async () => {
    //     try {
    //         await axios.get(`${API_URL}/support/faq`)
    //         .then((res)=>{
    //             setFaq(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((err)=>{
    //             console.error(err);
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchFaq();
    // }, []);

    // 종류 변환
    const tagsMapping = {
        '0': '기타',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    // 페이지 계산
    const firstPostIndex = (currentPage - 1) * pageLimit;
    const lastPostIndex = currentPage * pageLimit;
    const displayedPosts = faq.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
        const allOpen = faq.reduce((acc, inquiry) => {
            acc[inquiry.id] = true;
            return acc;
        }, {});
        setShowContents(allOpen);
    };

    return (
        <>
            <div className='KJH_inq_section'>
                <div className='KJH_inq_route'>
                    Admin &gt; 고객 지원 &gt; FAQ
                </div>
                <div className='KJH_inq_info'>
                    <div className='KJH_inq_top_section'>
                        <span className='KJH_inq_top_pos_num_info'>등록된 FAQ</span>
                        <span className='KJH_inq_top_pos_num'>{faq.length} 개</span>
                        <span className='KJH_inq_top_toggle_section'>
                            {/* 내용 모두 닫기 */}
                            <button onClick={closeAllToggles} className="KJH_inq_top_close_toggle_section">
                                <img src={ArrowUp} alt='위쪽 화살표' />
                            </button>
                            {/* 내용 모두 열기 */}
                            <button onClick={openAllToggles} className="KJH_inq_top_open_toggle_section">
                                <img src={ArrowDown} alt='아래쪽 화살표' />
                            </button>
                        </span>
                        
                        {/* 페이지 버튼 */}
                        <span className='KJH_inq_top_page_button_section'>
                            {[...Array(Math.ceil(faq.length / pageLimit)).keys()].map(number => (
                            <button key={number} onClick={() => handlePageChange(number + 1)}>
                                {number + 1}
                            </button>
                            ))}
                        </span>
                        <Link to="/admin/support/createfaq">
                            <div className='KJH_inq_top_create_faq'>
                                등록하기
                            </div>
                        </Link>
                    </div>
                    <table className='KJH_inq_table_section'>
                        <colgroup>
                            <col style={{width: "150px"}} />
                            <col style={{width: "500px"}} />
                            <col style={{width: "150px"}} />
                        </colgroup>
                        <thead className='KJH_inq_table_thead_section'>
                            <tr className='KJH_inq_title_section'>
                                <th className='KJH_inq_title_kinds'>종류</th>
                                <th className='KJH_inq_title_title'>제목</th>
                                <th className='KJH_inq_title_ctrl'>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedPosts.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr className='KJH_inq_contents_section' onClick={() => toggleContent(item.id)}>
                                        <td className='KJH_inq_contents_kind'>{tagsMapping[item.tags.toString()] || '알 수 없음'}</td>
                                        <td className='KJH_inq_contents_title' >{item.title}</td>
                                        <td className='KJH_inq_contents_ctrl'>
                                            <Link to={`${item.id}`}><span className='KJH_inq_contents_ans'>수정</span></Link>
                                            <span className='KJH_inq_contents_del'>삭제</span>
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

export default Faq;