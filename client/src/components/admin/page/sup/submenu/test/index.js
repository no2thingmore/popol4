import './test.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../config/contansts';


function Test() {

    const [commentData, setCommnetData] = useState([]);
    const [status, setStatus] = useState('');

    const tagsMapping = {
        '0': '기타',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    // radio 버튼이 변경될 때 호출되는 핸들러
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    // 데이터 가져오기
    const InqComment = async () => {
        try {
            await axios.get(`${API_URL}/inquiry`)
            .then((res) => {
                setCommnetData(res.data);
                // console.log(res.data);
            })
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        InqComment();
    }, []);

    return (
        <>
            <div className='KJH_comment_section'>
                <div className='KJH_comment_width'>
                    <div className='KJH_com_route'>
                        답변관리
                    </div>
                    <div className='KJH_com_title_section'>
                        <div className='KJH_com_type_input'>
                            <span className='KJH_com_type'>
                                <select>
                                    <option value="0">기타</option>
                                    <option value="1">사이트이용</option>
                                    <option value="2">포인트</option>
                                    <option value="3">제품</option>
                                    <option value="4">매장이용</option>
                                </select>
                            </span>
                            <span>
                                <input 
                                    type="radio" 
                                    id="status0" 
                                    name="status" 
                                    value="0"
                                    checked={status === '0'} 
                                    onChange={handleChange} />
                                <label htmlFor="status0" className="KJH_com_input_left">대기</label>
                                <input 
                                    type="radio" 
                                    id="status1" 
                                    name="status" 
                                    value="1" 
                                    checked={status === '1'}
                                    onChange={handleChange} />
                                <label htmlFor="status1">완료</label>
                            </span>
                        </div>
                        <div className='KJH_com_title'>
                            제목
                        </div>
                        <div className='KJH_com_id_section'>
                            <span>작성자</span>
                            <span>작성날짜</span>
                            <span>작성일</span>
                        </div>
                    </div>
                    <div className='KJH_com_content_section'>
                        내용
                    </div>
                    <div className='KJH_com_comment_section'>
                        <div className='KJH_com_comment_info'>
                            <span className='KJH_com_comment'>
                                답변칸
                            </span>
                            <span className='KJH_com_comment_created'>등록일자</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test;