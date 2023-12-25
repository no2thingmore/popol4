import { useEffect, useState } from "react";
import img from "./sandwich.png";
import Result2 from "./result2";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

function Result(props) {
  //props로 상품 종류와 id를 가져와 정확한 상품 추척
  const { product } = useParams();
  const { id } = useParams();
  const [show, setShow] = useState("");
  let category = product;

  const [추천메뉴, set추천메뉴] = useState("");

  const filterdata = props.data.filter((a) => a.id == id && a.kinds == product);
  console.log(filterdata);

  if (product == 0) {
    category = "샌드위치";
  } else if (product == 1) {
    category = "랩ㆍ기타";
  } else if (product == 2) {
    category = "샐러드";
  } else if (product == 3) {
    category = "아침메뉴";
  } else if (product == 4) {
    category = "스마일 썹";
  } else if (product == 5) {
    category = "단체메뉴";
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/ingreDient`)
      .then((res) => {
        console.log("db조회 완료");
        console.log("ingreDient: ",res.data);
        set추천메뉴(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

  return (
    <>
      {filterdata.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="CHM_faststep2ResultBox">
          <div className="CHM_faststep2ResultGrid">
            <div className="CHM_faststep2ResultImg">
              <img src={API_URL + "/upload/" + filterdata[0].image_url} style={{maxHeight:"20vw"}}></img>
            </div>
            <div className="CHM_faststep2ResultTitle">
              <div className="CHM_faststep2ResultType">{category}</div>
              <div className="CHM_faststep2ResultKname">
                {filterdata[0].kname}
              </div>
              <div className="CHM_faststep2ResultEname">
                {filterdata[0].ename}
              </div>
              <div className="CHM_faststep2ResultContent">
                {filterdata[0].coment}
              </div>
            </div>
          </div>
          <div className="CHM_faststep2ResultpotassiumTitle">영양성분표</div>
          <div className="CHM_potassiumGridBox">
            <div className="CHM_potassiumGrid1">
              <div>중량(g)</div>
              <div>열량(kcal)</div>
              <div>단백질(g)</div>
              <div>포화지방(g)</div>
              <div>당류(g)</div>
              <div>나트륨(mg)</div>
            </div>
            <div className="CHM_potassiumGrid2">
              <div>{filterdata[0].ingred_gram}</div>
              <div>{filterdata[0].ingred_kcal}</div>
              <div>{filterdata[0].ingred_protein}</div>
              <div>{filterdata[0].ingred_fat}</div>
              <div>{filterdata[0].ingred_sugars}</div>
              <div>{filterdata[0].ingred_salt}</div>
            </div>
          </div>
          <div className="CHM_potassiumSubContent">
            <div>
              ※ 15cm 샌드위치의 영양 정보는 기본 야채 5종(양상추, 토마토, 오이,
              피망, 양파), 15cm 위트 브레드 및 제품에 따른 미트류가 포함되어
              있으며, 치즈와 소스는 제외됩니다.
            </div>
            <div>
              ※ 샐러드의 영양 정보는 기본 야채 5종(양상추, 토마토, 오이, 피망,
              양파) 및 제품에 따른 미트류가 포함되어 있으며, 치즈와 소스는
              제외됩니다.
            </div>
            <div>
              ※ 단, 메뉴명에 ‘치즈’가 포함되는 경우 치즈의 영양정보도
              포함됩니다.
            </div>
            <div>
              ※ 랩, 그릴드 랩의 영양 정보는 치즈와 소스를 포함한 고정 레시피를
              기준으로 합니다.
            </div>
            <div>
              ※ 아침메뉴의 영양 정보는 15cm 위트 브레드 및 제품에 따른 미트류,
              야채, 아메리칸 치즈가 포함되어 있으며, 소스는 제외됩니다.
            </div>
            <div>
              ※ 영양 정보표에 표시된 제품의 영양 정보/중량은 표준 레시피를
              기준으로 하나, 계절의 변화, 공급사의 변화, 원재료의 수급 상황 및
              제품 제조시에 발생하는 중량의 차이 등에 따라 실제 제공되는 제품의
              영양 정보/중량과 차이가 있을 수 있습니다.
            </div>
            <div>※ 괄호 안 %는 1일 영양소 기준치에 대한 비율입니다.</div>
            <div>
              ※ 매장에 따라 제공 방식(찹 샐러드/스파이럴 샐러드)이 상이할 수
              있습니다.
            </div>
          </div>
          {show === "" ? (
            <div className="CHM_faststep2ResultCart">
              <div
                className="CHM_faststep2ResultCartBtn3"
                onClick={() => {
                  setShow("show");
                }}
              >
                주문하기 <i class="fa-solid fa-check"></i>
              </div>
            </div>
          ) : (
            ""
          )}
          {show === "show" ? (
            <div>
              <Result2 filterdata={filterdata} 추천메뉴={추천메뉴}></Result2>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Result;
