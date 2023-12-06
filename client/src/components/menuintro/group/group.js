import fuck1 from "./fuck1.png";
import fuck2 from "./fuck2.png";
import { useEffect, useState } from "react";

function Group(props) {
  const [groupdown, setGroupdown] = useState("");
  const [groupup, setgGroupup] = useState("");
  const [anititle, setAnititle] = useState("")

  useEffect(() => {
    // 150ms 후에 anititle을 설정
    const anititleTimeout = setTimeout(() => {
      setAnititle("CHM_anititle");
    }, 150);
  
    // 100ms 후에 groupdown을 설정
    const groupdownTimeout = setTimeout(() => {
      setGroupdown("CHM_groupdown");
    }, 100);
  
    // 200ms 후에 groupup을 설정
    const groupupTimeout = setTimeout(() => {
      setgGroupup("CHM_groupup");
    }, 200);
  
    // clean-up 함수에서 타이머를 해제합니다.
    return () => {
      clearTimeout(anititleTimeout);
      clearTimeout(groupdownTimeout);
      clearTimeout(groupupTimeout);
    };
  }, []); // 빈 배열은 이 효과가 마운트 및 언마운트 시에만 실행되도록 합니다.

  return (
    <div className="CHM_sandwichTitle" style={{ backgroundColor: props.color }}>
      <div style={{zIndex: 3}} className={"anititle "+anititle}>
        <h1>Catering Menu</h1>
        <div className="CHM_SubTitle">
          <div style={{ marginBottom: "0.5vw" }}>
            특별한 순간을 더욱 특별하게 해줄 단체 매뉴를 소개합니다.
          </div>
          <div>※ 최소 1일전 매장에 주문해주세요</div>
        </div>
      </div>
      <div className={"CHM_groupImgBox1 "+ groupdown}>
        <img src={fuck1}></img>
      </div>
      <div className={"CHM_groupImgBox2 "+ groupup}>
        <img src={fuck2}></img>
      </div>
    </div>
  );
}

export default Group;
