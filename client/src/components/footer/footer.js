import "./footer.css";

function Footer() {
  return(
    <div className="content_jun">
      <div className="util_menu_jun">
        <ul>
          <li>
            <a href="">이용약관</a>
          </li>
          <li>
            <a href="">개인정보처리방침</a>
          </li>
          <li>
            <a href="">써브카드</a>
          </li>
          <li>
            <a href="">점주관리자</a>
          </li>
          <li>
            <a href="">Subway Listens</a>
          </li>
        </ul>
      </div>
      <span className="addr">서울시 서초구 강남대로 535 프린스빌딩 15층 | </span>
      <span className="rep">대표 : Cho Kyeong-ik(조경익) | </span>
      <span className="tel">전화 : 01-234-5678 | </span>
      <span className="rep">사업자등록번호 : 123-45-6789</span>
      <p>SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;