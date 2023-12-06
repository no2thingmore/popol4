import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
  return(
    <div className="header">
      <div className="content">
        <div className="topheader">
          <h1 id="logo">
            <Link to="/">SUBWAY</Link>
          </h1>
          <div className="util_menu">
            <ul>
              <li>
                <a href="">로그인</a>
              </li>
              <li>
                <a href="">회원가입</a>
              </li>
            </ul>
          </div>
        </div>
        <nav id="menu">
          <ul>
            <li>
              <a href="/" className="dp1">메뉴소개</a>
              <div className="dp2">
                <ul>
                  <li>
                    <Link to="/menuIntro/sandwich">샌드위치</Link>
                    <Link to="/menuIntro/wrap">랩 · 기타</Link>
                    <Link to="/menuIntro/salad">샐러드</Link>
                    <Link to="/menuIntro/breakfast">아침메뉴</Link>
                    <Link to="/menuIntro/smile">스마일 썹</Link>
                    <Link to="/menuIntro/group">단체메뉴</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/" className="dp1">이용방법</a>
              <div className="dp2">
                <ul>
                  <li>
                    <a href="">서브웨이 이용방법</a>
                    <a href="">단체메뉴 이용방법</a>
                    <a href="">신선한 재료 소개</a>
                    <a href="">App 이용방법</a>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="/" className="dp1">새소식</a>
              <div className="dp2">
                <ul>
                  <li>
                    <a href="">이벤트 · 프로모션</a>
                    <a href="">뉴스 · 공지사항</a>
                    <a href="">광고영상</a>
                  </li>
                </ul>     
              </div>
            </li>
            <li><a href="/" className="dp1">써브웨이</a>
            <div className="dp2">
                <ul>
                  <li>
                    <a href="">서브웨이 역사</a>
                    <a href="">단체메뉴 약속</a>
                    <a href="">샌드위치 아티스트 지원</a>
                    <a href="">매장찾기</a>
                  </li>
                </ul>     
              </div>
            </li>
            <li><a href="/" className="dp1">가맹점</a>
            <div className="dp2">
                <ul>
                  <li>
                    <a href="">서브웨이 프랜차이즈</a>
                    <a href="">가맹관련 FAQ</a>
                    <a href="">가맹신청 문의</a>
                    <a href="">지사안내</a>
                    <a href="">사업설명회</a>
                  </li>
                </ul>     
              </div>
            </li>
            <li><a href="/" className="dp1">온라인 주문</a>
            <div className="dp2">
                <ul>
                  <li>
                    <Link to="/order/Fast-Sub/step1/Noplace/Null/Nan">FAST-SUB</Link>
                    <Link to="/order/Home-Sub/step1/Null/Nan">HOME-SUB</Link>
                    <Link to="/order/group/select/Null/Nan">단체주문</Link>
                  </li>
                </ul>     
              </div>
            </li>
          </ul>
        </nav>
        {/* <div className="util_menu">
          <ul>
            <li>
              <a href="">로그인</a>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Header;