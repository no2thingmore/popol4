import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Step3() {
  const [itemCounts, setItemCounts] = useState([]);
  const [cart, setCart] = useState([]);
  const data = localStorage.getItem("cart");

  useEffect(() => {
    setCart(JSON.parse(data));
    setItemCounts(JSON.parse(data).map(() => 1));
  }, [data]);

  const { location } = useParams();

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

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
    <div className="CHM_step3Bg">
      <div className="CHM_step3CartTitle">픽업매장</div>
      <div className="CHM_step3StoreContent">{replacedString}</div>
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
                          [ 빵 변경:
                          <span style={{ padding: "0 0.5vw" }}>{breadName}</span>]
                        </div>
                      )}
                      <div>
                        [ 추가메뉴:
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
        <div className="CHM_step3Resultslaeflex">
          <div>써브카드 사용</div>
          <div>0원</div>
        </div>
        <div className="CHM_step3Resultslaeflex">
          <div>쿠폰 사용</div>
          <div>0원</div>
        </div>
        <div
          className="CHM_step3Resultslaeflex"
          style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.358)" }}
        >
          <div>포인트 사용</div>
          <div>0원</div>
        </div>
        <div className="CHM_step3Resultflex">
          <div>잔여 결제 금액</div>
          <div className="CHM_step3Resultresultprice">
            {formatAmount(totalOrderAmount)}원
          </div>
        </div>
      </div>

      <div className="CHM_faststep2ResultCart" style={{ paddingTop: "0" }}>
        <Link to="/">
          <div className="CHM_faststep2ResultCartBtn1">
            홈으로 <i class="fa-solid fa-house"></i>
          </div>
        </Link>

        <Link to={`/order/Fast-Sub/step2/${replacedString}/sandwich/Nan`}>
          <div
            className="CHM_faststep2ResultCartBtn2"
            style={{ margin: "0 2vw" }}
          >
            메뉴 추가하기 <i class="fa-solid fa-plus"></i>
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step4/${replacedString}/Null/Nan`}>
          <div className="CHM_faststep2ResultCartBtn3">
            결제하기 <i class="fa-solid fa-check"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Step3;
