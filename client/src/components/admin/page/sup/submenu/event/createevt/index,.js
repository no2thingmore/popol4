import './createevt.css';
import React, { useState } from 'react';
import { Upload } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateEvt() {

    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    const [status, setStatus] = useState(''); // 진행상태

    const [imageUrl, setImageUrl] = useState(null); // 이미지
    const [isUploading, setIsUploading] = useState(false); // 업로드 추적

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);



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
    
    

    const PlusEvent = async (e) => {
        e.preventDefault();

        if (
            title === "" ||
            content === "" ||
            status === "" ||
            imageUrl === ""
        ) {
            alert("빈칸없이 전부 채워주세요")
        } else {
            await axios
                .post(`${API_URL}/event/admin`, {
                    admin_id:1,
                    title: title,
                    content: content,
                    image_url: imageUrl,
                })
                .then(() => {
                    console.log("성공");
                    navigate("/admin/support/event");
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
            <div className='KJH_create-evt_section'> 
                <div className='KJH_create-evt_width'>
                    <span className='KJH_create-evt_route'>
                        <div>이벤트 등록하기</div>
                        <div className='KJH_create-evt_btn_section'>
                            <Link to='/admin/support/event'>
                                <div className='KJH_create-evt_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    <form onSubmit={PlusEvent}>
                    
                    <div className='KJH_create-evt_title_section'>
                        <div className='KJH_create-evt_type_input'>
                            <div>
                            <input 
                                type="radio" 
                                id="status0" 
                                name="status" 
                                value="0"
                                checked={status === '0'}
                                onChange={handleStatusChange} />
                            <label htmlFor="status0" className="KJH_create-evt_input_left">진행중</label>
                            <input 
                                type="radio" 
                                id="status1"
                                name="status" 
                                value="1" 
                                checked={status === '1'}
                                onChange={handleStatusChange} />
                            <label htmlFor="status1">종료</label>
                            </div>
                        </div>
                        {/* 제목 입력 란 */}
                        <div className='KJH_create-evt_make_title_line'>
                                <textarea
                                    className='KJH_create-evt_make_title_info'
                                    value={title}
                                    placeholder='제목을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </div>
                    </div>
                    <div className='KJH_create-evt_content_section'>
                        <textarea
                                className='KJH_create-evt_make_a_info'
                                value={content}
                                placeholder='내용을 입력해주세요'
                                onChange={handleContentChange}
                                />
                    </div>
                    <div className='KJH_create-evt_file_upload_section'>
                    <Upload
                        name="image"
                        action={`${API_URL}/image`}
                        listType="picture"
                        showUploadList={false}
                        onChange={onChangeImage}
                    >
                        {imageUrl ? (
                            <p>{imageUrl}</p>
                        ) : (
                            <div id="upload-img-placeholder">
                            <br />
                            <span>제품사진을 등록 해주세요.</span>
                            </div>
                        )}
                    </Upload>
                    </div>
                    <button type="submit" className='KJH_create-evt_data_submit'>등록하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEvt;