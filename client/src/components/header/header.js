import { Link } from 'react-router-dom';
import "./header.css";
import { API_URL } from '../config/contansts';
import axios from "axios"

function Header() {

  // const test = async ()=>{
  //   await axios.get(`${API_URL}/test`)
  // }//데이터 한번에 등록할려고 임시로 만들어둔 axios 나중에 삭제 할 것

  return (
    <div className="header">
      {/* <button onClick={test}>등록</button> */}
      <div className="topheader">
        <h1 id="logo">
          <Link to="/">SUBWAY</Link>
        </h1>
          <div className="util_menu">           
            <button><a href="/login">로그인</a></button>&nbsp;&nbsp;
            <button><a href="/register">회원가입</a></button>
          </div>
      </div>
      <ul className="menu">
        <li className="menu-item">
          메뉴소개
          <ul className="submenu">
          <Link to="/menuIntro/sandwich"><li>샌드위치</li></Link>
          <Link to="/menuIntro/wrap"><li>랩 · 기타</li></Link>
          <Link to="/menuIntro/salad"><li>샐러드</li></Link>
          <Link to="/menuIntro/breakfast"><li>아침메뉴</li></Link>
          <Link to="/menuIntro/smile"><li>스마일 썹</li></Link>
          <Link to="/menuIntro/group"><li>단체메뉴</li></Link>
          </ul>
        </li>
        <li className="menu-item">
          이용방법
          <ul className="submenu">
            <a href="/ingreDient/howtousesubway"><li>써브웨이 이용방법</li></a>
            <a href="/ingreDient/groupmenu"><li>단체메뉴 이용방법</li></a>
            <a href="/ingreDient/freshingredients"><li>신선한 재료 소개</li></a>
            {/* <a href="/"><li>App 이용방법</li></a> */}
          </ul>
        </li>
        <li className="menu-item">
          새소식
          <ul className="submenu">
            <a href="/"><li>이벤트 · 프로모션</li></a>
            <a href="/"><li>뉴스 · 공지사항</li></a>
            <a href="/"><li>광고영상</li></a>
          </ul>
        </li>
        <li className="menu-item">
          써브웨이
          <ul className="submenu">
            <a href="/History"><li>써브웨이 역사</li></a>
            <a href="/Promise"><li>써브웨이 약속</li></a>
            <a href="/Apply"><li>샌드위치 아티스트 지원</li></a>
            <a href="/StoreSearch"><li>매장찾기</li></a>
          </ul>
        </li>
        <li className="menu-item">
          가맹점
          <ul className="submenu">
            <li><a href="/subwayfranchise">써브웨이 프랜차이즈</a></li>
            <li><a href="/faq">가맹관련 FAQ</a></li>
            <li><a href="/franchiseinquire">가맹신청 문의</a></li>
            <li><a href="/branchinformation">지사안내</a></li>
            <li><a href="/briefing">사업설명회</a></li>
          </ul>
        </li>
        <li className="menu-item">
          온라인 주문
          <ul className="submenu">
            <Link to="/order/Fast-Sub/step1/Noplace/Null/Nan"><li>FAST-SUB</li></Link>
            <Link to="/order/Home-Sub/step1/Null/Nan"><li>HOME-SUB</li></Link>
            <Link to="/order/group/select/Null/Nan"><li>단체주문</li></Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;