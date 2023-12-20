import profile from "./profile.png";
import cart from "./cart.png";
import { Link } from "react-router-dom";

function Select(props) {
  return (
    <div>
      <div className="CHM_mypageTitle">MY SUB</div>
      <div className="CHM_mypageselectBox">
        <div className="CHM_mypageuserInfoBox">
          <div className="CHM_mypageuserInfoImgBox">
            <img src={profile}></img>
          </div>

          <div>
            <div style={{ fontSize: "1.5vw", margin: "1.5vw 0" }}>
              어서오세요!
              <br />
              {props.user.name}님
            </div>
            <a href="/mypage/edit">
              <div className="CHM_mypageuserEditBtn">내 정보 변경</div>
            </a>
          </div>
        </div>
        <a href="/mypage/cart">
          <div className="CHM_mypageCartBox">
            <div className="CHM_mypageCartImg">
              <img src={cart}></img>
            </div>
            <div className="CHM_mypageCartBtn">장바구니 확인하기</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Select;
