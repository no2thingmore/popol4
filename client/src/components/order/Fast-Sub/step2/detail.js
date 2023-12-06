import { Link, useParams } from "react-router-dom";
import img from "./sandwich.png";
import { useState } from "react";
import Result from "./result";

function Detail(props) {
  const [data, setData] = useState([
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 2,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 3,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },

    {
      id: 1,
      Kname: "스파이시 바비큐",
      Ename: "Spicy BBQ",
      kcal: 374,
      img: img,
      type: 1, //클래식 or 프레쉬&라이트 or 프리미엄 or 신제품 or 추가 선택
      content:
        "매콤한 스파이시 바비큐 소스와 부드러운 풀드포크의 만남, 한국식 매운맛을 입안 가득 즐겨보세요.",
    },
  ]);

  const { type } = useParams();
  const { location } = useParams();

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  return (
    <>
      {type === "Fast-Sub" ? (
        <div className="CHM_faststep2DetaileBox">
          <div className="CHM_faststep2DetaileGrid">
            {data.map((a, i) => {
              return (
                <a
                  href={`/order/Fast-Sub/step2/${replacedString}/${props.state}/${a.id}`}
                >
                  <div className="CHM_faststep2DetaileCard">
                    <div className="CHM_faststep2DetaileCardImg">
                      <img src={img}></img>
                    </div>
                    <div className="CHM_faststep2DetaileCardKname">
                      {a.Kname}
                    </div>
                    <div className="CHM_faststep2DetaileCardEname">
                      {a.Ename}
                    </div>
                    <div className="CHM_faststep2DetaileCardKcal">
                      {a.kcal}kcal
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      <Link to="/order/Fast-Sub/step3">다음 스텝으로</Link>
    </>
  );
}

export default Detail;
