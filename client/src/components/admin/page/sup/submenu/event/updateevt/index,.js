import './updateevt.css';
import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateEvt() {

    const API_URL = 'http://168.126.242.77:8080';
    const navigate = useNavigate();

    const location = useLocation();
    const evtId = location.state.id;

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [status, setStatus] = useState();

    const [imageUrl, setImageUrl] = useState(null); // 이미지
    const [isUploading, setIsUploading] = useState(false); // 업로드 추적

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleStatusChange = (e) => setStatus(e.target.value);

    // 이벤트 데이터 요청
    const fetchEvtData = async () => {
        try {
            const res = await axios.get(`${API_URL}/event/update`,{params:{id:evtId}});
            setTitle(res.data.title);
            setContent(res.data.content);
            setStatus(res.data.status);
            setImageUrl(res.data.image_url);
            console.log('해당 이벤트 데이터를 불러왔습니다');
        } catch (err) {
            console.error('이벤트 조회 오류');
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

    // 이벤트 수정하기 | 수정데이터 : 제목, 내용, 진행상태, 이미지
    const EditEvent = async (e) => {
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
                .patch(`${API_URL}/event/admin`, {
                    admin_id:1,
                    id: evtId,
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
                    <form onSubmit={EditEvent}>
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
                                <label htmlFor="status0" className="KJH_com_input_left">진행중</label>
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
                            <Upload
                                name="image"
                                action={`${API_URL}/image`}
                                listType="picture"
                                showUploadList={false}
                                onChange={onChangeImage}
                            >
                            {imageUrl && <div className="KJH_update-evt_image-url">이미지 : {imageUrl}</div>}
                            </Upload>
                        </div>
                        <button type="submit" className='KJH_update-evt_data_submit'>등록하기</button>
                    </form>
                </div>  
            </div>
        </>
    )
}

export default UpdateEvt;