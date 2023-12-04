import { useState } from 'react';
import Detail from './detail';

function Step2(){
  const [state, setState] = useState("sandwich")
  const stateHandel = (a) => {
    setState(a);
  };
  return (
    <div>
      <div className='CHM_faststep2SelectBox'>
        <div onClick={() => stateHandel("push")}>추천</div>
        <div onClick={() => stateHandel("promotion")}>프로모션</div>
        <div onClick={() => stateHandel("sandwich")}>샌드위치</div>
        <div onClick={() => stateHandel("salad")}>샐러드</div>
        <div onClick={() => stateHandel("wrap")}>랩ㆍ기타</div>
        <div onClick={() => stateHandel("side")}>사이드ㆍ음료</div>
      </div>
      <Detail state={state}></Detail>
    </div>
  )
}

export default Step2;