import profile from "./profile.png";
import cart from "./cart.png";
import { Link } from "react-router-dom";

function Select(props) {
  const user = props.user; // user 객체를 직접 사용
  const cartItemCount = getCartItemCount(); // 로컬 스토리지에서 아이템 개수 가져오기

  // 로컬 스토리지에서 아이템 개수 가져오는 함수
  function getCartItemCount() {
    const data = localStorage.getItem("cart");
    const parsedData = JSON.parse(data);

    if (Array.isArray(parsedData) && parsedData.length > 0) {
      // 장바구니에 있는 총 아이템 개수 계산
      return parsedData.reduce((acc, cartItem) => acc + cartItem[0].count, 0);
    } else {
      return 0; // 장바구니가 비어있을 때는 아이템 개수를 0으로 반환
    }
  }

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
            <div className="CHM_mypageCartBtn">
              담긴메뉴 개수: {cartItemCount}개
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Select;
