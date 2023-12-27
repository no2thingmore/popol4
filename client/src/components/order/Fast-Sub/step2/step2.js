import { useEffect, useState } from "react";
import Detail from "./detail";
import Result from "./result";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../../config/contansts';

function Step2() {
  const { product } = useParams();
  const { id } = useParams();
  const { location } = useParams();
  const [state, setState] = useState(product);
  const stateHandel = (a) => {
    setState(a);
  };

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API_URL}/food/menuintro`)
      .then((res) => {
        console.log("db조회 완료");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

  const encodedString = location;
  const decodedString = decodeURIComponent(encodedString);
  const replacedString = decodedString.replace(/%20/g, " ");

  return (
    <div>
      <div className="CHM_faststep2SelectBox">
        <Link to={`/order/Fast-Sub/step2/${replacedString}/0/Nan`}>
          <div
            style={state === "0" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("0")}
          >
            샌드위치
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/1/Nan`}>
          <div
            style={state === "1" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("1")}
          >
            랩ㆍ기타
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/2/Nan`}>
          <div
            style={state === "2" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("2")}
          >
            샐러드
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/3/Nan`}>
          <div
            style={state === "3" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("3")}
          >
            아침메뉴
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/4/Nan`}>
          <div
            style={state === "4" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("4")}
          >
            스마일썹
          </div>
        </Link>
        <Link to={`/order/Fast-Sub/step2/${replacedString}/5/Nan`}>
          <div
            style={state === "5" ? { backgroundColor: "#009223", color: "white" } : {}}
            onClick={() => stateHandel("5")}
          >
            단체메뉴
          </div>
        </Link>
      </div>

      {id === "Nan" ? <Detail state={state} data={data}></Detail> : ""}
      {id !== "Nan" ? <Result data={data}></Result> : ""}
    </div>
  );
}

export default Step2;
