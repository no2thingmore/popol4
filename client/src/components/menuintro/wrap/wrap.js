import fuck1 from "./fuck1.png";
import fuck2 from "./fuck2.png";
import { useEffect, useState } from "react";

function Wrap(props) {
  const [wrapdown, setWrapdown] = useState("");
  const [wrapright, setWrapright] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 wrapdown을 설정
    const wrapdownTimeout = setTimeout(() => {
      setWrapdown("CHM_wrapdown");
    }, 100);
  
    // 300ms 후에 wrapright을 설정
    const wraprightTimeout = setTimeout(() => {
      setWrapright("CHM_wrapright");
    }, 300);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(wrapdownTimeout);
      clearTimeout(wraprightTimeout);
    };
  }, []); 
  
  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Wrap</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "1vw" }}>
            Subway를 더 맛있고 간편하게 즐기는 방법
            <br />
            최상의 레시피로 만들어진 써브웨이 랩 시리즈, 이젠 고민하지 마세요!
          </div>
          <div>
            * 그릴드 랩은 일부 매장에서만 제공 가능합니다.
            <br />* 그릴드 랩을 제공하는 매장에서는 시그니처랩을 제공하지
            않습니다.매장찾기의 매장정보를 확인해주세요.
          </div>
        </div>
      </div>
      <div className={"CHM_wrapImgBox1 "+ wrapdown}>
        <img src={fuck1}></img>
      </div>
      <div className={"CHM_wrapImgBox2 "+ wrapright}>
        <img src={fuck2}></img>
      </div>
    </div>
  );
}

export default Wrap;
