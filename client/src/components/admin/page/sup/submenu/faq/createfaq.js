import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateFAQ() {
    
    const [types, setTypes] = useState([]);

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

    const typesMapping = {
        '0': 'All',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    const handleTypesChange = (e) => setTypes(e.target.value);

    return (
        <>
            <div className='KJH_comment_section'> 
                <div className='KJH_comment_width'>
                    <span className='KJH_com_route'>
                        <div>FAQ 등록하기</div>
                        <div className='KJH_com_btn_section'>
                            <Link to='/admin/support/faq'>
                                <div className='KJH_com_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    
                    <div className='KJH_com_title_section'>
                        <div className='KJH_com_type_input'>
                        <span className='KJH_com_type'>
                            <select value={types} onChange={handleTypesChange}>
                                {Object.entries(typesMapping).map(([key, value]) => (
                                    <option key={key} value={key}>{value}</option>
                                ))}
                            </select>
                        </span>
                        </div>
                        <div className='KJH_com_title'>
                            제목 입력 칸
                        </div>
                        <div className='KJH_com_id_section'>
                            <span>작성일 : {/* {formatDate(ComData.createdAt)} */}</span>
                        </div>
                    </div>
                    <div className='KJH_com_content_section'>
                        Q 작성 칸 - Questions
                    </div>
                    <div className='KJH_com_content_section'>
                        A 작성 칸 - Asked
                    </div>
                    <div>
                        등록하기
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateFAQ;