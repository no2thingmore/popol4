import './createevt.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateEvt() {

    const API_URL = 'http://168.126.242.77:8080';


    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    const [status, setStatus] = useState(''); // 진행상태
    const [image, setImage] = useState(null); // 이미지

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('status', status);
        if (image) {
            formData.append('image_url', image);
        }
        
        try {
            const response = await axios.post(`${API_URL}/event/admin`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('이벤트 등록되었습니다', response.data);
        } catch (err) {
            console.error('등록 에러', err);
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
                            <label htmlFor="status0" className="KJH_com_input_left">신규</label>
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
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className='KJH_create-evt_file_upload'
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className='KJH_create-evt_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default CreateEvt;