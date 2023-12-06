import { Link } from "react-router-dom";

function Favorate() {
  return (
    <div>
      <div className="CHM_faststep1FavorateBox">
        가장 좋아하는 내 주변 매장
        <Link to="/order/Fast-Sub/step2">다음 스텝으로</Link>
      </div>
    </div>
  );
}

export default Favorate;
