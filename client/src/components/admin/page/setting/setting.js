import React from "react";
import './setting.css';
import seal_img from './set_img/seal.png';

function Setting(){

  return(
    <div id="set_Main_container">
      <div className="set_location_link"></div>
      <div className="set_content">
        <h1>기본 환경 설정</h1>
        <form className="set_form">
          <div className="set_info">
              <table className="set_table">
                <h2 className="set_table_title">사업자정보</h2>
                <colgroup className="set_colgroup" />
                <tr className="set_tr">
                  <th>사이트명</th>
                  <td>
                    <input type="text" name="site_name" id="site_name_input" value={"써브웨이"} className="form_input"/>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>사이트 영문명</th>
                  <td>
                    <input type="text" name="site_us_name" id="site_us_name_input" value={"SUBWAY"} className="form_input"/>
                  </td>
                </tr>
                <tr className="set_tr">
                <th>사업자 유형</th>
                <td>
                  <label>
                    <input type="radio" name="company_type" value={0} checked="checked" />일반과세자
                  </label>
                  <label>
                    <input type="radio" name="company_type" value={1} />간이과세자
                  </label>
                  <label>
                    <input type="radio" name="company_type" value={2} />면세사업자
                  </label>
                </td>
                </tr>
                <tr className="set_tr">
                  <th>회사명</th>
                  <td>
                    <input type="text" name="company_name" id="company_name_input" value={"써브웨이"} className="form_input"/>
                  <em>세무서에 등록되어 있는 회사명 입력 </em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>대표자명</th>
                  <td>
                    <input type="text" name="company_name" id="company_name_input" value={"G.O.A.T.Joe"} className="form_input"/>
                    <em>예) 홍길동 </em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>사업자등록번호</th>
                  <td>
                    <input type="text" name="company_num" id="company_num_input" value={"000-00-00000"} className="form_input"/>
                    <em>예) 000-00-00000 </em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>업종형태</th>
                  <td>
                    <input type="text" name="company_type" id="company_type_input" value={"요식업"} className="form_input"/>
                    <em>예) 소매업</em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>종목</th>
                  <td>
                    <input type="text" name="company_service" id="company_service_input" value={"혁명적과업"} className="form_input"/>
                    <em>예) 전자상거래업</em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>사업장우편번호</th>
                  <td>
                    <input type="text" name="company_postalCode" id="company_postalCode_input" value={"12345"} className="form_input"/>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>사업장주소</th>
                  <td>
                    <input type="text" name="company_address" id="company_address_input" value={"OO도 OO시 OO구 OO동 123-45"} className="form_input_addr"/>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>통신판매업신고번호</th>
                  <td>
                    <input type="text" name="business_no" id="business_no_input" value={"2023-경기평택-무야호"} className="form_input"/>
                    <em>예) 2023-서울강남-0000호</em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>대표전화번호</th>
                  <td>
                    <input type="text" name="company_tel" id="company_tel_input" value={""} className="form_input"/>
                    <em>예) 02-0000-0000</em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>팩스번호</th>
                  <td>
                    <input type="text" name="company_fax" id="company_fax_input" value={""} className="form_input"/>
                    <em>예) 02-0000-0000</em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>사업자인감</th>
                  <td>
                    <input type="file" name="admin_seal" id="admin_seal_input" value={""} className=""/>
                    <input type="checkbox" name="" id="admin_seal_delete" value={1} className="del_seal"/>
                    <label>삭제</label>
                    <image src={seal_img} className="view_seal_small"></image>
                    <button type="button" className="btn_view">보기</button>
                    <em>사이즈 (80 x 80px)</em>
                    <div id="vimg">
                      <img src="" className="banner_or_img" />
                    </div>
                    <span className="form_info_blue_txt">사업자인감 배경은 투명으로 하셔야 합니다.</span>
                  </td>
                </tr>
                

                {/*  */}
                <tr className="set_tr">
                  <th></th>
                  <td>
                    <input type="text" name="company_service" id="company_service_input" value={""} className="form_input"/>
                    <em>예) </em>
                  </td>
                </tr>

              </table>
          </div>
          <div className="set_time">
            <table className="set_table">
              <h2 className="set_table_title">CS 운영시간</h2>
              <colgroup className="set_colgroup" />
              <tr className="set_tr">
                  <th>상담가능시간</th>
                  <td>
                    <input type="text" name="cs_time" id="cs_time_input" value={"오전10시 ~ 오후6시"} className="form_input"/>
                    <em>예) 오전 9시 ~ 오후 6시 </em>
                  </td>
                </tr>
              <tr className="set_tr">
                  <th>점심시간</th>
                  <td>
                    <input type="text" name="launch_time" id="launch_time_input" value={"오후 12시 ~ 오후 1시"} className="form_input"/>
                    <em>예) 오후 12시 ~ 오후 1시</em>
                  </td>
                </tr>
              <tr className="set_tr">
                  <th>휴무일</th>
                  <td>
                    <input type="text" name="day_off" id="day_off_input" value={"일요일,공휴일 휴무"} className="form_input"/>
                    <em>예) 토요일,공휴일 휴무</em>
                  </td>
                </tr>
            </table>
          </div>
          <div className="set_domain">
            <table className="set_table">
              <h2 className="set_table_title">도메인 설정</h2>
              <colgroup className="set_colgroup" />
              <tr className="set_tr">
                  <th>대표도메인</th>
                  <td>
                    <span>WWW.</span>
                    <input type="text" name="main_domain" id="main_domain_input" value={""} className="form_input"/>
                    <em>예)google.com </em>
                  </td>
                </tr>
                <tr className="set_tr">
                  <th>본사에서 회원가입 거부시 출력 할 경고메세지</th>
                  <td>
                    <textarea type="text" name="reject_message" id="reject_message_input" value={"미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임.."} className="form_textarea"/>
                  </td>
                </tr>
            </table>
          </div>
          <div className="set_state"></div>
        </form>
        <div className="set_"></div>
      </div>
    </div>
  )
}
export default Setting;