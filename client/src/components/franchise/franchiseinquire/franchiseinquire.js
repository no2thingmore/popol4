import "./franchiseinq.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ask_Data from './data/ask_data';
import Submit_Data from './data/submit_data';
import axios from 'axios';  // axios 추가
import { API_URL } from "../../config/contansts";


function FranchiseInquire() {

  const rendertext = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
  };

  const [checkedState, setCheckedState] = useState(
    Ask_Data.reduce((acc, item) => {
        acc[item.id] = false;
        return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedState({
        ...checkedState,
        [id]: !checkedState[id],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
    };

    try {
      const response = await axios.post(`${API_URL}/store/admin`, formData);
      console.log("데이터 전송 성공:", response.data);
      // 성공적으로 전송되면 필요한 처리 수행
      window.alert("문의 등록이 완료되었습니다.");

    } catch (error) {
      console.error("데이터 전송 실패:", error);
      // 전송 실패 시에 필요한 처리 수행
    }
  };

  return (
    <div className='kk_help_container1'>
      <div className='kk_ask_all1'>
        <div className='kk_ask_section'>
          <div className='kk_ask_title'>
              가맹신청 · 문의
          </div>
          <div className='kk_ask_gre_all'>
            <div className='kk_ask_agree_section'>
              {Ask_Data.map((ask, index) => (
                <div key={ask.id} className={`kk_ask_agree_left_section
                  ${index === Ask_Data.length - 1 ? 'last-element' : ''}`}>
                    <div className='kk_ask_agree_left_title'>
                        {ask.title}
                    </div>
                    <div className='kk_ask_agree_left_info'>
                      <div className='kk_ask_agree_left_info_section'>
                        {rendertext(ask.text)}
                      </div>
                    </div>
                    <div className='kk_ask_agree_checkbox_section'>
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${ask.id}`}
                        className="kk_checkbox-custom"
                        checked={checkedState[ask.id]}
                        onChange={() => handleCheckboxChange(ask.id)}
                      />
                      <label htmlFor={`custom-checkbox-${ask.id}`} className="checkbox-custom-label"></label>
                        {ask.check} 
                      <span className='kk_check_ess1'>  
                        &nbsp;(필수)
                      </span>
                    </div>
                  </div>
              ))}
            </div>
            <div className='kk_ask_btm_section'>
              <div className='kk_ask_btm_title'>
                문의 작성하기
              </div>
              <div className='kk_ask_btm_title_right'>
                필수입력사항
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <table className='kk_ask_btm_table'>
                <caption>문의 작성하기 테이블</caption>
                <colgroup>
                    <col width="130px" />
                    <col width="*" />
                </colgroup>
                  {Submit_Data.map((item) => (
                    <tbody key={item.id}>
                      <tr scopte="col">
                        <th scope="col">
                          {item.title}
                        </th>
                        <td>
                          <span className='kk_form_text' style={{ width: '100%' }}>
                            {item.type === 'textarea' ? (
                              <textarea
                                id={item.input_id}
                                name={item.name}
                                placeholder={item.holder}
                                className='kk_form_textarea'
                              />
                            ) : (
                            <input
                              id={item.input_id}
                              name={item.name}
                              placeholder={item.holder}
                              type={item.type}
                            />
                            )}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
              <div className="jj_ask_alart0">
                <div className="jj_ask_alart">
                  <div className="jj_ask_alart_1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                  </div>
                  <div className="jj_ask_alart_2">
                    <p>· 문의가 집중되거나 주말의 경우 답변이 지연될 수 있습니다. 최대한 빠르게 답변 드리도록 하겠습니다.</p>
                    <p>· 욕설, 비속어, 비방성 등의 부적절한 단어 포함되어 있는 경우, 답변 진행이 어려울 수 있습니다.</p>
                  </div>
                </div>
              </div>
              <div className='kk_ask_btm_btn_sction'>
                <a href ="/franchise/subwayfranchise" className='kk_ask_btm_btn_cancel'>
                  <span>취소</span>
                </a>
                <button type="submit" className='kk_ask_btm_btn_reg'>
                  <span>등록하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseInquire;