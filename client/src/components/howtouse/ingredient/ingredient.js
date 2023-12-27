import { useEffect, useState } from "react";
import "./ingredient.css";
import Freshingredients from './Freshingredients/freshingredients';
import Freshingredientsct from './Freshingredients/freshingredientsct';
import Howtousesubway from '../howtousesubway/howtousesubway';
import Groupmenu from '../groupmenu/groupmenu';
import { useParams, Link } from "react-router-dom";
import { API_URL } from '../../config/contansts';
import axios from 'axios';

// import { useParams, Link } from "react-router-dom";

function Ingredient() {
  const { product } = useParams();
  const [menu, setMenu] = useState(product);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/ingredient/ingreDient`)
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
  
  const handleMenuClick = (menuType) => {
    setMenu(menuType);
  };
  
  const menuItems = [
    { id: "howtousesubway", text: "써브웨이 이용방법" },
    { id: "groupmenu", text: "단체메뉴 이용방법" },
    { id: "freshingredients", text: "신선한 재료소개" },
  ];
  const [isSticky, setIsSticky] = useState(false);
  const [color, setColor] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(prevIsSticky => offset > 200 ? true : false);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenu(product);
    const colors = {
      howtousesubway: "#e85a1c",
      groupmenu: "#0d9133",
      freshingredients: "#07a5e6",
    };
    setColor(colors[product]);
  }, [product]);


  const renderMenuComponent = (component, componentct) => (
    <>
      {component}
      {componentct}
    </>
  );

  return (
    <>
      <div className={`CHM_headerMenutab1${isSticky ? " sticky" : ""}`} style={{ backgroundColor: color, top: isSticky ? 0 : "unset" }}>
        {menuItems.map((menuItem) => (
          <Link to={`/ingreDient/${menuItem.id}`} key={menuItem.id} style={isSticky ? { color: "black" } : {}}>
            <div
              onClick={() => handleMenuClick(menuItem.id)}
              style={
                menu === menuItem.id
                  ? isSticky
                    ? { borderBottom: "0.2vw solid black" }
                    : { borderBottom: "0.2vw solid white" }
                  : {}
              }
            >
              {menuItem.text}
            </div>
          </Link>
        ))}
      </div>

      {menu === "howtousesubway" && renderMenuComponent(<Howtousesubway color={color} />, )}
      {menu === "groupmenu" && renderMenuComponent(<Groupmenu color={color} />, )}
      {menu === "freshingredients" && renderMenuComponent(<Freshingredients color={color} />, <Freshingredientsct data={data}/>)}
    </>
  );
}

export default Ingredient;



// <div className="y_all_button">
// <div style={{position: "relative"}}>
//   <div className="YMJ2_subSelectbar">
//     <div className="YMJ2_saladSubSelectList1">
//     {categories.map((category) => (
//         <div
//           key={category}
//           onClick={() => handleCategoryClick(category)}
//           style={select === category ? { color: "White",borderRadius: "50px",              backgroundColor: "#58006C" } : {}}
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


// </div>




// {filteredData.map((item) => {
//   <div key={item.id} className={"CHM_selectCard start " + end}>
//     {/* <Link to={`/ingreDient/2/${item.id}`}> */}
//       <div className="CHM_selectBakcCard">
//         <div>
//           <div className="CHM_selectBackCardKname">{item.kname}</div>
//           <div className="CHM_selectBackCardEname">{item.ename}</div>
//           <div className="CHM_selectBackCardContent">{item.coment}</div>
//         </div>
//         {/* <div className="CHM_selectBackCardIcon">
//           <i class="fa-solid fa-magnifying-glass"></i>
//         </div> */}
//       </div>
//     {/* </Link> */}
//     <div className="CHM_selectCardImg">
//       <img src={API_URL + "/upload/" + item.image_url} width="100%" alt={item.kname}></img>
//     </div>
//     <div className="CHM_selectCardKname">{item.kname}</div>
//     <div className="CHM_selectCardEname">{item.ename}</div>
//   </div>
// })}
// </div>