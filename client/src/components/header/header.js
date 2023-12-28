import { Link, useNavigate } from 'react-router-dom';
import "./header.css";
import { API_URL } from '../config/contansts';
import axios from "axios"
import { getCookie, removeCookie } from '../../useCookies';
import subway1 from "../header/subway1.png";

function Header() {
const navigate = useNavigate();

  const Logout = (e)=>{
    e.preventDefault()
    removeCookie('user')
    removeCookie('role')
    navigate("/")
    window.location.reload();
  }

const Login = (e) => {
  e.preventDefault()
  if(getCookie('user')){
    navigate("/order/Fast-Sub/step1/Noplace/Null/Nan")
  } else {
    navigate("/login")
  }
}

  return (
    <div className="header">
      {/* <button onClick={test}>등록</button> */}
      <div className="topheader">
        <Link to="/"><img src={subway1}></img></Link>
        { getCookie('user') ? 
          <div className="util_menu">
            <button style={{cursor: "pointer"}}><a onClick={Logout}>로그아웃</a></button>&nbsp;&nbsp;
            <button><a href="/mypage/none">마이페이지</a></button>

          </div>
          :
          <div className="util_menu">
            <button><a href="/login">로그인</a></button>&nbsp;&nbsp;
            <button><a href="/register">회원가입</a></button>
          </div>
        }
      </div>
      <ul className="menu">
        <li className="menu-item">
          메뉴소개
          <ul className="submenu">
          <Link to="/menuIntro/0"><li>샌드위치</li></Link>
          <Link to="/menuIntro/1"><li>랩 · 기타</li></Link>
          <Link to="/menuIntro/2"><li>샐러드</li></Link>
          <Link to="/menuIntro/3"><li>아침메뉴</li></Link>
          <Link to="/menuIntro/4"><li>스마일 썹</li></Link>
          <Link to="/menuIntro/5"><li>단체메뉴</li></Link>
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
            <a href="/newsPage/Event"><li>이벤트 · 프로모션</li></a>
            <a href="/newsPage/Notice"><li>뉴스 · 공지사항</li></a>
            <a href="/newsPage/Advertising"><li>광고영상</li></a>
          </ul>
        </li>
        <li className="menu-item">
          써브웨이
          <ul className="submenu">
            <a href="/History"><li>써브웨이 역사</li></a>
            <a href="/Promise"><li>써브웨이 약속</li></a>
            <a href="/Apply"><li>아티스트 지원</li></a>
            <a href="/StoreSearch"><li>매장찾기</li></a>
          </ul>
        </li>
        <li className="menu-item">
          가맹점
          <ul className="submenu">
            <li><a href="/franchise/subwayfranchise">프랜차이즈</a></li>
            <li><a href="/franchise/faq">가맹관련 FAQ</a></li>
            <li><a href="/franchise/franchiseinquire">가맹신청 문의</a></li>
            <li><a href="/franchise/branchinformation">지사안내</a></li>
            <li><a href="/franchise/briefing">사업설명회</a></li>
          </ul>
        </li>
        <li className="menu-item">
          온라인 주문
          <ul className="submenu" style={{width: "100%"}}>
            <li onClick={Login}>FAST-SUB</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;