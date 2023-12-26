import './createnews.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateNews() {

    const API_URL = 'http://168.126.242.77:8080';


    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    const [image, setImage] = useState(null); // 이미지
    const [currentDate, setCurrentDate] = useState(new Date()); // 시간 업데이트

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    // 공지사항 등록
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image_url', image);
        }
        console.log(formData);
        
        try {
            const res = await axios.post(`${API_URL}/board/admin`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('공지사항 등록 완료', res.data);
        } catch (err) {
            console.error('등록 에러', err);
        }
    };

    return (
        <>
            <div className='KJH_create-news_section'>
                <div className='KJH_create-news_width'>
                    <span className='KJH_create-news_route'>
                        <div>공지사항 등록</div>
                        <div className='KJH_create-news_btn_section'>
                            <Link to='/admin/support/news'>
                                <div className='KJH_create-news_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    
                    <div className='KJH_create-news_title_section'>
                        <div className='KJH_create-news_type_input'>
                        </div>
                        <div className='KJH_create-news_date_created'>
                        작성일 : {formatDate(currentDate.toISOString())}
                        </div>
                        {/* 제목 입력 란 */}
                        <div className='KJH_create-news_make_title_line'>
                                <textarea
                                    className='KJH_create-news_make_title_info'
                                    value={title}
                                    placeholder='제목을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </div>
                    </div>
                    <div className='KJH_create-news_content_section'>
                        <textarea
                                className='KJH_create-news_make_a_info'
                                value={content}
                                placeholder='내용을 입력해주세요'
                                onChange={handleContentChange}
                                />
                    </div>
                    <div className='KJH_create-news_file_upload_section'>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className='KJH_create-news_file_upload'
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className='KJH_create-news_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default CreateNews;