import "./header.css";

function Header() {
  return(
    <div className="header">
      <div className="content">
        <a href="/">SUBWAY</a>
        <nav>
          <ul>
            <li>
              <a href="/" className="dp1">메뉴소개</a>
              <div>

              </div>
            </li>
            <li><a href="/">이용방법</a></li>
            <li><a href="/">새소식</a></li>
            <li><a href="/">써브웨이</a></li>
            <li><a href="/">가맹점</a></li>
            <li><a href="/">온라인 주문</a></li>
          </ul>
        </nav>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Header;