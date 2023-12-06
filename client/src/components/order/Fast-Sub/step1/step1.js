import Store from "./store";
import Favorate from "./favorate";
import { useState } from "react";

function Step1() {
  const [state, setState] = useState("store");

  const stateHandel = (a) => {
    setState(a);
  };

  return (
    <div>
      <div className='CHM_faststep1SelectBox'>
        <div style={state === "store" ? {backgroundColor: "#009223", color: "white"} : {}} onClick={() => stateHandel("store")}>매장찾기</div>
        {/* <div style={state === "favorate" ? {backgroundColor: "#009223", color: "white"} : {}}onClick={() => stateHandel("favorate")}>자주 찾는 매장</div> */}
      </div>

      {state === "store" && <Store></Store>}
      {/* {state === "favorate" && <Favorate></Favorate>} */}
    </div>
  );
}

export default Step1;
