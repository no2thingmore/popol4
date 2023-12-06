import { Link, useParams } from "react-router-dom";
import img from "./sandwich.png";
import { useState } from "react";
import React from "react";

function Result2(props) {
  const [카드클릭상태, set카드클릭상태] = useState(
    Array(props.data.추천메뉴.length).fill(false)
  );
  const [countMap, setCountMap] = useState({});
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(props.data.price);
  const [cart, setCart] = useState([]);
  const result = [
    { name: props.data.Kname, count: count, price: price * count },
  ];
  console.log("cart:", cart);

  const totalPrice = cart.reduce((acc, item) => {
    const menuItem = props.data.추천메뉴.find(
      (menu) => menu.name === item.name
    );
    const itemPrice = menuItem ? menuItem.price : 0;
    const itemCount = countMap[item.name] || 1;
    return acc + itemPrice * itemCount;
  }, 0);

  const lastTotalPrice = totalPrice + price * count;
  const handleCountChange = (itemName, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.name === itemName) {
        const newCount = Math.max((countMap[itemName] || 1) + amount, 1);
        const menuItem = props.data.추천메뉴.find(
          (menu) => menu.name === itemName
        );
        const itemPrice = menuItem ? menuItem.price : 0;
        const newPrice = itemPrice * newCount;

        return { ...item, count: newCount, price: newPrice };
      }
      return item;
    });

    setCart(updatedCart);

    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [itemName]: Math.max((countMap[itemName] || 1) + amount, 1),
    }));
  };

  const handleAddToCart = (itemName, index) => {
    const existingItemIndex = cart.findIndex((item) => item.name === itemName);

    if (existingItemIndex !== -1) {
      // 이미 카트에 존재하는 상품이면 제거
      const updatedCart = cart.filter((item, idx) => idx !== existingItemIndex);
      setCart(updatedCart);
    } else {
      // 카트에 없는 상품이면 추가
      const menuItem = props.data.추천메뉴.find(
        (menu) => menu.name === itemName
      );
      const itemPrice = menuItem ? menuItem.price : 0;

      const updatedCart = [
        ...cart,
        {
          name: itemName,
          count: 1,
          price: itemPrice * (countMap[itemName] || 1),
        },
      ];

      setCart(updatedCart);
    }

    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [itemName]: 1,
    }));

    set카드클릭상태((prevState) => {
      const newStatus = [...prevState];
      newStatus[index] = !prevState[index];
      return newStatus;
    });
  };

  const handleCountDecrease = () => setCount(Math.max(count - 1, 1));
  const handleCountIncrease = () => setCount(count + 1);

  function formatAmount(amount) {
    return new Intl.NumberFormat('ko-KR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  const { location } = useParams();

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  return (
    <div className="CHM_faststep2Result2Box">
      <div className="CHM_faststep2Result2pushTitle">추천 메뉴</div>
      <div className="CHM_faststep2Result2pushGrid">
        {props.data.추천메뉴.map((a, i) => (
          <div
            key={i}
            className="CHM_faststep2Result2pushCard"
            style={{
              background: 카드클릭상태[i] ? "#009223" : "",
              color: 카드클릭상태[i] ? "white" : "",
            }}
            onClick={() => handleAddToCart(a.name, i)}
          >
            <div className="CHM_faststep2Result2pushCardImg">
              <img
                style={{ scale: 카드클릭상태[i] ? "1" : "" }}
                src={img}
                alt={a}
              />
            </div>
            <div className="CHM_faststep2Result2pushCardTitle">{a.name}</div>
            <div className="CHM_faststep2Result2pushCardPrice">{formatAmount(a.price)}원</div>
          </div>
        ))}
      </div>
      <div className="CHM_faststep2ResultReservation">
        <div className="CHM_faststep2ResultReservationTitle">주문 내역</div>
        <div className="CHM_faststep2ResultReservationGrid">
          <div
            className="CHM_faststep2ResultReservationImg"
            style={{ borderTop: "none" }}
          >
            <img src={img} />
          </div>
          <div
            className="CHM_faststep2ResultReservationName"
            style={{ borderTop: "none" }}
          >
            {props.data.Kname}
          </div>
          <div
            className="CHM_faststep2ResultReservationCountBox"
            style={{ borderTop: "none" }}
          >
            <span className="CHM_faststep2ResultReservationCountTitle">
              수량
            </span>

            <span
              onClick={handleCountDecrease}
              className="CHM_faststep2ResultReservationCountBtn"
            >
              -
            </span>
            <span className="CHM_faststep2ResultReservationCount">{count}</span>
            <span
              onClick={handleCountIncrease}
              className="CHM_faststep2ResultReservationCountBtn"
            >
              +
            </span>
          </div>
          <div
            className="CHM_faststep2ResultReservationPrice"
            style={{ borderTop: "none" }}
          >
            {formatAmount(price * count)}원
          </div>
          {cart.map((a, i) => (
            <React.Fragment key={i}>
              <div className="CHM_faststep2ResultReservationImg">
                <img src={img} alt={a} />
              </div>
              <div className="CHM_faststep2ResultReservationName">{a.name}</div>
              <div className="CHM_faststep2ResultReservationCountBox">
                <span className="CHM_faststep2ResultReservationCountTitle">
                  수량
                </span>
                <span
                  onClick={() => handleCountChange(a.name, -1)}
                  className="CHM_faststep2ResultReservationCountBtn"
                >
                  -
                </span>
                <span className="CHM_faststep2ResultReservationCount">
                  {countMap[a.name]}
                </span>
                <span
                  onClick={() => handleCountChange(a.name, 1)}
                  className="CHM_faststep2ResultReservationCountBtn"
                >
                  +
                </span>
              </div>
              <div className="CHM_faststep2ResultReservationPrice">
                {formatAmount(props.data.추천메뉴.find((menu) => menu.name === a.name)
                  ?.price * countMap[a.name])}
                원
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="CHM_faststep2ResultTotalPriceBox">
        <div className="CHM_faststep2ResultTotalPriceTitle">총가격</div>
        <div className="CHM_faststep2ResultTotalPrice">
          총 주문 금액 <span>{formatAmount(lastTotalPrice)}</span>원
        </div>
      </div>
      <div className="CHM_faststep2ResultCart">
        <Link to="/order/Fast-Sub/step2/sandwitch/Nan">
          <div className="CHM_faststep2ResultCartBtn1">
            돌아가기 <i class="fa-solid fa-reply"></i>
          </div>
        </Link>
        <Link
          to={`/order/Fast-Sub/step2/${replacedString}/sandwich/Nan`}
          state={{
            totalPrice: lastTotalPrice,
            result: [...result, ...cart],
          }}
        >
          <div className="CHM_faststep2ResultCartBtn2">
            장바구니 <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </Link>
        <Link
          to={`/order/Fast-Sub/step3/${replacedString}/Null/Nan`}
          state={{
            totalPrice: lastTotalPrice,
            result: [...result, ...cart],
          }}
        >
          <div className="CHM_faststep2ResultCartBtn3">
            결제하기 <i className="fa-solid fa-check"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Result2;
