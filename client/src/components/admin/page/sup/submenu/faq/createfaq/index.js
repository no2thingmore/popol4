import './createfaq.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateFAQ() {
    
    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const [tags, setTags] = useState('');
    const [title, setTitle] = useState('');
    const [kinds, setKinds] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleTagsChange = (e) => setTags(e.target.value);
    const handleKindsChange = (e) => setKinds(e.target.value);

    const typesMapping = {
        '0': '=구분선택=',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    // 이벤트 등록
    const PlusFAQ = async (e) => {
        e.preventDefault();
        if (
            title === "" ||
            content === "" ||
            tags === ""
        ) {
            alert("빈칸없이 전부 채워주세요")
        } else {
            await axios
                .post(`${API_URL}/faq/admin`, {
                    admin_id:1,
                    title: title,
                    content: content,
                    kinds: kinds,
                    tags: tags,
                })
                .then(() => {
                    console.log("성공");
                    navigate("/admin/support/faq");
                    window.location.reload();
                })
                .catch((e) => {
                    console.log("에러");
                    console.error(e);
                });
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
                    <form onSubmit={PlusFAQ}>
                        <div className='KJH_createfaq_title_section'>
                            <div className='KJH_createfaq_title_input'>
                                <input 
                                    type="radio" 
                                    id="kinds" 
                                    name="kinds" 
                                    value="0"
                                    checked={kinds === '0'}
                                    onChange={handleKindsChange} />
                                <label htmlFor="status0" className="KJH_create-faq_input_left">1대1</label>
                                <input 
                                    type="radio" 
                                    id="kinds1"
                                    name="kinds" 
                                    value="1" 
                                    checked={kinds === '1'}
                                    onChange={handleKindsChange} />
                                <label htmlFor="status1">가맹점</label>
                            </div>
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
                        <button type="submit" className='KJH_createfaq_data_submit'>등록하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateFAQ;