import "./branchinformation.css";
import React, { useState, useEffect } from "react";
import img1 from "../franchise_img/branch_map01.png";
import img2 from "../franchise_img/branch_map02.png";
import img3 from "../franchise_img/branch_map03.png";

function BranchInformation() {
  const storedMenu = localStorage.getItem("selectedMenu") || "서울";
  const [menu, setMenu] = useState(storedMenu);
  const [end, setEnd] = useState("");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);

    localStorage.setItem("selectedMenu", menu);
  }, [menu]);

  <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>;

  return (
    <div className="branchinformation">
      <h1 id="title2">지사안내</h1>
      <div className="branchinformation_container">
        <div className="button_css">
          <button
            className={menu === "서울" ? "active" : "noactive"}
            onClick={() => MenuClick("서울")}
          >
            서울
          </button>
          <button
            id="bt_css_1"
            className={menu === "수도권" ? "active" : "noactive"}
            onClick={() => MenuClick("수도권")}
          >
            수도권
          </button>
          <button
            className={menu === "지방" ? "active" : "noactive"}
            onClick={() => MenuClick("지방")}
          >
            지방
          </button>
        </div>
        <div className="button_info">
          {menu === "서울" && (
            <div className={"start " + end}>
              <div className="jh_seoul">
                <ul id="seoul_label">
                  <li>
                    <span id="seoul_label1">● </span>서울강북지사
                  </li>
                  <li>
                    <span id="seoul_label2">● </span>서울강남지사
                  </li>
                </ul>
                <div className="seoul_box">
                  <div className="seoul_img">
                    <img className="seoul_img1" src={img1} />
                  </div>

                  <div className="seoul_text">
                    <div className="seoul_text1">
                      <h3>서울강북지사</h3>
                      <p>서울특별시 서초구 강남대로 535 13층</p>
                      <p>연락처 : 010-4920-1965</p>
                    </div>
                    <div id="seoul_text1_line"></div>
                    <div className="seoul_text1">
                      <h3>서울강남지사</h3>
                      <b>이연주 지사장</b>
                      <p>서울시 서초구 사평대로 55길 112-7 2층</p>
                      <p>연락처 : 02-6356-7907</p>
                      <p>팩스번호 : 02-6356-7907</p>
                    </div>
                    <div id="seoul_a">
                      <a href="/franchise/subwayfranchise">
                        가맹요건 알아보기{" "}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {menu === "수도권" && (
            <div className={"start " + end}>
              <div>
                <div className="jh_center">
                  <ul id="seoul_label">
                    <li>
                      <span id="center_label1">● </span>경기서부인천지사
                    </li>
                    <li>
                      <span id="center_label2">● </span>경기남부지사
                    </li>
                    <li>
                      <span id="center_label3">● </span>경기북강원지사
                    </li>
                  </ul>
                  <div className="seoul_box">
                    <div className="seoul_img">
                      <img className="seoul_img1" src={img2} />
                    </div>

                    <div className="center_text">
                      <div className="seoul_text1">
                        <h3>경기서부인천지사</h3>
                        <p>서울특별시 서초구 강남대로 535 13층</p>
                        <p>연락처 : 010-4920-1965</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>경기남부지사</h3>
                        <p>서울특별시 서초구 강남대로 535 13층</p>
                        <p>연락처 : 02-6356-7907</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>경기북강원지사</h3>
                        <b>김주홍 지사장</b>
                        <p>
                          경기도 하남시 미사대로 510 한강미사이아이에스비즈타워
                          4층 423호
                        </p>
                        <p>연락처 : 031-877-1146</p>
                        <p>팩스번호 : 0504-384-1146</p>
                      </div>
                      <div id="seoul_a">
                        <a href="/franchise/subwayfranchise">
                          가맹요건 알아보기{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {menu === "지방" && (
            <div className={"start " + end}>
              <div>
                <div className="jh_country">
                <ul id="seoul_label">
                      <li>
                        <span id="country_label1">● </span>대전충청지사
                      </li>
                      <li>
                        <span id="country_label2">● </span>대구경북지사
                      </li>
                      <li>
                        <span id="country_label3">● </span>울산경남지사
                      </li>
                      <li>
                        <span id="country_label4">● </span>부산김해지사
                      </li>
                      <li>
                        <span id="country_label5">● </span>광주전라지사
                      </li>
                      <li>
                        <span id="country_label6">● </span>경기북강원지사
                      </li>
                    </ul>
                  <div className="seoul_box">
                    <div className="seoul_img">
                      <img className="jh_country_img" src={img3} />
                    </div>
                    
                    <div className="country_text">
                      <div className="seoul_text1">
                        <h3>대전충청지사</h3>
                        <b>변정원 지사장</b>
                        <p>
                          대전광역시 서구 둔산대로 117번길 95, 리더스타운 C동
                          501호
                        </p>
                        <p>연락처 : 042-321-1151</p>
                        <p>팩스번호 : 042-321-0118</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>대구경북지사</h3>
                        <b>김성필 지사장</b>
                        <p>대구광역시 북구 대학로87 써브웨이 3층</p>
                        <p>연락처 : 053-951-7803</p>
                        <p>팩스번호 : 053-715-1401</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>울산경남지사</h3>
                        <p>서울특별시 서초구 강남대로 535 13층</p>
                        <p>연락처 : 010-8278-1962</p>
                      </div>
                      <div className="seoul_text1">
                        <h3>부산김해지사</h3>
                        <b>이한종 지사장</b>
                        <p>
                          부산시 해운대구 센텀중앙로 48 에이스 하이테크 21
                          1710호
                        </p>
                        <p>연락처 : 051-741-1124</p>
                        <p>팩스번호 : 없음</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>광주전라지사</h3>
                        <b>함경민 지사장</b>
                        <p>
                          광주광역시 서구 시청로 92,(유탑 유블레스 트윈시티),
                          202호
                        </p>
                        <p>연락처 : 051-6462-3900</p>
                        <p>팩스번호 : 062-385-1121</p>
                      </div>
                      <div id="seoul_text1_line"></div>
                      <div className="seoul_text1">
                        <h3>경기북강원지사</h3>
                        <b>김주홍 지사장</b>
                        <p>
                          경기도 하남시 미사대로 510 한강미사아이에스비즈타워
                          4층 423호
                        </p>
                        <p>연락처 : 031-877-1146</p>
                        <p>팩스번호 : 0504-384-1146</p>
                      </div>
                      <div id="seoul_a">
                        <a href="/franchise/subwayfranchise">
                          가맹요건 알아보기{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BranchInformation;
