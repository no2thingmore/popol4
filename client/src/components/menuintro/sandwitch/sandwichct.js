import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

function Sandwitchct(props) {
  const propsdata = props.data.filter((a) => a.kinds === 0 && a.status === 0)
  const [select, setSelect] = useState("All");
  const categories = ["All", 0, 1, 2, 3];

  let filterdata;
  
  if(select == "All"){
    filterdata = propsdata
  } else {
    filterdata = propsdata.filter((a) => select === a.tags)
  }
  
  const handleCategoryClick = (category) => {
    setSelect(category);
  };

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      setTimeout(() => {
        setEnd("end");
      }, 200);

      return () => {
        setEnd("end2");
      };
    } else {
      setIsInitialLoad(false);
    }
  }, [select, isInitialLoad]);


  return (
    <div style={{ position: "relative" }}>
      <div className="CHM_subSelectbar">
        <div className="CHM_sandwichSubSelectList">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={select === category ? { color: "#009223" } : {}}
            >
              {getCategoryText(category)}
            </div>
          ))}
        </div>
      </div>
      <div className="CHM_selectcontent">
        <div className="CHM_selectcontentGridBox">
          {filterdata.map((item) => (
            <div key={item.id} className={"CHM_selectCard start " + end}>
              <Link to={`/menuIntro/0/${item.id}`}>
                <div className="CHM_selectBakcCard">
                  <div>
                    <div className="CHM_selectBackCardKname">{item.kname}</div>
                    <div className="CHM_selectBackCardEname">{item.ename}</div>
                    <div className="CHM_selectBackCardContent">{item.coment}</div>
                  </div>
                  <div className="CHM_selectBackCardIcon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </Link>
              <div className="CHM_selectCardImg">
                <img src={API_URL + "/upload/" + item.image_url} width="100%" alt={item.kname} style={{maxHeight: "14vw"}}></img>
              </div>
              <div className="CHM_selectCardKname">{item.kname}</div>
              <div className="CHM_selectCardEname">{item.ename}</div>
              <div className="CHM_selectCardkcal">{item.ingred_kcal} kcal</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sandwitchct;

function getCategoryText(category) {
  switch (category) {
    case "All":
      return "All";
    case 0:
      return "클래식";
    case 1:
      return "프레시&라이트";
    case 2:
      return "프리미엄";
    case 3:
      return "신제품";
  }
}