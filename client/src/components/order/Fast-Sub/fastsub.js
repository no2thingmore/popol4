import { useParams } from "react-router-dom";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";

function FastSub() {
  const { step } = useParams();
  return (
    <div className="CHM_fastsubBg">
      <div className="CHM_fastsubTitle">Fast-Sub</div>
      <div className="CHM_fastsubContent">
        온라인 주문 후 매장에서 픽업/시식하는 서비스 입니다.
      </div>
      <div className="CHM_fastsubStepBox">
        <div
          style={
            step === "step1"
              ? {
                  color: "rgb(255, 195, 0)",
                  fontSize: "3vw",
                  backgroundColor: "rgb(150, 49, 169)",
                  borderRadius: "1vw 0",
                  marginRight: "1vw",
                }
              : {}
          }
        >
          스텝
          <span
            style={
              step === "step1"
                ? { color: "white", paddingLeft: "1vw" }
                : { color: "rgb(232, 232, 232)", paddingLeft: "1vw" }
            }
          >
            1
          </span>
        </div>
        <div
          style={
            step === "step1"
              ? { padding: 0, color: "white" }
              : { padding: 0, color: "rgba(128, 128, 128, 0.568)" }
          }
        >
          ㆍㆍㆍ
        </div>
        <div
          style={
            step === "step2"
              ? {
                  color: "rgb(255, 195, 0)",
                  fontSize: "3vw",
                  backgroundColor: "rgb(150, 49, 169)",
                  borderRadius: "1vw 0",
                  marginRight: "1vw",
                }
              : {}
          }
        >
          스텝<span style={
              step === "step2"
                ? { color: "white", paddingLeft: "1vw" }
                : { color: "rgb(232, 232, 232)", paddingLeft: "1vw" }
            }>2</span>
        </div>
        <div
          style={
            step === "step2"
              ? { padding: 0, color: "white" }
              : { padding: 0, color: "rgba(128, 128, 128, 0.568)" }
          }
        >
          ㆍㆍㆍ
        </div>
        <div
          style={
            step === "step3"
              ? {
                  color: "rgb(255, 195, 0)",
                  fontSize: "3vw",
                  backgroundColor: "rgb(150, 49, 169)",
                  borderRadius: "1vw 0",
                  marginRight: "1vw",
                }
              : {}
          }
        >
          스텝
          <span
            style={
              step === "step3"
                ? { color: "white", paddingLeft: "1vw" }
                : { color: "rgb(232, 232, 232)", paddingLeft: "1vw" }
            }
          >
            3
          </span>
        </div>
        <div
          style={
            step === "step3"
              ? { padding: 0, color: "white" }
              : { padding: 0, color: "rgba(128, 128, 128, 0.568)" }
          }
        >
          ㆍㆍㆍ
        </div>
        <div
          style={
            step === "step4"
              ? {
                  color: "rgb(255, 195, 0)",
                  fontSize: "3vw",
                  backgroundColor: "rgb(150, 49, 169)",
                  borderRadius: "1vw 0",
                  marginRight: "1vw",
                }
              : {}
          }
        >
          스텝
          <span
            style={
              step === "step4"
                ? { color: "white", paddingLeft: "1vw" }
                : { color: "rgb(232, 232, 232)", paddingLeft: "1vw" }
            }
          >
            4
          </span>
        </div>
      </div>
      <div className="CHM_fastsubStepContentBox">
        {step === "step1" ? <Step1></Step1> : ""}
        {step === "step2" ? <Step2></Step2> : ""}
        {step === "step3" ? <Step3></Step3> : ""}
        {step === "step4" ? <Step4></Step4> : ""}
      </div>
    </div>
  );
}

export default FastSub;
