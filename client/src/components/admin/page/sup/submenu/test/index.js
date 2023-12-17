import './test.css';
import React, { useState } from 'react';

function Test() {

    // 상태를 사용하여 선택된 값을 저장
    const [status, setStatus] = useState('');

    // 라디오 버튼이 변경될 때 호출되는 핸들러
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
            <div className='KJH_comment_section'>
                <div className='KJH_com_route'>
                    답변관리
                </div>
                <div className='KJH_com_title_section'>
                    <div className='KJH_com_type_input'>
                        <span className='KJH_com_type'>
                            <select>
                                <option value="1">기타</option>
                                <option value="2">사이트이용</option>
                                <option value="3">포인트</option>
                                <option value="4">제품</option>
                                <option value="5">매장이용</option>
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
                    </div>
                </div>
                <div className='KJH_com_content_section'>
                    내용
                </div>
                <form className='KJH_com_comment_section'>
                    <label>
                        답변 칸
                    </label>
                </form>
            </div>
        </>
    )
}

export default Test;