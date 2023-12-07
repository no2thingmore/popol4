import React, { useState } from "react";
import "./briefing.css"

function Briefing() {
  const [menu, setMenu] = useState("서울-수도권 지역");
  const [end, setEnd] = useState("");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };
    
  return(
    <div className="briefing">
      <h1 id="title3">사업설명회(대표번호 02-797-5036)</h1>
      <div className="briefing_button">
        <button
          className={menu === "서울-수도권 지역" ? "active" : "noactive"}
          onClick={() => MenuClick("서울-수도권 지역")}>
          서울-수도권 지역
        </button>
        <button
          className={menu === "지방 지역" ? "active" : "noactive"}
          onClick={() => MenuClick("지방 지역")}>
          지방 지역
        </button>
      </div>

      <div className="c_table_info">
          {menu === "서울-수도권 지역" && (
            <div className={"start " + end}>
              <div className="c_back">
                <div className="c_back1">
                  <p id="title4">서울강남지사 사업설명회</p>
                  <div className="c_table_1">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">지사</th>
                          <th scope="col">일자</th>
                          <th scope="col">시간</th>
                          <th scope="col">지역</th>
                          <th scope="col">장소</th>
                          <th scope="col">문의전화</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>서울강남지사</td>
                          <td>개별 문의</td>
                          <td>개별 문의</td>
                          <td>서초, 강남, 송파, 강동, 관악, 동작,<br></br>영등포, 금전, 양천, 구로, 강서</td>
                          <td>서울특별시 서초구<br></br>사평대로 55길 112-7, 2F</td>
                          <td>010-2016-5661</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="c_back2">
                  <p id="title5">서울강북/경기남부/경기서부인천지사 사업설명회</p>
                  <div className="c_table_1">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">지사</th>
                          <th scope="col">일자</th>
                          <th scope="col">시간</th>
                          <th scope="col">지역</th>
                          <th scope="col">장소</th>
                          <th scope="col">문의전화</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>서울강남지사</td>
                          <td>개별 문의</td>
                          <td>개별 문의</td>
                          <td>종로, 중구, 서대문, 용산, 성동, 동대문, 광진,<br></br>성북, 중랑, 노원, 도봉, 강북, 마포, 은평</td>
                          <td>서울특별시 서초구<br></br>강남대로 535 13층</td>
                          <td>010-4920-1965</td>
                        </tr>
                        <tr>
                          <td>경기남부지사</td>
                          <td>개별 문의</td>
                          <td>개별 문의</td>
                          <td>안양, 군포, 안산, 화성, 평택,<br></br>과천, 의왕, 수원, 오산, 성남, 용인, 안성</td>
                          <td>서울특별시 서초구<br></br>강남대로 535 13층</td>
                          <td>010-4920-1965</td>
                        </tr>
                        <tr>
                          <td>경기서부인천지사</td>
                          <td>개별 문의</td>
                          <td>개별 문의</td>
                          <td>인천, 부천, 김포, 고양, 시흥, 광명</td>
                          <td>서울특별시 서초구<br></br>강남대로 535 13층</td>
                          <td>010-4920-1965</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="c_back2">
                  <p id="title5">경기북강원지사 가맹문의</p>
                  <div className="c_table_1">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">지사</th>
                          <th scope="col">지역</th>
                          <th scope="col">설명회</th>
                          <th scope="col">문의전화</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>경기북강원지사</td>
                          <td>파주, 동두천, 양주, 의정부, 남양주, 구리,<br></br>
                          하남, 포천, 가평, 양평, 광주, 여주, 이천<br></br>
                          강원도 전지역</td>
                          <td>개별문의</td>
                          <td>010-4920-1965</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <b>“사업설명회 일정은 변동될 수 있습니다. 개설 희망지역별 사업설명회 일정을 확인해 주시고, 반드시 사전 문의 후 참석해 주시기 바랍니다”</b>
                  </div>
                </div>
              </div> 
            </div>
            )
          }
      </div>
      <div className="td_info">
          {menu === "지방 지역" && (
            <div className={"start " + end}>
              <div className="c_backk">
                <div className="c_back1">
                  <p id="title4">지방지역 가맹상담</p>
                  <div className="c_table_1">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">지사</th>
                          <th scope="col">지역</th>
                          <th scope="col">설명회</th>
                          <th scope="col">문의전화</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>대전충청지사</td>
                          <td>대전, 세종, 충남, 충북 전지역</td>
                          <td>개별 문의</td>
                          <td>042-321-1151</td>
                        </tr>
                        <tr>
                          <td>대구경북지사</td>
                          <td>대구, 경북 전지역</td>
                          <td>개별 문의</td>
                          <td>053-951-7803</td>
                        </tr>
                        <tr>
                          <td>울산경남지사</td>
                          <td>울산, 경남 전지역</td>
                          <td>개별 문의</td>
                          <td>055-275-5442</td>
                        </tr>
                        <tr>
                          <td>부산충청지사</td>
                          <td>울산, 경남 전지역</td>
                          <td>개별 문의</td>
                          <td>051-741-1124</td>
                        </tr>
                        <tr>
                          <td>광주충청지사</td>
                          <td>광주, 전북, 전남 전지역</td>
                          <td>개별 문의</td>
                          <td>010-6462-3900</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <b>“사업설명회 일정은 변동될 수 있습니다. 
                          개설 희망지역별 사업설명회 일정을 확인해 주시고, 
                          반드시 사전 문의 후 참석해 주시기 바랍니다”
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
      </div>
    </div>
  )
}

export default Briefing;