import './comment.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import QMenus from './data/QMenu';
import SubTemplate from '../../../sub_template';
import Header from '../../../../../header';



function Comment() {

    const API_URL = 'http://168.126.242.77:8080';
    const { id, type } = useParams();
    const [commentData, setCommentData] = useState([]);
    const ComData = commentData && commentData;
    const [tags, setTags] = useState(ComData.tags);
    const [status, setStatus] = useState(ComData.status);
    const [comment, setComment] = useState(ComData.comment || '답변을 작성해주세요.');
    const [menu, setMenu] = useState(type);

    const handleTagsChange = (event) => setTags(event.target.value);
    const handleStatusChange = (event) => setStatus(event.target.value);
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    const handleMenuClick = (selectedMenu) => setMenu(selectedMenu);

    const fetchCommentData = async () => {
        try {
            const res = await axios.get(`${API_URL}/inquiry/detail/`, { params: { id } });
            setCommentData(res.data);
            // console.log(res.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleSubmit = async () => {
        try {
            const updatedData = {id, tags, status, comment }; // 데이터수정 | 종류, 상태, 댓글
            await axios.patch(`${API_URL}/inquiry/admin`, updatedData);
            console.log('수정 완료')
        } catch (err) {
            console.error('수정 에러', err);
        }
    };

    useEffect(() => {
        fetchCommentData();
    }, [id]);

    useEffect(() => {
        if (ComData) {
            setTags(ComData.tags);
            setStatus(ComData.status);
            setComment(ComData.comment);
        }
    }, [ComData]);

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

    // 종류 변환
    const tagsMapping = {
        '0': '기타',
        '1': '사이트이용',
        '2': '포인트',
        '3': '제품',
        '4': '매장이용'
    };

    return (
        <div className=''>
            <div>
                <Header menu={menu} setMenu={setMenu} />
            </div>
            <div className="admin_tagBox">
                <nav>
                    <ul className="admin_tags">
                    {QMenus.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={menu === item.name ? "active" : "noactive"}
                                onClick={() => handleMenuClick(item.name)}
                                >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <SubTemplate />
            <div className='KJH_comment_section'> 
                <div className='KJH_comment_width'>
                    <span className='KJH_com_route'>
                        <div>답변관리</div>
                        <div className='KJH_com_btn_section'>
                            <Link to='/admin/support/inquiry'>
                                <div className='KJH_com_btn_comple' onClick={handleSubmit}>
                                    수정하기
                                </div>
                            </Link>
                            <Link to='/admin/support/inquiry'>
                                <div className='KJH_com_btn_back'>
                                    뒤로가기
                                </div>
                            </Link>
                        </div>
                    </span>
                    <div className='KJH_com_title_section'>
                        <div className='KJH_com_type_input'>
                        <span className='KJH_com_type'>
                            <select value={tags} onChange={handleTagsChange}>
                                {Object.entries(tagsMapping).map(([key, value]) => (
                                    <option key={key} value={key}>{value}</option>
                                ))}
                            </select>
                        </span>
                        <span>
                        <input 
                            type="radio" 
                            id="status0" 
                            name="status" 
                            value="0"
                            checked={status === '0'} // 문자열 비교
                            onChange={handleStatusChange} />
                        <label htmlFor="status0" className="KJH_com_input_left">대기</label>
                        <input 
                            type="radio" 
                            id="status1" 
                            name="status" 
                            value="1" 
                            checked={status === '1'} // 문자열 비교
                            onChange={handleStatusChange} />
                        <label htmlFor="status1">완료</label>
                        </span>
                        </div>
                        <div className='KJH_com_title'>
                            {ComData.title}
                        </div>
                        <div className='KJH_com_id_section'>
                            <span>ID : {ComData.id}</span>
                            <span>작성일 : {formatDate(ComData.createdAt)}</span>
                        </div>
                    </div>
                    <div className='KJH_com_content_section'>
                        {ComData.content}
                    </div>
                    <div className='KJH_com_comment_section'>
                        <textarea
                            className='KJH_com_comment_input'
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <span className='KJH_com_comment_created'>답변 일 : {formatDate(ComData.updatedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;