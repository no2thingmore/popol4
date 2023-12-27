import './updatefaq.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateFAQ() {
    
    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const location = useLocation();
    const faqId = location.state.id;

    const [tags, setTags] = useState();
    const [title, setTitle] = useState();
    const [kinds, setKinds] = useState();
    const [content, setContent] = useState();

    const handleTagsChange = (e) => setTags(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleKindsChange = (e) => setKinds(e.target.value);


    // FAQ 데이터 가져오기
    const fetchFaqData = async () => {
        try {
            const res = await axios.get(`${API_URL}/faq/update`,{params:{id:faqId}});
            setTags(res.data.tags);
            setTitle(res.data.title);
            setKinds(res.data.kinds);
            setContent(res.data.content);
            // console.log('해당 FAQ 데이터를 불러왔습니다')
            // console.log(res.data);
        } catch (err) {
            console.error('FAQ 조회 오류')
        }
    }
    useEffect(() => {
        if (!faqId) {
            console.error("해당 FAQ 데이터를 가져오지 못하였습니다");
        } else {
            fetchFaqData();
        }
    }, [faqId]);

    // 이벤트 수정
    const EditFAQ = async (e) => {
        e.preventDefault();
        if (
            title === "" ||
            content === "" ||
            kinds === "" ||
            tags === ""
        ) {
            alert("빈칸없이 전부 채워주세요")
        } else {
            await axios
                .patch(`${API_URL}/faq/admin`, {
                    admin_id:1,
                    faqId: faqId,
                    title: title,
                    content: content,
                    kinds: kinds,
                    tags: tags,
                })
                .then(() => {
                    console.log("해당 FAQ 수정이 완료되었습니다");
                    navigate("/admin/support/faq");
                    window.location.reload();
                })
                .catch((e) => {
                    console.log("에러");
                    console.error(e);
                });
        }
    };

    // 종류 선택
    const tagsMapping = {
        '0': '=구분선택=',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    return (
        <>
            <div className='KJH_updatefaq_section'> 
                <div className='KJH_updatefaq_width'>
                    <span className='KJH_updatefaq_route'>
                        <div>FAQ 수정</div>
                        <div className='KJH_updatefaq_btn_section'>
                            <Link to='/admin/support/faq'>
                                <div className='KJH_updatefaq_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    <form onSubmit={EditFAQ}>
                        <div className='KJH_updatefaq_title_section'>
                            <div className='KJH_updatefaq_type_input'>
                                {/* radio 버튼 */}
                                <div className='KJH_updatefaq_title_input'>
                                    <input 
                                        type="radio" 
                                        id="kinds" 
                                        name="kinds" 
                                        value="0"
                                        checked={kinds === '0'}
                                        onChange={handleKindsChange} />
                                    <label htmlFor="status0" className="KJH_update-faq_input_left">1대1</label>
                                    <input 
                                        type="radio" 
                                        id="kinds1"
                                        name="kinds" 
                                        value="1" 
                                        checked={kinds === '1'}
                                        onChange={handleKindsChange} />
                                    <label htmlFor="status1">가맹점</label>
                                </div>
                            </div>
                            <div className='KJH_updatefaq_q_type_section'>
                                {/* 제목 입력 란 */}
                                <span className='KJH_updatefaq_make_title_line'>
                                    <span className='KJH_updatefaq_question_label'>Q : </span>
                                    <textarea
                                        className='KJH_updatefaq_make_title_info'
                                        value={title}
                                        placeholder='질문을 입력해주세요'
                                        onChange={handleTitleChange}
                                    />
                                </span>
                                {/* 타입 선택 */}
                                <span className='KJH_updatefaq_type'>
                                    <select value={tags} onChange={handleTagsChange}>
                                        {Object.entries(tagsMapping).map(([key, value]) => (
                                            <option key={key} value={key}>{value}</option>
                                        ))}
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className='KJH_updatefaq_content_section'>
                            <span className='KJH_updatefaq_content_a_label'>A :</span>
                            <textarea
                                    className='KJH_updatefaq_make_a_info'
                                    value={content}
                                    placeholder='답변을 입력해주세요'
                                    onChange={handleContentChange}
                                    />
                        </div>
                        <button type="submit" className='KJH_updatefaq_data_submit'>수정하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateFAQ;