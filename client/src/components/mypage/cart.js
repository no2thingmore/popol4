import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./cart.css";
import cart1 from "./mypage_img/cart1.png";

function Cart() {
  const [itemCounts, setItemCounts] = useState([]);
  const [cart, setCart] = useState([]);
  const [location,setLocation] = useState("");
  const data = localStorage.getItem("cart");
  
  useEffect(() => {
    const parsedData = JSON.parse(data);
    console.log("tttttt",parsedData);
  
    if (Array.isArray(parsedData) && parsedData.length > 0) {
      setCart(parsedData);
      setItemCounts(parsedData.map(() => 1));
    }
    setLocation(parsedData[0][0].location);
    const { IMP } = window;
    IMP.init('imp72356683');
  }, [data]);

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp72356683');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
      amount: 1000,                                 // 결제금액
      name: '아임포트 결제 데이터 분석',                  // 주문명
      buyer_name: '홍길동',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
      buyer_addr: '신사동 661-16',                    // 구매자 주소
      buyer_postcode: '06018',                      // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  function formatAmount(amount) {
    return new Intl.NumberFormat("ko-KR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function plus(index) {
    setItemCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  }

  function minus(index) {
    setItemCounts((prevCounts) => {
      if (prevCounts[index] > 1) {
        const newCounts = [...prevCounts];
        newCounts[index] -= 1;
        return newCounts;
      }
      return prevCounts;
    });
  }

  function deleteCartItem(index) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });

    setItemCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts.splice(index, 1);
      return newCounts;
    });
  }

  const totalOrderAmount = cart.reduce((acc, cartItem, index) => {
    const totalPrice = cartItem.reduce(
      (itemAcc, item) => itemAcc + item.price,
      0
    );
    return acc + totalPrice * (cartItem[0].count + itemCounts[index] - 1);
  }, 0);

  return (
    <div className="CHM_step3Bg1">
      <div className="jj_cart_title">장바구니<img src={cart1}></img></div>
      <div className="CHM_step3StoreContent">장소: {location}</div>
      <div className="CHM_step3CartTitle">주문내역</div>
      <div className="CHM_step3CartContent">
        {cart.map((cartItem, i) => {
          const totalPrice = cartItem.reduce(
            (acc, item) => acc + item.price,
            0
          );
          const breadName = cartItem.find((item) => item.kinds === 0)?.name;

          return (
            <div key={i}>
              <div className="CHM_step3CartContentGrid">
                <div className="CHM_step3CartContentname">
                  <span style={{ paddingRight: "1.5vw", fontSize: "1.4vw" }}>
                    {cartItem[0].mainName}
                  </span>
                </div>
                <div className="CHM_step3CartContentname2">
                  {cartItem.slice(1).length > 0 && (
                    <div style={{ color: "rgb(70, 70, 70)", fontSize: "1.2vw", display:"flex", flexDirection: "column", rowGap:"0.5vw"}}>
                      {breadName && (
                        <div>
                          [ 빵 종류:
                          <span style={{ padding: "0 0.5vw" }}>{breadName}</span>]
                        </div>
                      )}
                      <div>
                        [ 포함된 재료:
                        {cartItem
                          .slice(1)
                          .filter((item) => item.kinds !== 0)
                          .map((item, j, array) => (
                            <span
                              key={j}
                              className="CHM_step3CartContentname"
                              style={{ padding: "0 0.5vw" }}
                            >
                              {item.name}
                              {j !== array.length - 1 && ","}
                            </span>
                          ))}
                        ]
                      </div>
                    </div>
                  )}
                </div>
                <div className="CHM_step3CartContentcount">
                  <span onClick={() => minus(i)} style={{ cursor: "pointer" }}>
                    -
                  </span>
                  <span style={{ fontSize: "1.3vw" }}>
                    {cartItem[0].count + itemCounts[i] - 1}개
                  </span>
                  <span onClick={() => plus(i)} style={{ cursor: "pointer" }}>
                    +
                  </span>
                </div>
                <div
                  className="CHM_step3CartContentprice"
                  style={{ fontSize: "1.3vw" }}
                >
                  {formatAmount(
                    totalPrice * (cartItem[0].count + itemCounts[i] - 1)
                  )}
                  원
                </div>
                <div
                  onClick={() => deleteCartItem(i)}
                  className="CHM_step3DeletBtn"
                >
                  X
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="CHM_step3CartTitle">총 결제 금액</div>
      <div className="CHM_step3CartContent">
        <div className="CHM_step3Resultflex">
          <div>총 주문 금액</div>
          <div>{formatAmount(totalOrderAmount)}원</div> 
        </div>
      </div>
      <div className="CHM_faststep2ResultCart" style={{ paddingTop: "0" }}>
        <Link to="/">
          <div className="CHM_faststep2ResultCartBtn1">
            홈으로 <i class="fa-solid fa-house"></i>
          </div>
        </Link>
          <div
            className="CHM_faststep2ResultCartBtn2"
            style={{ margin: "0 2vw" }}>
            메뉴 추가하기 <i class="fa-solid fa-plus"></i>
          </div>
          <div className="CHM_faststep2ResultCartBtn3"  onClick={onClickPayment}>
            결제하기 <i class="fa-solid fa-check"></i>
          </div>
      </div>
    </div>
  );
}

export default Cart;
