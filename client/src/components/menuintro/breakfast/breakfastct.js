import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

function Breakfastct(props) {
  const propsdata = props.data.filter((a) => a.kinds === 3 && a.status === 0)
  const [select, setSelect] = useState("All");
  const categories = ["All", 10, 11];

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
    <div style={{position: "relative"}}>
      <div className="CHM_subSelectbar">
        <div className="CHM_breakfastSubSelectList">
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
          {filterdata.map((a, i) => {
            return (
              <div className={"CHM_selectCard start " + end}>
                <Link to={`/menuIntro/3/${a.id}`}>
                  <div className="CHM_selectBakcCard">
                    <div>
                      <div className="CHM_selectBackCardKname">{a.kname}</div>
                      <div className="CHM_selectBackCardEname">{a.ename}</div>
                      <div className="CHM_selectBackCardContent">
                        {a.coment}
                      </div>
                    </div>
                    <div className="CHM_selectBackCardIcon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </Link>

                <div className="CHM_selectCardImg">
                  <img src={API_URL + "/upload/" + a.image_url} width="100%" style={{maxHeight: "14vw"}}></img>
                </div>
                <div className="CHM_selectCardKname">{a.kname}</div>
                <div className="CHM_selectCardEname">{a.ename}</div>
                <div className="CHM_selectCardkcal">{a.ingred_kcal} kcal</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Breakfastct;

function getCategoryText(category) {
  switch (category) {
    case "All":
      return "All";
    case 10:
      return "샌드위치";
    case 11:
      return "랩";
  }
}