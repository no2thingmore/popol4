import { useState } from "react";
import Header from "./header";
import "./admin.css"

function Admin(){
  const [menu, setMenu] = useState("홈");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };
  return(
    <div>
      <Header />
      <nav> 
        <ul className="admin_tags">
          <li>
            <a
              href="#"
              className={menu === "회원관리" ? "active" : "noactive"}
              onClick={() => MenuClick("홈")}>
              내 정보 관리
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "" ? "active" : "noactive"}
              onClick={() => MenuClick("내 정보 변경")}>
              내 정보 수정
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "예약 내역" ? "active" : "noactive"}
              onClick={() => MenuClick("예약 내역")}>
              예약 내역
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "이용 내역" ? "active" : "noactive"}
              onClick={() => MenuClick("이용 내역")}>
              이용 내역
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "알림" ? "active" : "noactive"}
              onClick={() => MenuClick("알림")}>
              알림
            </a>
          </li>
          <li>
            <a
              href="#"
              className={menu === "리뷰" ? "active" : "noactive"}
              onClick={() => MenuClick("리뷰")}>
              리뷰
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