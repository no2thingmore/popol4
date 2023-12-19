import "./cart.css";

function Cart(){

  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  
  return (
    <div className="jj_cart_container">
      <h1 id="jj_cart_title">장바구니</h1>
        <div className="jj_cart_mainbox">
          <div className="jj_cart_box1">
            <form>
              <input
                type="radio"
                />
                전체선택
            </form>
            <button>선택삭제</button>
          </div>
          <div className="jj_cart_box2">
            <div className="jj_cart_maininfo">
              {cartData.map((item, index) => (
                <div key={index} className="jj_cart_item">
                  <img src={item.image} alt={item.name} />
                  <div className="jj_cart_item_info">
                    <h3>{item.name}</h3>
                    <p>가격: {item.price}원</p>
                    {/* 기타 정보들을 표시할 수 있음 */}
                  </div>
                </div>
              ))}  
            </div>
            <div className="jj_cart_total">
              <p>
                총 주문 금액:{" "}
                {cartData.reduce((total, item) => total + item.price, 0)}원
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart;