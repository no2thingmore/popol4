import fuck1 from "./fuck1.png";
import fuck2 from "./fuck2.png";
import { useEffect, useState } from "react";

function Breakfast(props) {
  const [breakfastleft, setBreakfastleft] = useState("");
  const [breakfastup, setBreakfastup] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 breakfastleft을 설정
    const breakfastleftTimeout = setTimeout(() => {
      setBreakfastleft("CHM_breakfastleft");
    }, 100);
  
    // 300ms 후에 breakfastup을 설정
    const breakfastupTimeout = setTimeout(() => {
      setBreakfastup("CHM_breakfastup");
    }, 200);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(breakfastleftTimeout);
      clearTimeout(breakfastupTimeout);
    };
  }, []); // 빈 배열은 이 효과가 마운트 및 언마운트 시에만 실행되도록 합니다.

  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Morning Menu</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
            아침 메뉴도 Subway와 함께, 취향대로 즐기자!
          </div>
          <div>* 그릴드 랩은 일부 매장에서만 제공 가능합니다.</div>
        </div>
      </div>
      <div className={"CHM_breakfastImgBox1 "+ breakfastleft}>
        <img src={fuck2}></img>
      </div>
      <div className={"CHM_breakfastImgBox2 "+ breakfastup}>
        <img src={fuck1}></img>
      </div>
    </div>
  );
}

export default Breakfast;
