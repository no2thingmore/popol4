import './updatenews.css'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateNews() {

    const API_URL = 'http://168.126.242.77:8080';

    const location = useLocation();
    const newsId = location.state.id;

    const [newsListData, setNewsListData] = useState([]);
    const NewsData = newsListData && newsListData;

    const [title, setTitle] = useState(NewsData.title);
    const [content, setContent] = useState(NewsData.content);
    const [image, setImage] = useState(NewsData.image_url);
    const [currentDate, setCurrentDate] = useState(new Date());

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

    // 공지사항 데이터 가져오기
    const fetchNewsData = async () => {
        try {
            const res = await axios.get(`${API_URL}/news/update`,{params:{id:newsId}});
            setNewsListData(res.data);
            console.log('해당 공지사항 데이터를 불러왔습니다')
            console.log(res.data);
        } catch (err) {
            console.error('해당 공지사항 데이터를 가져오지 못하였습니다')
            console.error(err);
        }
    }
    useEffect(() => {
        if (!newsId) {
            console.error("이벤트 ID를 가져오지 못하였습니다");
        } else {
            fetchNewsData();
        }
    }, [newsId]);

    // 공지사항 수정 | 수정데이터 : 제목, 내용, 이미지
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        
        // 이미지가 변경되었는지 확인
        if (image && typeof image === 'object') {
            formData.append('image', image);
        }
        try {
            await axios.patch(`${API_URL}/event/admin/${newsId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('공지사항 수정 완료');
        } catch (err) {
            console.error('수정 에러', err);
        }
    };
    useEffect(() => {
        if (newsListData) {
            setTitle(newsListData.title);
            setContent(newsListData.content);
        }
    }, [newsListData]);


    return (
        <>
            <div className='KJH_update-news_section'>
                <div className='KJH_update-news_width'>
                    <span className='KJH_update-news_route'>
                        <div>공지사항 수정</div>
                        <div className='KJH_update-news_btn_section'>
                            <Link to='/admin/support/news'>
                                <div className='KJH_update-news_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    
                    <div className='KJH_update-news_title_section'>
                        <div className='KJH_update-news_type_input'>
                        </div>
                        <div className='KJH_update-news_date_created'>
                        수정일 : {formatDate(currentDate.toISOString())}
                        </div>
                        {/* 제목 입력 란 */}
                        <div className='KJH_update-news_make_title_line'>
                                <textarea
                                    className='KJH_update-news_make_title_info'
                                    value={title}
                                    placeholder='제목을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </div>
                    </div>
                    <div className='KJH_update-news_content_section'>
                        <textarea
                                className='KJH_update-news_make_a_info'
                                value={content}
                                placeholder='내용을 입력해주세요'
                                onChange={handleContentChange}
                                />
                    </div>
                    <div className='KJH_update-news_file_upload_section'>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className='KJH_update-news_file_upload'
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className='KJH_update-news_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default UpdateNews;