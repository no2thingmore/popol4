import { useParams } from "react-router-dom";
import "./order.css";
import FastSub from "./Fast-Sub/fastsub";

function Order() {
  const { type } = useParams();
  const { step } = useParams();

  return (
    <>
      {type === "Fast-Sub" ? <FastSub step={step}></FastSub> : ""}
    </>
  );
}

export default Order;
