import { Link, useParams } from "react-router-dom";
import img from "./sandwich.png";
import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from '../../../config/contansts';

function Result2(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const { product } = useParams();
  const [selectedCardIndex1, setSelectedCardIndex1] = useState(null);
  const [selectedCardIndex2, setSelectedCardIndex2] = useState(null);
  const [selectedCardIndex3, setSelectedCardIndex3] = useState(null);
  const [selectedCardIndex4, setSelectedCardIndex4] = useState(null);
  const [selectedCardIndex5, setSelectedCardIndex5] = useState(null);
  const price = props.filterdata[0].price;
  const [cart, setCart] = useState([]);
  const result = [
    {
      id: props.filterdata[0].id,
      mainName: props.filterdata[0].kname,
      count: 1,
      price: price,
    },
  ];
  console.log("price: ", price);
  const bread = props.추천메뉴.filter((item) => item.kinds === 0);
  const vegetable = props.추천메뉴.filter((item) => item.kinds === 1);
  const cheese = props.추천메뉴.filter((item) => item.kinds === 2);
  const sauce = props.추천메뉴.filter((item) => item.kinds === 3);
  const meat = props.추천메뉴.filter((item) => item.kinds === 4);

  //----------총 가격 계산---------------
  const totalPrice = cart.reduce((acc, item) => {
    const menuItem = props.추천메뉴.find((menu) => menu.kname === item.name);
    const itemPrice = menuItem ? menuItem.add_price : 0;
    return acc + itemPrice;
  }, 0);

  const lastTotalPrice = totalPrice + price;

  //----------카트에 상품 추가---------------
  const handleAddToCart = (itemName, itemKind, itemId, itemImg) => {
    //같은 종류가 있는지 확인
    const existingItemIndex = cart.findIndex((item) => item.kinds === itemKind);
    const existing = cart.findIndex((item) => item.id === itemId);
    //같은 종류가 있으면 동작
    if (existingItemIndex !== -1) {
      if (existing !== -1) {
        const updatedCart = cart.filter(
          (item, idx) => idx !== existingItemIndex
        );
        setCart(updatedCart);
      } else {
        const menuItem = props.추천메뉴.find((menu) => menu.kname === itemName);
        const itemPrice = menuItem ? menuItem.add_price : 0;
        const updatedCart = cart.filter(
          (item, idx) => idx !== existingItemIndex
        );
        const copy = [
          ...updatedCart,
          {
            id: menuItem.id,
            kinds: itemKind,
            name: menuItem.kname,
            price: itemPrice,
            img: itemImg
          },
        ];
        setCart(copy);
      }
      // 이미 카트에 동일한 종류의 상품이 있다면 제거
    } else {
      // 카트에 없는 상품이면 추가
      const menuItem = props.추천메뉴.find((menu) => menu.kname === itemName);
      const itemPrice = menuItem ? menuItem.add_price : 0;

      const updatedCart = [
        ...cart,
        {
          id: menuItem.id,
          kinds: itemKind,
          name: menuItem.kname,
          price: itemPrice,
          img: itemImg
        },
      ];

      setCart(updatedCart);
    }
  };
  //----------숫가 가격으로 표시---------------
  function formatAmount(amount) {
    return new Intl.NumberFormat("ko-KR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  //----------매점위치 기억---------------
  const { location } = useParams();

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  //----------로컬스토리지 추가---------------
  function test() {
    let copy = localStorage.getItem("cart");
    if (copy === null) {
      localStorage.setItem("cart", JSON.stringify([]));
      let copy = localStorage.getItem("cart");
      copy = JSON.parse(copy);
      copy.push([...result, ...cart]);
      localStorage.setItem("cart", JSON.stringify(copy));
    } else {
      copy = JSON.parse(copy);
      copy.push([...result, ...cart]);
      localStorage.setItem("cart", JSON.stringify(copy));
    }
  }

  const deleteCartItem = (index, itemKind) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    // 해당하는 selectedCardIndex들을 null로 초기화
    switch (itemKind) {
      case 0:
        setSelectedCardIndex1(null);
        break;
      case 1:
        setSelectedCardIndex2(null);
        break;
      case 2:
        setSelectedCardIndex3(null);
        break;
      case 3:
        setSelectedCardIndex4(null);
        break;
      case 4:
        setSelectedCardIndex5(null);
        break;
      // 추가 상품 종류가 더 있다면 추가하시면 됩니다.
      default:
        break;
    }
  };

  return (
    <div className="CHM_faststep2Result2Box">
      <div className="CHM_faststep2Result2pushGrid">
        {props.filterdata[0].kinds === 0 ? (
          <>
            <div className="CHM_faststep2Result2pushTitle">빵 교체</div>
            <Slider {...settings}>
              {bread.map((a, i) => (
                <div
                  key={i}
                  className={`CHM_faststep2Result2pushCard ${
                    selectedCardIndex1 === i ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex1 === i) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex1(null);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex1(i);
                    }
                  }}
                >
                  <div className="CHM_faststep2Result2pushCardImg">
                    <img src={API_URL + "/upload/" + a.image_url} alt={a} />
                  </div>
                  <div className="CHM_faststep2Result2pushCardTitle">
                    {a.kname}
                  </div>
                  <div className="CHM_faststep2Result2pushCardPrice">
                    {formatAmount(a.add_price)}원
                  </div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          ""
        )}
      </div>
      {props.filterdata[0].kinds !== 4 && props.filterdata[0].kinds !== 5 ? (
        <>
          <div className="CHM_faststep2Result2pushTitle">야채 추가</div>
          <div className="CHM_faststep2Result2pushGrid">
            <Slider {...settings}>
              {vegetable.map((a, i) => (
                <div
                  key={i}
                  className={`CHM_faststep2Result2pushCard ${
                    selectedCardIndex2 === i ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex2 === i) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex2(null);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex2(i);
                    }
                  }}
                >
                  <div className="CHM_faststep2Result2pushCardImg">
                    <img src={API_URL + "/upload/" + a.image_url} alt={a} />
                  </div>
                  <div className="CHM_faststep2Result2pushCardTitle">
                    {a.kname}
                  </div>
                  <div className="CHM_faststep2Result2pushCardPrice">
                    {formatAmount(a.add_price)}원
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}

      {props.filterdata[0].kinds !== 4 && props.filterdata[0].kinds !== 5 ? (
        <>
          <div className="CHM_faststep2Result2pushTitle">치즈 추가</div>
          <div className="CHM_faststep2Result2pushGrid">
            <Slider {...settings}>
              {cheese.map((a, i) => (
                <div
                  key={i}
                  className={`CHM_faststep2Result2pushCard ${
                    selectedCardIndex3 === i ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex3 === i) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex3(null);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex3(i);
                    }
                  }}
                >
                  <div className="CHM_faststep2Result2pushCardImg">
                    <img src={API_URL + "/upload/" + a.image_url} alt={a} />
                  </div>
                  <div className="CHM_faststep2Result2pushCardTitle">
                    {a.kname}
                  </div>
                  <div className="CHM_faststep2Result2pushCardPrice">
                    {formatAmount(a.add_price)}원
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}

      {props.filterdata[0].kinds !== 4 && props.filterdata[0].kinds !== 5 ? (
        <>
          <div className="CHM_faststep2Result2pushTitle">소스 추가</div>
          <div className="CHM_faststep2Result2pushGrid">
            <Slider {...settings}>
              {sauce.map((a, i) => (
                <div
                  key={i}
                  className={`CHM_faststep2Result2pushCard ${
                    selectedCardIndex4 === i ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex4 === i) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex4(null);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex4(i);
                    }
                  }}
                >
                  <div className="CHM_faststep2Result2pushCardImg">
                    <img src={API_URL + "/upload/" + a.image_url} alt={a} />
                  </div>
                  <div className="CHM_faststep2Result2pushCardTitle">
                    {a.kname}
                  </div>
                  <div className="CHM_faststep2Result2pushCardPrice">
                    {formatAmount(a.add_price)}원
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}

      {props.filterdata[0].kinds !== 4 && props.filterdata[0].kinds !== 5 ? (
        <>
          <div className="CHM_faststep2Result2pushTitle">고기 추가</div>
          <div className="CHM_faststep2Result2pushGrid">
            <Slider {...settings}>
              {meat.map((a, i) => (
                <div
                  key={i}
                  className={`CHM_faststep2Result2pushCard ${
                    selectedCardIndex5 === i ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex5 === i) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex5(null);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      setSelectedCardIndex5(i);
                    }
                  }}
                >
                  <div className="CHM_faststep2Result2pushCardImg">
                    <img src={API_URL + "/upload/" + a.image_url} alt={a} />
                  </div>
                  <div className="CHM_faststep2Result2pushCardTitle">
                    {a.kname}
                  </div>
                  <div className="CHM_faststep2Result2pushCardPrice">
                    {formatAmount(a.add_price)}원
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="CHM_faststep2ResultReservation">
        <div className="CHM_faststep2ResultReservationTitle">
          <div>주문내역</div>
          <div style={{fontSize: "1.5vw", color: "rgb(68, 68, 68)"}}>* 상품 갯수는 결제페이지에서 조절할 수 있습니다.</div>
        </div>
        <div className="CHM_faststep2ResultReservationGrid">
          <div
            className="CHM_faststep2ResultReservationImg"
            style={{ borderTop: "none" }}
          >
            <img src={API_URL + "/upload/" + props.filterdata[0].image_url} />
          </div>
          <div
            className="CHM_faststep2ResultReservationName"
            style={{ borderTop: "none" }}
          >
            {props.filterdata[0].kname}
          </div>
          <div
            className="CHM_faststep2ResultReservationCountBox"
            style={{ borderTop: "none" }}
          ></div>
          <div
            className="CHM_faststep2ResultReservationPrice"
            style={{ borderTop: "none" }}
          >
            {formatAmount(price)}원
          </div>
          {cart.map((a, i) => (
            <React.Fragment key={i}>
              <div className="CHM_faststep2ResultReservationImg">
                <img src={API_URL + "/upload/" + a.img} alt={a} />
              </div>
              <div className="CHM_faststep2ResultReservationName">{a.name}</div>
              <div className="CHM_faststep2ResultReservationCountBox"></div>
              <div className="CHM_faststep2ResultReservationPrice">
                {formatAmount(
                  props.추천메뉴.find((menu) => menu.kname === a.name)
                    ?.add_price
                )}
                원
                <span
                  style={{
                    marginLeft: "2.5vw",
                    color: "red",
                    cursor: "pointer",
                    fontFamily: "TTWanjudaedunsancheB",
                    fontSize: "1.7vw",
                  }}
                  onClick={() => deleteCartItem(i, a.kinds)}
                >
                  X
                </span>
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
          to={`/order/Fast-Sub/step2/${replacedString}/${product}/Nan`}
          onClick={test}
        >
          <div className="CHM_faststep2ResultCartBtn2">
            장바구니에 담기 <i class="fa-solid fa-basket-shopping"></i>
          </div>
        </Link>
        <Link
          to={`/order/Fast-Sub/step3/${replacedString}/Null/Nan`}
          onClick={test}
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
