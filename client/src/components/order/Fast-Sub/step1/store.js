import { Link } from "react-router-dom";

function Store() {
  return (
    <div>
      <div className="CHM_faststep1MapBox">
        지도들어갈 자리<Link to="/order/Fast-Sub/step2">다음 스텝으로</Link>
      </div>
    </div>
  );
}

export default Store;
