import fuck1 from "./fuck1.png"
import fuck2 from "./img_visual_fresh01.jpg"
import fuck3 from "./img_visual_fresh02.jpg"
import fuck4 from "./img_visual_fresh03.jpg"
import { useEffect, useState } from "react";

function Freshingredients(props) {
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
        <h1>Fresh Ingredients</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
           매장에서 직접 굽는 빵, 엄격하게 세척하는 야채의 신선함,
          </div>
          <div>써브웨이만의 다양한 소스를 맛보세요.</div>
        </div>
      </div>
      <div className={"CHM_saladImgBox1 "+ saladleft}>
        <img src={fuck2}></img>
      </div>
      <div className={"CHM_saladImgBox2 "+ saladright}>
        <img src={fuck3}></img>
      </div>
    </div>
  );
}

export default Freshingredients;
