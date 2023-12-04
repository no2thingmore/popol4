import { useParams } from "react-router-dom";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";

function FastSub() {
  const { step } = useParams();
  return (
    <div className="CHM_fastsubBg">
      <div className="CHM_fastsubTitle">Fast Sub</div>
      <div className="CHM_fastsubContent">
        온라인 주문 후 매장에서 픽업/시식하는 서비스 입니다.
      </div>
      <div className="CHM_fastsubStepBox">
        <div style={step === "step1" ? { color: "white" } : {}}>스텝1</div>
        <div style={step === "step2" ? { color: "white" } : {}}>스텝2</div>
        <div style={step === "step3" ? { color: "white" } : {}}>스텝3</div>
        <div style={step === "step4" ? { color: "white" } : {}}>스텝4</div>
      </div>
      <div className='CHM_fastsubStepContentBox'>
        {step === "step1" ? <Step1></Step1> : ""}
        {step === "step2" ? <Step2></Step2> : ""}
        {step === "step3" ? <Step3></Step3> : ""}
        {step === "step4" ? <Step4></Step4> : ""}
      </div>
    </div>
  );
}

export default FastSub;
