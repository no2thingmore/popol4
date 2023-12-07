import { useState } from "react";
import Header from "./header";
import "./admin.css"

function Admin(){
  const [menu, setMenu] = useState("홈");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };
  return(
    <div className="admin_contents">
      <div>
        <Header />
      </div>
      <nav>
        <ul className="admin_tags">
          <li>
            <a
              href="#"
              className={menu === "회원관리" ? "active" : "noactive"}
              onClick={() => MenuClick("회원관리")}>
              회원관리
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "카테고리관리" ? "active" : "noactive"}
              onClick={() => MenuClick("카테고리관리")}>
              카테고리관리
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "상품관리" ? "active" : "noactive"}
              onClick={() => MenuClick("상품관리")}>
              상품관리
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "고객지원" ? "active" : "noactive"}
              onClick={() => MenuClick("고객지원")}>
              고객지원
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "디자인관리" ? "active" : "noactive"}
              onClick={() => MenuClick("디자인관리")}>
              디자인관리
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "설정" ? "active" : "noactive"}
              onClick={() => MenuClick("설정")}>
              설정
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "방 등록하기" ? "active" : "noactive"}
              onClick={() => MenuClick("방 등록하기")}>
              방 등록하기
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu_info">
          {menu === "내 정보 관리" && (
            <div>
              {/* <InfoManagement menu={menu}></InfoManagement> */}
            </div>
          )}

          {menu === "내 정보 변경" && (
            <div>
              {/* <InfoEdit menu={menu}></InfoEdit> */}
            </div>
          )}

          {menu === "예약 내역" && (
            <div>
              {/* <Reservation></Reservation> */}
            </div>
          )}

          {menu === "이용 내역" && (
            <div>
              {/* <UsedInfo></UsedInfo> */}
            </div>
          )}

          {menu === "알림" && (
            <div>
              {/* <Alarm></Alarm> */}
            </div>
          )}

          {menu === "리뷰" && (
            <div>
              {/* <Myreview/> */}
            </div>
          )}

          {menu === "방 등록하기" && (
            <div>
              {/* <Registration /> */}
            </div>
          )}
        </div>
    </div>
  )
}

export default Admin;