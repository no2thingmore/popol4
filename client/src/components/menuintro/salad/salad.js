import fuck1 from "./fuck1.png"
import fuck2 from "./fuck2.png"
import { useEffect, useState } from "react";

function Salad(props) {
  const [saladleft, setSaladleft] = useState("");
  const [saladright, setSaladright] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 saladleft을 설정
    const saladleftTimeout = setTimeout(() => {
      setSaladleft("CHM_saladleft");
    }, 100);
  
    // 250ms 후에 saladright을 설정
    const saladrightTimeout = setTimeout(() => {
      setSaladright("CHM_saladright");
    }, 250);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(saladleftTimeout);
      clearTimeout(saladrightTimeout);
    };
  }, []); // 빈 배열은 이 효과가 마운트 및 언마운트 시에만 실행되도록 합니다.

  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Salad</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
            양은 더 많이! 칼로리는 더 적게!
          </div>
          <div>신선한 야채와 다양한 소스로 가볍게 샐러드를 즐겨보세요!</div>
        </div>
      </div>
      <div className={"CHM_saladImgBox1 "+ saladleft}>
        <img src={fuck1}></img>
      </div>
      <div className={"CHM_saladImgBox2 "+ saladright}>
        <img src={fuck2}></img>
      </div>
    </div>
  );
}

export default Salad;
