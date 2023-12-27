import { Link, useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "@mui/base/useSnackbar";
import * as React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../../config/contansts";

function Result2(props) {
  const navigate = useNavigate();
  const { product } = useParams();

  //----------매점위치 기억---------------
  const { location } = useParams();
  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  //----------슬라이드 설정---------------
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  //----------각 카테고리의 cassname이 될 것들---------------
  const [selectedCardIndex1, setSelectedCardIndex1] = useState(null);
  const [selectedCardIndex2, setSelectedCardIndex2] = useState([]);
  const [selectedCardIndex3, setSelectedCardIndex3] = useState([]);
  const [selectedCardIndex4, setSelectedCardIndex4] = useState([]);
  const [selectedCardIndex5, setSelectedCardIndex5] = useState([]);

  //----------메인 상품의 가격---------------
  const price = props.filterdata[0].price;

  //----------cart라는 useState---------------
  const [cart, setCart] = useState([]);

  //----------메인 상품의 정보---------------
  const result = [
    {
      id: props.filterdata[0].id,
      mainName: props.filterdata[0].kname,
      count: 1,
      price: price,
      location: location,
    },
  ];

  //----------카테고리별 데이터 필터링---------------
  const bread = props.추천메뉴.filter((item) => item.kinds === 0);
  const vegetable = props.추천메뉴.filter((item) => item.kinds === 1);
  const cheese = props.추천메뉴.filter((item) => item.kinds === 2);
  const sauce = props.추천메뉴.filter((item) => item.kinds === 3);
  const meat = props.추천메뉴.filter((item) => item.kinds === 4);

  //----------추가메뉴 가격 합산---------------
  const totalPrice = cart.reduce((acc, item) => {
    const menuItem = props.추천메뉴.find((menu) => menu.kname === item.name);
    const itemPrice = menuItem ? menuItem.add_price : 0;
    return acc + itemPrice;
  }, 0);

  //----------최공가격 ---------------
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
          (item) => item.id !== itemId // 수정된 부분: item.id와 itemId를 비교하여 해당 아이템을 찾음
        );
        setCart(updatedCart);
      } else {
        if (itemKind == 0) {
          const menuItem = props.추천메뉴.find(
            (menu) => menu.kname === itemName
          );
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
              img: itemImg,
            },
          ];
          setCart(copy);
        } else {
          const menuItem = props.추천메뉴.find(
            (menu) => menu.kname === itemName
          );
          const itemPrice = menuItem ? menuItem.add_price : 0;
          const copy = [
            ...cart,
            {
              id: menuItem.id,
              kinds: itemKind,
              name: menuItem.kname,
              price: itemPrice,
              img: itemImg,
            },
          ];
          setCart(copy);
        }
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
          img: itemImg,
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

  function test2() {
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
    if (
      window.confirm(
        `상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?`
      )
    ) {
      navigate("/mypage/cart");
    } else {
      navigate(`/order/Fast-Sub/step2/${replacedString}/${product}/Nan`);
    }
  }

  const deleteCartItem = (index, itemKind, itemId) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    // 해당하는 selectedCardIndex들을 null로 초기화
    if (selectedCardIndex2.includes(itemId)) {
      const copy = selectedCardIndex2.filter((item) => item !== itemId);
      setSelectedCardIndex2(copy);
    } else if (selectedCardIndex3.includes(itemId)) {
      const copy = selectedCardIndex3.filter((item) => item !== itemId);
      setSelectedCardIndex3(copy);
    } else if (selectedCardIndex4.includes(itemId)) {
      const copy = selectedCardIndex4.filter((item) => item !== itemId);
      setSelectedCardIndex4(copy);
    } else if (selectedCardIndex5.includes(itemId)) {
      const copy = selectedCardIndex5.filter((item) => item !== itemId);
      setSelectedCardIndex5(copy);
    }

    switch (itemKind) {
      case 0:
        setSelectedCardIndex1(null);
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
                    selectedCardIndex2.includes(a.id) ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex2.includes(a.id)) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = selectedCardIndex2.filter(
                        (item) => item !== a.id
                      );
                      setSelectedCardIndex2(copy);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = [...selectedCardIndex2, a.id];
                      setSelectedCardIndex2(copy);
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
                    selectedCardIndex3.includes(a.id) ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex3.includes(a.id)) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = selectedCardIndex3.filter(
                        (item) => item !== a.id
                      );
                      setSelectedCardIndex3(copy);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = [...selectedCardIndex3, a.id];
                      setSelectedCardIndex3(copy);
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
                    selectedCardIndex4.includes(a.id) ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex4.includes(a.id)) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = selectedCardIndex4.filter(
                        (item) => item !== a.id
                      );
                      setSelectedCardIndex4(copy);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = [...selectedCardIndex4, a.id];
                      setSelectedCardIndex4(copy);
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
                    selectedCardIndex5.includes(a.id) ? "CHM_selectedCard" : ""
                  }`}
                  onClick={() => {
                    if (selectedCardIndex5.includes(a.id)) {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = selectedCardIndex5.filter(
                        (item) => item !== a.id
                      );
                      setSelectedCardIndex5(copy);
                    } else {
                      handleAddToCart(a.kname, a.kinds, a.id, a.image_url);
                      const copy = [...selectedCardIndex5, a.id];
                      setSelectedCardIndex5(copy);
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
          <div style={{ fontSize: "1.5vw", color: "rgb(68, 68, 68)" }}>
            * 상품 갯수는 결제페이지에서 조절할 수 있습니다.
          </div>
        </div>
        <div className="CHM_faststep2ResultReservationGrid">
          <div
            className="CHM_faststep2ResultReservationImg"
            style={{ borderTop: "none" }}
          >
            <img
              src={API_URL + "/upload/" + props.filterdata[0].image_url}
              style={{ maxHeight: "9.5vw" }}
            />
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
                <img
                  src={API_URL + "/upload/" + a.img}
                  alt={a}
                  style={{ maxHeight: "9.5vw" }}
                />
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
                  onClick={() => deleteCartItem(i, a.kinds, a.id)}
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
        <Link to={`/order/Fast-Sub/step2/${replacedString}/${product}/Nan`}>
          <div className="CHM_faststep2ResultCartBtn1">
            돌아가기 <i class="fa-solid fa-reply"></i>
          </div>
        </Link>
        <div className="CHM_faststep2ResultCartBtn2" onClick={test2}>
          장바구니에 담기 <i class="fa-solid fa-basket-shopping"></i>
        </div>
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
