import './createevt.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateEvt() {

    const API_URL = 'http://168.126.242.77:8080';


    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    // 진행기간
    const [status, setStatus] = useState([]); // 진행상태

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);

    const handleSubmit = async () => {
        try {
            const createData = { admin_id:1, title, content, status };
            await axios.post(`${API_URL}/event/admin`, createData);
            console.log('이벤트 등록이 완료되었습니다');
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
                            {/* 제목 입력 란 */}
                            <span className='KJH_create-evt_make_title_line'>
                                <textarea
                                    className='KJH_create-evt_make_title_info'
                                    value={title}
                                    placeholder='제목을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </span>
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
                    <button onClick={handleSubmit} type="submit" className='KJH_create-evt_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default CreateEvt;