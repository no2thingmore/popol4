import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { API_URL } from "../config/contansts";

import axios from "axios";


function Eventct(props) {

  
  const [select, setSelect] = useState("전체");
  const categories = ["전체", "0", "1"];
  const [filteredData, setFilteredData] = useState(props.data);

  let filterdata;

  useEffect(() => {
    if (select === "전체") {
      setFilteredData(props.data);
    } else {
      setFilteredData(props.data.filter((a) => select === a.status));
    }
  }, [select, props.data]);
  
  const handleCategoryClick = (category) => {
    setSelect(category);
  };

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      setTimeout(() => {
        setEnd("end");
      }, 400);

      return () => {
        setEnd("end2");
      };
    } else {
      setIsInitialLoad(false);
    }
  }, [select, isInitialLoad]);

  // 더보기 함수  


  const showmore = () => {
    console.log("클릭");
    const gridItems = document.querySelectorAll('.y_list_item.hide');
      gridItems.forEach(item => {
        item.classList.remove('hide');
    })
  };



  return (
    <div style={{ position: "relative" }}>
      <div className="YMJ_subSelectbar">
        <div className="YMJ2_saladSubSelectList1">
          {categories.map((category) => (
            <div
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={select === category ? { color: "White",borderRadius: "50px",              backgroundColor: "#58006C" } : {}}
            >
              {getCategoryText(category)}
            </div>
          ))}
        </div>
      </div>
      <div className="YMJ_selectcontent">
        <div className="YMJ_selectcontentGridBox">
          {filteredData.map((item) => {
              //날짜 표출시 T이후의 글자 삭제 
            const formattedDate = item.createdAt.split('T')[0];
            return (
              <div className={"YMJ_selectCard start " + end}>
                {/* <Link to={`/ingreDients/freshingredients/${a.id}`}> */}
                <div className="YMJ_selectCardImg">
                  <img src={API_URL+"/upload/"+item.image_url } width="100%" height="180px"></img>
                </div>
                <div className="jsw_selectCardbox">
                  <div className="YMJ_selectCardEname1">{item.noname}</div>
                  <div className="YMJ_selectCardEname1">{item.title}</div>
                  <div className="YMJ_selectCardEname1">{item.noname}</div>
                  <div className="YMJ_selectCardKname1">{formattedDate}~</div>
                  <div className="YMJ_selectCardEname1">{item.noname}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="y_morebtn">
        <button onClick={showmore}>더보기</button>
      </div>
    </div>
  );
}

export default Eventct;

function getCategoryText(category) {
  switch (category) {
    case "전체":
      return "전체";
    case "0":
      return "진행중인 이벤트"
    case "1":
      return "종료된 이벤트";
    default:
      return "";
  }
}


// <div className="y_all_button">
// <div style={{position: "relative"}}>
//   <div className="YMJ2_subSelectbar">
//     <div className="YMJ2_saladSubSelectList1">
//     {categories.map((category) => (
//         <div
//           key={category}
//           onClick={() => handleCategoryClick(category)}
//           style={select === category ? { color: "White",borderRadius: "50px",backgroundColor: "#58006C" } : {}}
//         >
//           {category}
//         </div>
//       ))}
//     </div>
//   </div>
//   <div className="YMJ_selectcontent">
//     <div className="YMJ_selectcontentGridBox">
//       {data &&  data.map((a, i) => {
//           //날짜 표출시 T이후의 글자 삭제 
//         const formattedDate = a.createdAt.split('T')[0];
//         return (
//           <div className={"YMJ_selectCard start " + end}>
//             {/* <Link to={`/ingreDients/freshingredients/${a.id}`}> */}
//             <div className="YMJ_selectCardImg">
//               <img src={API_URL+"/upload/"+a.image_url } width="100%" height="180px"></img>
//             </div>
//             <div className="jsw_selectCardbox">
//               <div className="YMJ_selectCardEname1">{a.noname}</div>
//               <div className="YMJ_selectCardEname1">{a.title}</div>
//               <div className="YMJ_selectCardEname1">{a.noname}</div>
//               <div className="YMJ_selectCardKname1">{formattedDate}~</div>
//               <div className="YMJ_selectCardEname1">{a.noname}</div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </div>
// <div className="y_morebtn">
//   <button onClick={showmore}>더보기</button>
// </div>

// </div>