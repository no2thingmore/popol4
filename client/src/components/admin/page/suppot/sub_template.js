import './sub_template.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownIcon from './icon/dropdown.png';

function SubTemplate(){

    // 문의사항 관리 드롭다운 상태관리
    const [inquiryDropdown, setInquiryDropdown] = useState(false);
    // 문의사항 관리 아이콘 회전 상태관리
    const [inquiryIconRotation, setInquiryIconRotation] = useState(false);

    // 게시판 관리 드롭다운 상태관리
    const [hubDropdown, setHubDropdown] = useState(false);
    // 게시판 관리 아이콘 회전 상태관리
    const [hubIconRotation, setHubIconRotation] = useState(false);


    // 문의사항 관리 토글 형식
    const toggleInquiryDropdown = () => {
        setInquiryDropdown(!inquiryDropdown);
        setInquiryIconRotation(!inquiryIconRotation);
    };

    // 게시판 관리 토글 형식
    const toggleHubDropdown = () => {
        setHubDropdown(!hubDropdown);
        setHubIconRotation(!hubIconRotation);
    };

    return (
        <>
            {/* 서브 메뉴 리스트 전체 */}
            <div className='KJH_adm_sub_section'>
                {/* 서브 메뉴 title */}
                <div className='KJH_adm_sub_header_section'>
                    <div className='KJH_adm_sub_header_info'>
                        고객지원
                    </div>
                </div>
                {/* 서브 메뉴 리스트 */}
                <div className='KJH_adm_sub_list_section'>
                    {/* 문의사항 관리 section */}
                    <div className='KJH_adm_sub_list_inquiry_section'>
                        <div className={`KJH_sub_list_title ${inquiryIconRotation ? "rotate" : ""}`} onClick={toggleInquiryDropdown}>
                            <img src={DropdownIcon} alt='dropdown'/><span>문의사항 관리</span>
                        </div>
                        {inquiryDropdown && (
                            <>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/support-inquiry">문의 내역</Link>
                                    </div>
                                </div>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/support-res">응답 관리</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    {/* 게시판 관리 section */}
                    <div className='KJH_adm_sub_list_Hub_section'>
                        <div className={`KJH_sub_list_title ${hubIconRotation ? "rotate" : ""}`} onClick={toggleHubDropdown}>
                            <img src={DropdownIcon} alt='dropdown'/><span>게시판 관리</span>
                        </div>
                        {hubDropdown && (
                            <>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/support-event">이벤트</Link>
                                    </div>
                                </div>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/support-news">공지사항</Link>
                                    </div>
                                </div>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/support-faq">FAQ</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubTemplate;