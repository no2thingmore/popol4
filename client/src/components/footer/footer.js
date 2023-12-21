import "./footer.css";
import instagram from "./footer_img/instagram.png";
import facebook from "./footer_img/facebook.png";


function Footer() {
  return(
    <div className="footer">
      <div className="content_jun">
        <div className="util_menu_jun">
          <button id="jun_b"><a href="/condition">이용약관</a></button>
          <button id="jun_b1"><a href="/processing_policy"><b>개인정보처리방침</b></a></button>
          <button id="jun_b"><a href="/subcard">써브카드</a></button>
          <button id="jun_b"><a href="/admin/adminlogin/none">점주관리자</a></button>
          <button id="jun_b"><a href="https://www.instagram.com/subwaykorea/"><img src={instagram}></img></a></button>
          <button id="jun_b"><a href="https://www.facebook.com/Subwaykr"><img src={facebook}></img></a></button>
        </div>
        <div className="line"></div>
        <div className="footer_text">
          <span className="addr">&nbsp;&nbsp;&nbsp;&nbsp;서울시 서초구 강남대로 535 프린스빌딩 15층 | </span>
          <span className="rep">대표 : Cho Kyeong-ik(조경익) | </span>
          <span className="tel">전화 : 01-234-5678 | </span>
          <span className="rep">사업자등록번호 : 123-45-6789</span>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP LLC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;