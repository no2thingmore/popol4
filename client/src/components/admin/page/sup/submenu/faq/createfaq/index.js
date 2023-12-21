import './createfaq.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateFAQ() {
    
    const API_URL = 'http://168.126.242.77:8080';

    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const typesMapping = {
        '0': '=구분선택=',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    const handleTagsChange = (e) => setTags(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);


    // 등록하기 | 데이터전송 : 관리자 ID, 종류, 제목, 내용
    const handleSubmit = async () => {
        try {
            const createData = { admin_id:1, tags, title, content };
            await axios.post(`${API_URL}/faq/admin`, createData);
            console.log('FAQ 등록이 완료되었습니다.')
        } catch (err) {
            console.error('등록 에러', err);
        }
    };

    return (
        <>
            <div className='KJH_createfaq_section'> 
                <div className='KJH_createfaq_width'>
                    <span className='KJH_createfaq_route'>
                        <div>FAQ 등록하기</div>
                        <div className='KJH_createfaq_btn_section'>
                            <Link to='/admin/support/faq'>
                                <div className='KJH_createfaq_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    
                    <div className='KJH_createfaq_title_section'>
                        <div className='KJH_createfaq_type_input'>
                            {/* 제목 입력 란 */}
                            <span className='KJH_createfaq_make_title_line'>
                                <span className='KJH_createfaq_question_label'>Q : </span>
                                <textarea
                                    className='KJH_createfaq_make_title_info'
                                    value={title}
                                    placeholder='질문을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </span>
                            {/* 타입 선택 */}
                            <span className='KJH_createfaq_type'>
                                <select value={tags} onChange={handleTagsChange}>
                                    {Object.entries(typesMapping).map(([key, value]) => (
                                        <option key={key} value={key}>{value}</option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className='KJH_createfaq_content_section'>
                        <span className='KJH_createfaq_content_a_label'>A :</span>
                        <textarea
                                className='KJH_createfaq_make_a_info'
                                value={content}
                                placeholder='답변을 입력해주세요'
                                onChange={handleContentChange}
                                />
                    </div>
                    <button onClick={handleSubmit} type="submit" className='KJH_createfaq_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default CreateFAQ;