import "./subwayfranchise.css";
import band_comp_01 from "../subwayfranchise_img/img_barnd_comp01.jpg";
import band_comp_02 from "../subwayfranchise_img/img_barnd_comp02.jpg";
import band_comp_03 from "../subwayfranchise_img/img_barnd_comp03.jpg";
import band_comp_04 from "../subwayfranchise_img/img_barnd_comp04.jpg";

function SubwayFranchise() {
  return (
    <div className="subwayfranchise">
      <h1 id="title">써브웨이 프랜차이즈</h1>
      <div className="summary">
        <p>
          미국 프랜차이즈 1위! 써브웨이는 매장수 및 분포지역 기준,<br></br>
          Quick Service Restaurant(QSR) 부분 No.1 프랜차이즈입니다.
        </p>
      </div>
      <div className="jun_button">
        <div className="jun_button_l" id="leftButton">
          <div className="jun_button_2">
            <div className="jun_tb1">
              <p>전세계</p>
            </div>
            <div className="jun_tb2">
              <b id="jun_tb3">104</b>
              <b id="jun_tb4">개국</b>
            </div>
          </div>
        </div>
        <div className="jun_button_r" id="rightButton">
          <div className="jun_button_3">
            <div className="jun_tb5">
              <p>매장수</p>
            </div>
            <div className="jun_tb6">
              <b id="jun_tb7">37,525</b>
              <b id="jun_tb8">개</b>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 id="jun_title">써브웨이 브랜드 경쟁력</h1>
        <div className="brandcomp">
          <ul id="brandcomp_ul">
            <li id="brandcomp_li">
              <div className="jun_brandcomp_img1">
                <img className="band_comp_01" src={band_comp_01} />
              </div>
              <div className="band_comp_h4">
                <h4>BRAND</h4>
                <h4>POWER</h4>
              </div>
              <ul className="band_comp_ul">
                <li>· 세계 1위 프랜차이즈로서의 브랜드가치</li>
                <li>· 전세계 3만 8천여개 매장으로 검증된 안정성</li>
                <li>
                  · 글로벌 브랜드 관리 및 지원 - 신제품 개발, 브랜드<br></br>
                  &nbsp;&nbsp;&nbsp;가치 향상, 스탠더드 관리
                </li>
              </ul>
            </li>
            <li id="brandcomp_li">
              <div className="jun_brandcomp_img1">
                <img className="band_comp_02" src={band_comp_02} />
              </div>
              <div className="band_comp_h4">
                <h4>WELL</h4>
                <h4>-BEING</h4>
              </div>
              <ul className="band_comp_ul">
                <li>· 건강한 식재료 공급을 통한 균형잡힌 메뉴 제공</li>
                <li>· 아이들에게도 안심하고 먹을 수 있는 영양식</li>
                <li>· 신뢰할 수 있는 영양정보 제공</li>
              </ul>
            </li>
            <li id="brandcomp_li">
              <div className="jun_brandcomp_img1">
                <img className="band_comp_03" src={band_comp_03} />
              </div>
              <div className="band_comp_h4">
                <h4>MADE</h4>
                <h4>FRESH</h4>
              </div>
              <ul className="band_comp_ul">
                <li>· 매장에서 매일 갓 구워낸 &nbsp;빵 제공</li>
                <li>· 취향대로 재료 선택 가능</li>
                <li>· 매장에서 매일 준비되는 &nbsp;신선한 야채</li>
              </ul>
            </li>
            <li id="brandcomp_li">
              <div className="jun_brandcomp_img1">
                <img className="band_comp_04" src={band_comp_04} />
              </div>
              <div className="band_comp_h4">
                <h4>SMART</h4>
                <h4>INVESTMENT</h4>
              </div>
              <ul className="band_comp_ul">
                <li>· 최적의 비지니스 모델 제공</li>
                <li>· 용이한 직원 교육 가능</li>
                <li>· 인력 운영 시스템 및 체계적인 &nbsp;교육 제공</li>
                <li>· 빠른 테이블 회전율과 엄격한 재고 관리</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="franchise_process">
        <h2>가맹점 개설 절차</h2>
        <p>
          높은 수익성과 탁월한 안정성이 전세계 104개국, 37,525여개 매장으로
          검증된 글로벌 No.1 프랜차이즈 써브웨이
        </p>
        <p>
          체계화된 성공 노하우와 함께 새로운 비즈니스의 시작을 준비하십시오.
        </p>
        <p id="process_p">
          ※ 가맹 신청부터 매장 오픈까지 최소 2달 이상 소요됩니다.
        </p>
        <div className="process_bar">
          <div>
            <div className="process_circle">
              <div>
                <p>STEP 1</p>
                <b>신청서 작성 및 상담</b>
              </div>
            </div>
            <div className="process_li">
              <li>· 가맹 경영에 대한</li>
              <li>정보 상담</li>
            </div>
          </div>

          <div>
            <div className="process_circle1">
              <div>
                <p>STEP 2</p>
                <b>
                  가맹 계약 <br></br>체결
                </b>
              </div>
            </div>
            <div className="process_li">
              <li>· 계약서 작성</li>
              <li>· 가맹비 입금</li>
            </div>
          </div>

          <div>
            <div className="process_circle">
              <div>
                <p>STEP 3</p>
                <b>
                  상권분석 및 선정
                </b>
              </div>
            </div>
            <div className="process_li">
              <li>· 상권조사 / 입지분석</li>
              <li>· 매장 결정</li>
              <li>· 공사일정 협의</li>
            </div>
          </div>

          <div>
            <div className="process_circle1">
              <div>
                <p>STEP 4</p>
                <b>오픈 준비</b>
              </div>
            </div>
            <div className="process_li">
              <li>· 설계도 확정 / 장비주문</li>
              <li>· 인테리어 공사</li>
              <li>· 가맹교육 / 매장 실습</li>
            </div>
          </div>

          <div>
            <div className="process_circle">
              <div>
                <p>STEP 5</p>
                <b>매장 오픈</b>
              </div>
            </div>
            <div className="process_li">
              <li>· 직원 교육</li>
              <li>· 운영테스트</li>
              <li>· 그랜드오픈</li>
            </div>
          </div>
        </div>
      </div>
      <div className="c_backkk">
        <div className="c_back1">
          <p id="title4">예상 투자비용</p>
          <div className="c_table_1">
            <table>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col">금액</th>
                  <th scope="col">내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>가맹비</td>
                  <td>14,889,000원</td>
                  <td>소멸성</td>
                </tr>
                <tr>
                  <td>교육비</td>
                  <td>없음</td>
                  <td>교육에 대한 추가 비용 없음</td>
                </tr>
                <tr>
                  <td>장비 및 기자재</td>
                  <td>12,000만원</td>
                  <td>
                    샌드위치 유니트, 브래드 오븐, 스피드 오븐, 전자레인지,
                    냉장냉동시설, <br></br>
                    주방설비 및 집기, 커피머신, CCTV, 음향장비, 가구 및 인테리어
                    소품 등
                  </td>
                </tr>
                <tr>
                  <td>
                    인테리어
                  </td>
                  <td>200만원~210만원</td>
                  <td>
                    가설, 전기, 바닥, 벽체, 천정, 설비, 출입문 철거 및 조성,
                    장비세팅, 기본덕트, 스프링쿨러 등
                  </td>
                </tr>
                <tr>
                  <td>간판</td>
                  <td>410만원</td>
                  <td>H:450mm / 1면 기준, 어닝 포함</td>
                </tr>
                <tr>
                  <td>전기증설</td>
                  <td>150만원</td>
                  <td>10KW증설</td>
                </tr>
                <tr>
                  <td>냉난방</td>
                  <td>450만원</td>
                  <td>32평형 시스템1, 벽걸이(냉난방)1, 배관비</td>
                </tr>
                <tr id="tr_add">
                  <td>합계</td>
                  <td>2억 원~2억 1천만원</td>
                  <td>총 비용은 경우에 따라 변동 될 수 있습니다.</td>
                </tr>
              </tbody>
            </table>
            <div className="last_ppp">
              <p>
                ※ 일반 매장 최소 전용면적은 25평이며, 공항, 백화점, 병원 등
                특수상권 매장은 25평 이하로 선택적 입점 가능
              </p>
              <p>
                ※ 별도 비용 : 외부공사(갈바, 데크 등), 추가공사(철거, 자동문
                등), 전기 간선작업, 건물의 공사 준수사항에 따른 비용 등 매장
                여건에 따라 투자비용이 달라질 수 있습니다
              </p>
            </div>
            <div>
              <a href="/franchise/franchiseinquire">
                <button className="last_button">가맹신청 / 문의</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubwayFranchise;
