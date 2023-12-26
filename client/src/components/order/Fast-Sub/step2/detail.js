import { Link, useParams } from "react-router-dom";
import img from "./sandwich.png";
import { useState } from "react";
import Result from "./result";
import { API_URL } from '../../../config/contansts';

function Detail(props) {
  //props를 토대로 데이터 찾기
  const { product } = useParams();
  const { type } = useParams();
  const { location } = useParams();

  const data = props.data
  const filterdata = data.filter((a) => product == a.kinds && a.status === 0)
  console.log("filterdata: ", filterdata);
  

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  return (
    <>
      {type === "Fast-Sub" ? (
        <div className="CHM_faststep2DetaileBox">
          <div className="CHM_faststep2DetaileGrid">
            {filterdata.map((a, i) => {
              return (
                <a
                  href={`/order/Fast-Sub/step2/${replacedString}/${props.state}/${a.id}`}
                >
                  <div className="CHM_faststep2DetaileCard">
                    <div className="CHM_faststep2DetaileCardImg">
                      <img src={API_URL + "/upload/" + a.image_url} style={{maxHeight: "12vw"}}></img>
                    </div>
                    <div className="CHM_faststep2DetaileCardKname">
                      {a.kname}
                    </div>
                    <div className="CHM_faststep2DetaileCardEname">
                      {a.nname}
                    </div>
                    <div className="CHM_faststep2DetaileCardKcal">
                      {a.ingred_kcal}kcal
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
    </>
  );
}

export default Detail;
