import { Link, useLocation, useParams } from "react-router-dom";

function Step3() {
  const data = useLocation().state;
  console.log(data);

  const { location } = useParams();

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  function formatAmount(amount) {
    return new Intl.NumberFormat("ko-KR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <div className="CHM_step3Bg">
      <div className="CHM_step3CartTitle">픽업매장</div>
      <div className="CHM_step3StoreContent">{replacedString}</div>
      <div className="CHM_step3CartTitle">주문내역</div>
      <div className="CHM_step3CartContent">
        {data.result.map((a, i) => {
          return (
            <div className="CHM_step3CartContentGrid">
              <div className="CHM_step3CartContentname">{a.name}</div>
              <div className="CHM_step3CartContentcount">{a.count}개</div>
              <div className="CHM_step3CartContentprice">
                {formatAmount(a.price)}원
              </div>
            </div>
          );
        })}
      </div>
      <div className="CHM_step3CartTitle">총 결제 금액</div>
      <div className="CHM_step3CartContent">
        <div className="CHM_step3Resultflex">
          <div>총 주문 금액</div>
          <div>{formatAmount(data.totalPrice)}원</div>
        </div>
        <div className="CHM_step3Resultslaeflex">
          <div>써브카드 사용</div>
          <div>0원</div>
        </div>
        <div className="CHM_step3Resultslaeflex">
          <div>쿠폰 사용</div>
          <div>0원</div>
        </div>
        <div
          className="CHM_step3Resultslaeflex"
          style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.358)" }}
        >
          <div>포인트 사용</div>
          <div>0원</div>
        </div>
        <div className="CHM_step3Resultflex">
          <div>잔여 결제 금액</div>
          <div className="CHM_step3Resultresultprice">
            {formatAmount(data.totalPrice)}
            <span style={{ fontSize: "1.5vw" }}>원</span>
          </div>
        </div>
      </div>
      <Link to={`/order/Fast-Sub/step4/${replacedString}/Null/Nan`}>
        <div className="CHM_faststep2ResultCart" style={{ paddingTop: "0" }}>
          <div className="CHM_faststep2ResultCartBtn3">
            결제하기 <i class="fa-solid fa-check"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Step3;
