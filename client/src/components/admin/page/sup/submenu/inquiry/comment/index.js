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
    const [status, setStatus] = useState('');
    const [menu, setMenu] = useState(type);

    const handleChange = (event) => setStatus(event.target.value);
    const handleMenuClick = (selectedMenu) => setMenu(selectedMenu);

    const fetchCommentData = async () => {
        try {
            const response = await axios.get(`${API_URL}/inquiry/detail/`, { params: { id } });
            setCommentData(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    useEffect(() => {
        fetchCommentData();
    }, [id]);

    return (
        <>
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
                            <div className='KJH_com_btn_comple'>수정완료</div>
                            <Link to='/admin/support/inquiry'><div className='KJH_com_btn_back'>뒤로가기</div></Link>
                        </div>
                    </span>
                    
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
                        </div>
                        <span className='KJH_com_comment_created'>답변 일 : </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment;