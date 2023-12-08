import "./subwayfranchise.css"


function SubwayFranchise() {

  return(
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
          <ul>
            <li>
              <div className="jun_brandcomp_img1">
                <img/>
              </div>
              <h4>BRAND</h4><br></br>
              <h4>POWER</h4>
              {/* <ul>
                <li>· 세계 1위 프랜차이즈로서의 브랜드가치</li>
                <li>· 전세계 3만 8천여개 매장으로 검증된 안정성</li>
                <li>· 글로벌 브랜드 관리 및 지원 - 신제품 개발, 브랜드 가치<br></br>향상, 스탠더드 관리</li>
              </ul> */}
            </li>

            <li>
              {/* <div className="jun_brandcomp_img1">
                <img/>
              </div>
              <h4>BRAND</h4><br></br>
              <h4>POWER</h4>
              <ul>
                <li>· 세계 1위 프랜차이즈로서의 브랜드가치</li>
                <li>· 전세계 3만 8천여개 매장으로 검증된 안정성</li>
                <li>· 글로벌 브랜드 관리 및 지원 - 신제품 개발, 브랜드 가치<br></br>향상, 스탠더드 관리</li>
              </ul> */}
            </li>

            <li>
              {/* <div className="jun_brandcomp_img1">
                <img/>
              </div>
              <h4>BRAND</h4><br></br>
              <h4>POWER</h4>
              <ul>
                <li>· 세계 1위 프랜차이즈로서의 브랜드가치</li>
                <li>· 전세계 3만 8천여개 매장으로 검증된 안정성</li>
                <li>· 글로벌 브랜드 관리 및 지원 - 신제품 개발, 브랜드 가치<br></br>향상, 스탠더드 관리</li>
              </ul> */}
            </li>

            <li>
              {/* <div className="jun_brandcomp_img1">
                <img/>
              </div>
              <h4>BRAND</h4><br></br>
              <h4>POWER</h4>
              <ul>
                <li>· 세계 1위 프랜차이즈로서의 브랜드가치</li>
                <li>· 전세계 3만 8천여개 매장으로 검증된 안정성</li>
                <li>· 글로벌 브랜드 관리 및 지원 - 신제품 개발, 브랜드 가치<br></br>향상, 스탠더드 관리</li>
              </ul> */}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default SubwayFranchise;