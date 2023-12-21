import './updatefaq.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateFAQ() {
    
    const API_URL = 'http://168.126.242.77:8080';

    const location = useLocation();
    // console.log(location.state);
    const faqId = location.state.id;

    const [faqListData, setFaqListData] = useState([]);
    const FaqData = faqListData && faqListData;

    const [tags, setTags] = useState(FaqData.tags);
    const [title, setTitle] = useState(FaqData.title);
    const [content, setContent] = useState(FaqData.content);

    const handleTagsChange = (e) => setTags(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);


    // FAQ 데이터 가져오기
    const fetchFaqData = async () => {
        try {
            const res = await axios.get(`${API_URL}/faq/update`,{params:{id:faqId}});
            setFaqListData(res.data);
            console.log('데이터가 조회되었습니다')
            console.log(res.data);
        } catch (err) {
            console.error('FAQ 데이터 오류')
        }
    }
    useEffect(() => {
        if (!faqId) {
            console.error("FAQ ID를 가져오지 못하였습니다");
        } else {
            fetchFaqData();
        }
    }, [faqId]);
    


    // 수정하기 | 데이터 : 종류, 제목, 내용
    const handleSubmit = async () => {
        try {
            const updateData = { faqId, tags, title, content };
            await axios.patch(`${API_URL}/faq/admin`, updateData);
            console.log('FAQ 수정이 완료되었습니다.')
        } catch (err) {
            console.error('수정 에러', err);
        }
    };

    useEffect(() => {
        if (faqListData) {
            setTags(faqListData.tags);
            setTitle(faqListData.title);
            setContent(faqListData.content);
        }
    }, [faqListData]);
    

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
                    
                    <div className='KJH_updatefaq_title_section'>
                        <div className='KJH_updatefaq_type_input'>
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
                    <button onClick={handleSubmit} type="submit" className='KJH_updatefaq_data_submit'>수정하기</button>
                </div>
            </div>
        </>
    )
}

export default UpdateFAQ;