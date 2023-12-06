import { useState } from "react";
import Detail from "./detail";
import Result from "./result";
import { Link, useParams, useLocation } from "react-router-dom";

function Step2() {
  const cart = useLocation().state;
  console.log("haha: ", cart);
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

  console.log(replacedString);
  return (
    <div>
      <div className="CHM_faststep2SelectBox">
        <Link to={`/order/Fast-Sub/step2/${replacedString}/push/Nan`}>
          <div
            style={state === "push" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("push")}
          >
            추천
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/promotion/Nan`}>
          <div
            style={state === "promotion" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("promotion")}
          >
            프로모션
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/sandwich/Nan`}>
          <div
            style={state === "sandwich" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("sandwich")}
          >
            샌드위치
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/salad/Nan`}>
          <div
            style={state === "salad" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("salad")}
          >
            샐러드
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/wrap/Nan`}>
          <div
            style={state === "wrap" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("wrap")}
          >
            랩ㆍ기타
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/side/Nan`}>
          <div
            style={state === "side" ? { color: "#009223" } : {}}
            onClick={() => stateHandel("side")}
          >
            사이드ㆍ음료
          </div>
        </Link>
      </div>

      {id === "Nan" ? <Detail state={state}></Detail> : ""}
      {id !== "Nan" ? <Result product={product} id={id}></Result> : ""}
    </div>
  );
}

export default Step2;
