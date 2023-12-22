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

    return (
        <>
            {/* 서브 메뉴 리스트 전체 */}
            <div className='KJH_adm_sub_section'>
                {/* 서브 메뉴 title */}
                <div className='KJH_adm_sub_header_section'>
                    <div className='KJH_adm_sub_header_info'>
                        회원관리
                    </div>
                </div>
                {/* 서브 메뉴 리스트 */}
                <div className='KJH_adm_sub_list_section'>
                    {/* 문의사항 관리 section */}
                    <div className='KJH_adm_sub_list_inquiry_section'>
                        <div className={`KJH_sub_list_title ${inquiryIconRotation ? "rotate" : ""}`} onClick={toggleInquiryDropdown}>
                            <img src={DropdownIcon} alt='dropdown'/><span>이용회원 관리</span>
                        </div>
                        {inquiryDropdown && (
                            <>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/user/nomal">일반회원관리</Link>
                                    </div>
                                </div>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/user/oner">사업자회원관리</Link>
                                    </div>
                                </div>
                                <div className='KJH_sub_list_dropdown'>
                                    <div className='KJH_sub_list_info'>
                                        <Link to ="/admin/user/admin">관리자정보</Link>
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