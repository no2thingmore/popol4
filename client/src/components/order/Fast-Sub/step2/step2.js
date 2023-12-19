import { useState } from "react";
import Detail from "./detail";
import Result from "./result";
import { Link, useParams, useLocation } from "react-router-dom";
import img from "./sandwich.png"

function Step2() {
  const { product } = useParams();
  const { id } = useParams();
  const { location } = useParams();
  const [state, setState] = useState(product);
  const stateHandel = (a) => {
    setState(a);
  };
  const [data, setData] = useState([
    {
      id: 0,
      admin_id: 1,
      kname: "샌드위치1",
      ename: "sandwitch1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 1,
      ingred_gram: 1,
      ingred_protein: 1,
      ingred_fat: 1,
      ingred_sugars: 1,
      ingred_salt: 1,
      price: 1000,
      tags: 0,
      kinds: 0,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 1,
      admin_id: 1,
      kname: "샌드위치2",
      ename: "sandwitch2",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 0,
      status: 1,
      created_at: "2023-11-13"
    },
    {
      id: 2,
      admin_id: 1,
      kname: "샌드위치3",
      ename: "sandwitch3",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 3,
      ingred_gram: 3,
      ingred_protein: 3,
      ingred_fat: 3,
      ingred_sugars: 3,
      ingred_salt: 3,
      price: 3000,
      tags: 2,
      kinds: 0,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 3,
      admin_id: 1,
      kname: "랩1",
      ename: "wrap1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 1,
      ingred_gram: 1,
      ingred_protein: 1,
      ingred_fat: 1,
      ingred_sugars: 1,
      ingred_salt: 1,
      price: 1000,
      tags: 0,
      kinds: 1,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 4,
      admin_id: 1,
      kname: "랩2",
      ename: "wrap2",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 1,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 5,
      admin_id: 1,
      kname: "샐러드1",
      ename: "salad1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 2,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 6,
      admin_id: 1,
      kname: "아침메뉴1",
      ename: "breakfast1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 3,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 7,
      admin_id: 1,
      kname: "스마일 썹",
      ename: "smilesub1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 4,
      status: 0,
      created_at: "2023-11-13"
    },
    {
      id: 8,
      admin_id: 1,
      kname: "단체메뉴",
      ename: "group1",
      image_url: img,
      coment: "잉~ 앗쌀라말라이꿍~",
      ingred_kcal: 2,
      ingred_gram: 2,
      ingred_protein: 2,
      ingred_fat: 2,
      ingred_sugars: 2,
      ingred_salt: 2,
      price: 2000,
      tags: 1,
      kinds: 5,
      status: 0,
      created_at: "2023-11-13"
    },
  ])

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
