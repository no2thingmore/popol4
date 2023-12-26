import './createnews.css'
import React, { useState, useEffect } from 'react';
import { Upload } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateNews() {

    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용

    const [imageUrl, setImageUrl] = useState(null); // 이미지
    const [isUploading, setIsUploading] = useState(false); // 업로드 추적

    const [currentDate, setCurrentDate] = useState(new Date()); // 시간 업데이트

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

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

    // 이미지 상태관리
    const onChangeImage = (info) => {
        if (info.file.status === "uploading" && !isUploading) {
            console.log("업로드중");
            setIsUploading(true);
        } else if (info.file.status === "done") {
            console.log("업로드 성공", info.file.response);
            // 서버로부터 반환된 이미지 URL을 저장
            const imageUrl = info.file.response?.imageUrl;
            if (imageUrl) {
                setImageUrl(imageUrl);
            } else {
                console.error("응답에서 imageUrl을 찾을 수 없음");
            }
            setIsUploading(false);
        }
    };

    // 공지사항 등록
    const PlusNews = async (e) => {
        e.preventDefault();
        if (
            title === "" ||
            content === "" ||
            imageUrl === ""
        ) {
            alert("빈칸없이 전부 채워주세요")
        } else {
            await axios
                .post(`${API_URL}/board/admin`, {
                    admin_id:1,
                    title: title,
                    content: content,
                    image_url: imageUrl,
                })
                .then(() => {
                    console.log("성공");
                    navigate("/admin/support/news");
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
                    <form onSubmit={PlusNews}>
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
                            <Upload
                                name="image"
                                action={`${API_URL}/image`}
                                listType="picture"
                                showUploadList={false}
                                onChange={onChangeImage}
                            >
                                {imageUrl ? (
                                    <div className="KJH_create-news_image-url">{imageUrl}</div>
                                ) : (
                                    <div className="KJH_create-news_image-url">사진 등록</div>
                                )}
                            </Upload>
                        </div>
                        <button type="submit" className='KJH_create-news_data_submit'>등록하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNews;