import fuck1 from "./fuck1.png";
import fuck2 from "./fuck2.png";
import { useEffect, useState } from "react";

function Smile(props) {
  const [smiledown, setSmiledown] = useState("");
  const [smileleft, setSmileleft] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 smiledown을 설정
    const smiledownTimeout = setTimeout(() => {
      setSmiledown("CHM_smiledown");
    }, 100);
  
    // 350ms 후에 smileleft을 설정
    const smileleftTimeout = setTimeout(() => {
      setSmileleft("CHM_smileleft");
    }, 200);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(smiledownTimeout);
      clearTimeout(smileleftTimeout);
    };
  }, []); // 빈 배열은 이 효과가 마운트 및 언마운트 시에만 실행되도록 합니다.

  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Smile Sub</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
            웃음이 번지는 착한 가격, 착한 맛!
          </div>
          <div>스마일 썹과 함께 하루 종일 스마일 하세요~</div>
        </div>
      </div>
      <div className={"CHM_smileImgBox1 "+ smiledown}>
        <img src={fuck1}></img>
      </div>
      <div className={"CHM_smileImgBox2 "+ smileleft}>
        <img src={fuck2}></img>
      </div>
    </div>
  );
}

export default Smile;
