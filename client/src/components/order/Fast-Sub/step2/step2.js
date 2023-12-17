import { useState } from "react";
import Detail from "./detail";
import Result from "./result";
import { Link, useParams, useLocation } from "react-router-dom";

function Step2() {
  // const cart = useLocation().state;
  const [cart, setCart] = useState([{id:1, name: "차하민"}]);
  console.log("setp2Cart: ", cart);
  const { product } = useParams();
  const { id } = useParams();
  const { location } = useParams();
  const [state, setState] = useState(product);
  const stateHandel = (a) => {
    setState(a);
  };


  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  return (
    <div>
      <div className="CHM_faststep2SelectBox">
        <Link to={`/order/Fast-Sub/step2/${replacedString}/push/Nan`}>
          <div
            style={state === "push" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("push")}
          >
            추천
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/promotion/Nan`}>
          <div
            style={state === "promotion" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("promotion")}
          >
            프로모션
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/sandwich/Nan`}>
          <div
            style={state === "sandwich" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("sandwich")}
          >
            샌드위치
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/salad/Nan`}>
          <div
            style={state === "salad" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("salad")}
          >
            샐러드
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/wrap/Nan`}>
          <div
            style={state === "wrap" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("wrap")}
          >
            랩ㆍ기타
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/side/Nan`}>
          <div
            style={state === "side" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("side")}
          >
            사이드ㆍ음료
          </div>
        </Link>
      </div>

      {id === "Nan" ? <Detail state={state}></Detail> : ""}
      {id !== "Nan" ? <Result product={product} cart={cart} setCart={setCart} id={id}></Result> : ""}
    </div>
  );
}

export default Step2;
