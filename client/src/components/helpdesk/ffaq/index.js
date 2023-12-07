import React, { useState, useRef, useEffect } from 'react';
import './ffaq.css';
import { Link } from 'react-router-dom';
import FaQ_QM_Data from './data/faq_data';
import FaQ_List from './data/faq_list';

function FFAQ() {

    const rendertext = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const faqPlusRefs = useRef({});

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const [activeItem, setActiveItem] = useState(null);
    const [nextItem, setNextItem] = useState(null);
    const [dropdownHeight, setDropdownHeight] = useState(0); // 드롭다운 높이 상태를 추가함
    const dropdownRefs = useRef(new Map());

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setCurrentPage(1); // 타입을 바꿀 때 페이지를 첫 번째로 리셋
    };

    const [selectedType, setSelectedType] = useState(0); // 모든 타입을 나타내는 0으로 초기화

    const filteredFaQList = selectedType === 0
        ? FaQ_List
        : FaQ_List.filter((item) => item.type === selectedType);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredFaQList.slice(indexOfFirstItem, indexOfLastItem);
    
    const handleTransitionEnd = (id) => {
        if (activeItem === id) {
            setActiveItem(null);
            if (nextItem) {
                setActiveItem(nextItem); // 다음 아이템 열기
                setNextItem(null); // 다음 아이템 상태 초기화
            }
        }
    };
    

    const handleItemClick = (id) => {
        const currentPlusElement = faqPlusRefs.current[id]; // 현재 클릭된 아이템의 plus 요소 참조
        if (activeItem === id) {
            // 드롭다운을 닫음
            setDropdownHeight(0);
            currentPlusElement.classList.remove('active');
            currentPlusElement.classList.add('inactive');
    
            const currentDropdown = dropdownRefs.current.get(id);
            if (currentDropdown) {
                currentDropdown.addEventListener('transitionend', () => handleTransitionEnd(id), { once: true });
            }
        } else {
            // 드롭다운을 엶
            setActiveItem(id);
            currentPlusElement.classList.remove('inactive');
            currentPlusElement.classList.add('active');
        }
    };

    useEffect(() => {
        if (activeItem) {
            const currentDropdown = dropdownRefs.current.get(activeItem);
            if (currentDropdown) {
                setDropdownHeight(currentDropdown.scrollHeight);
            }
        }
    }, [activeItem]);
    
    const totalPages = Math.ceil(filteredFaQList.length / itemsPerPage); // 필터링된 리스트를 기반으로 전체 페이지 수 계산

    return (
        <>
        <div className='jh_faq_help_all'>
            <div className='jh_faq_help_bar'>
                <Link to='/faq'>
                    <div className='jh_faq_help_bar_faq'>
                        FAQ
                        <div className='jh_faq_line_bar'></div>
                    </div>
                    
                </Link>
                <Link to='/qna'>
                    <div className='jh_faq_help_bar_qna'>1:1문의</div>
                </Link>
            </div>
            <div className='jh_faq_help_container'>
                
                <div className='jh_faq_section'>
                    <h2 className='jh_faq_title_name'>
                        FAQ
                    </h2>
                    {/* 타입 선택 버튼 */}
                    <div className='jh_faq_qms_section'>
                            {FaQ_QM_Data.map((qmItem) => (
                                <div key={qmItem.id}
                                    className='jh_qms_info'
                                    onClick={() => handleTypeSelect(qmItem.type)}>
                                    <div className={`jh_faq_qms_text ${selectedType === qmItem.type ? 'selected-text' : ''}`}>
                                        {qmItem.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div className='jh_faq_content'>
                        <div className='jh_faq_info'>
                            <div className='jh_faq_content_info'>
                                <div className='jh_faq_right_content'>
                                    <div className='jh_faq_form_search'>
                                        <form className='jh_searchform'>
                                            <input name='jh_faq_search' placeholder='검색어를 입력하세요' type='text'></input>
                                            <div className='jh_faq_search_img'>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='jh_faq_counts'>
                                    총 {filteredFaQList.length}건의 게시글이 있습니다.
                                </div>
                            </div>
                            <div className='jh_faq_contens_list'>
                            {currentItems.map((item) => (
                                <div key={item.id} 
                                className={`jh_faq_list_info ${activeItem === item.id ? 'active' : ''}`} 
                                onClick={() => handleItemClick(item.id)}
                                style={activeItem === item.id ? { backgroundColor: '#f2f2f2' } : {}}
                                >
                                    <div className='jh_faq_list_section' onClick={() => handleItemClick(item.id)}>
                                        <div className='jh_faq_list_p'>Q</div>
                                        <div className='jh_faq_list_content'>{item.title}</div>
                                        <div ref={(el) => faqPlusRefs.current[item.id] = el} className='jh_faq_list_plus'></div>
                                    </div>
                                    {activeItem === item.id && (
                                    <div className='jh_faq_list_aska'>
                                        <div ref={el => dropdownRefs.current.set(item.id, el)} 
                                        className='jh_faq_dropdown_content' 
                                        style={{ height: activeItem === item.id ? `${dropdownHeight}px` : '0px' }}>
                                            <div className='jh_faq_list_a'>A</div>
                                            <div className='jh_faq_list_ask'>{rendertext(item.text)}</div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            ))}
                                </div>
                            <div className='jh_faq_page_list'>
                                {/* 이전 페이지 버튼 */}
                                {currentPage > 1 && (
                                    <span onClick={() => paginate(currentPage - 1)}>&lt;</span>
                                )}
                                {/* 페이지 번호 렌더링 */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                    <span key={number} 
                                        onClick={() => paginate(number)}
                                        className={currentPage === number ? 'active-page' : ''}>
                                        {number}
                                    </span>
                                ))}
                                {/* 다음 페이지 버튼 */}
                                {currentPage < totalPages && (
                                    <span onClick={() => paginate(currentPage + 1)}>&gt;</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default FFAQ;
