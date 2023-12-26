import './updatenews.css'
import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateNews() {

    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const location = useLocation();
    const newsId = location.state.id;

    const [newsListData, setNewsListData] = useState([]);
    const NewsData = newsListData && newsListData;

    const [title, setTitle] = useState(NewsData.title);
    const [content, setContent] = useState(NewsData.content);

    const [imageUrl, setImageUrl] = useState(null); // 이미지
    const [isUploading, setIsUploading] = useState(false); // 업로드 추적

    const [currentDate, setCurrentDate] = useState(new Date());

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

    // 공지사항 데이터 가져오기
    const fetchNewsData = async () => {
        try {
            const res = await axios.get(`${API_URL}/board/news`,{params:{id:newsId}});
            setNewsListData(res.data);
            setImageUrl(res.data.image_url);
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

    // 공지사항 수정 | 수정데이터 : 제목, 내용, 이미지
    const EditNews = async (e) => {
        e.preventDefault();
        if (
            title === "" ||
            content === "" ||
            imageUrl === ""
        ) {
            alert("빈칸없이 전부 채워주세요")
        } else {
            await axios
                .patch(`${API_URL}/board/admin`, {
                    admin_id:1,
                    id:newsId,
                    title: title,
                    content: content,
                    image_url: imageUrl,
                })
                .then(() => {
                    console.log("수정되었습니다");
                    navigate("/admin/support/news");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log("수정 실패");
                    console.error(err);
                });
        }
    };
    useEffect(() => {
        if (newsListData) {
            setTitle(newsListData.title);
            setContent(newsListData.content);
            setImageUrl(newsListData.image_url);
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
                    <form onSubmit={EditNews}>
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
                            <Upload
                                name="image"
                                action={`${API_URL}/image`}
                                listType="picture"
                                showUploadList={false}
                                onChange={onChangeImage}
                            >
                            {imageUrl && <div className="KJH_update-news_image-url">이미지 : {imageUrl}</div>}
                            </Upload>
                        </div>
                        <button type="submit" className='KJH_update-news_data_submit'>수정하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateNews;