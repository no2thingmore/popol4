import './updateevt.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateEvt() {

    const API_URL = 'http://168.126.242.77:8080';

    const location = useLocation();
    const evtId = location.state.id;

    const [evtListData, setEvtListData] = useState([]);
    const EvtData = evtListData && evtListData;

    const [title, setTitle] = useState(EvtData.title);
    const [content, setContent] = useState(EvtData.content);
    const [status, setStatus] = useState(EvtData.status);
    const [image, setImage] = useState(EvtData.image_url);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // FAQ 데이터 가져오기
    const fetchEvtData = async () => {
        try {
            const res = await axios.get(`${API_URL}/event/update`,{params:{id:evtId}});
            setEvtListData(res.data);
            console.log('해당 이벤트 데이터를 불러왔습니다')
            console.log(res.data);
        } catch (err) {
            console.error('해당 이벤트 데이터를 가져오지 못하였습니다')
            console.error(err);
        }
    }
    useEffect(() => {
        if (!evtId) {
            console.error("이벤트 ID를 가져오지 못하였습니다");
        } else {
            fetchEvtData();
        }
    }, [evtId]);

    // 이벤트 수정하기 | 수정데이터 : 제목, 내용, 진행상태, 이미지
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('status', status);
        
        // 이미지가 변경되었는지 확인
        if (image && typeof image === 'object') {
            formData.append('image', image);
        }
    
        try {
            await axios.patch(`${API_URL}/event/admin/${evtId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('이벤트 수정이 완료되었습니다.');
        } catch (err) {
            console.error('수정 에러', err);
        }
    };
    useEffect(() => {
        if (evtListData) {
            setTitle(evtListData.title);
            setContent(evtListData.content);
            setStatus(evtListData.status);
        }
    }, [evtListData]);

    return (
        <>
            <div className='KJH_update-evt_section'> 
                <div className='KJH_update-evt_width'>
                    <span className='KJH_update-evt_route'>
                        <div>이벤트 수정</div>
                        <div className='KJH_update-evt_btn_section'>
                            <Link to='/admin/support/event'>
                                <div className='KJH_update-evt_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    
                    <div className='KJH_update-evt_title_section'>
                        <div className='KJH_update-evt_type_input'>
                            <div>
                            <input 
                                type="radio" 
                                id="status0" 
                                name="status" 
                                value="0"
                                checked={status === '0'} // 문자열 비교
                                onChange={handleStatusChange} />
                            <label htmlFor="status0" className="KJH_com_input_left">신규</label>
                            <input 
                                type="radio" 
                                id="status1"
                                name="status" 
                                value="1" 
                                checked={status === '1'} // 문자열 비교
                                onChange={handleStatusChange} />
                            <label htmlFor="status1">종료</label>
                            </div>
                        </div>
                        {/* 제목 입력 란 */}
                        <div className='KJH_update-evt_make_title_line'>
                                <textarea
                                    className='KJH_update-evt_make_title_info'
                                    value={title}
                                    placeholder='제목을 입력해주세요'
                                    onChange={handleTitleChange}
                                />
                            </div>
                    </div>
                    <div className='KJH_update-evt_content_section'>
                        <textarea
                                className='KJH_update-evt_make_a_info'
                                value={content}
                                placeholder='내용을 입력해주세요'
                                onChange={handleContentChange}
                                />
                    </div>
                    <div className='KJH_update-evt_file_upload_section'>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className='KJH_update-evt_file_upload'
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className='KJH_update-evt_data_submit'>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default UpdateEvt;