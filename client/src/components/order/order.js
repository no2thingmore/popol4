import { useParams } from "react-router-dom";
import "./order.css";
import FastSub from "./Fast-Sub/fastsub";
import HomeSub from './Home-sub/homesub';
import Group from './Group/group';

function Order() {
  const { type } = useParams();
  const { step } = useParams();

  return (
    <>
      {type === "Fast-Sub" ? <FastSub step={step}></FastSub> : ""}
      {type === "Home-Sub" ? <HomeSub></HomeSub> : ""}
      {type === "group" ? <Group></Group> : ""}
    </>
  );
}

export default Order;
