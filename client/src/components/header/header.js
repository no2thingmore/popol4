import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="topheader">
        <h1 id="logo">
          <a href="/">SUBWAY</a>
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
            <li><a href="/">샌드위치</a></li>
            <li><a href="/">샌드위치</a></li>
            <li><a href="/">랩 · 기타</a></li>
            <li><a href="/">샐러드</a></li>
            <li><a href="/">아침메뉴</a></li>
            <li><a href="/">스마일 썸</a></li>
            <li><a href="/">단체메뉴</a></li>
          </ul>
        </li>
        <li className="menu-item">
          이용방법
          <ul className="submenu">
            <li><a href="/">써브웨이 이용방법</a></li>
            <li><a href="/">단체메뉴 이용방법</a></li>
            <li><a href="/">신선한 재료 소개</a></li>
            <li><a href="/">App 이용방법</a></li>
          </ul>
        </li>
        <li className="menu-item">
          새소식
          <ul className="submenu">
            <li><a href="/">이벤트 · 프로모션</a></li>
            <li><a href="/">뉴스 · 공지사항</a></li>
            <li><a href="/">광고영상</a></li>
          </ul>
        </li>
        <li className="menu-item">
          써브웨이
          <ul className="submenu">
            <li><a href="/">써브웨이 역사</a></li>
            <li><a href="/">써브웨이 약속</a></li>
            <li><a href="/">샌드위치 아티스트 지원</a></li>
            <li><a href="/">매장찾기</a></li>
          </ul>
        </li>
        <li className="menu-item">
          가맹점
          <ul className="submenu">
            <li><a href="/">써브웨이 프랜차이즈</a></li>
            <li><a href="/">가맹관련 FAQ</a></li>
            <li><a href="/">가맹신청 문의</a></li>
            <li><a href="/">지사안내</a></li>
            <li><a href="/">사업설명회</a></li>
          </ul>
        </li>
        <li className="menu-item">
          온라인 주문
          <ul className="submenu">
            <li><a href="/">FAST-SUB</a></li>
            <li><a href="/">HOME-SUB</a></li>
            <li><a href="/">단체주문</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;