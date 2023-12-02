import { useEffect, useState } from 'react';
import koko from "./fuck.png";

function Sandwich(props) {
  const [up ,setUp] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 up을 설정
    const upTimeout = setTimeout(() => {
      setUp("CHM_up");
    }, 100);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(upTimeout);
    };
  }, []); // 빈 배열은 이 효과가 마운트 및 언마운트 시에만 실행되도록 합니다.

  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Sandwich</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
            전세계 넘버원 브랜드 Subway!
          </div>
          <div>50년 전통의 세계 최고의 샌드위치를 맛보세요!</div>
        </div>
      </div>
      <div className={"CHM_SubTitleImgBox " + up}>
        <img src={koko}></img>
      </div>
    </div>
  );
}

export default Sandwich;
