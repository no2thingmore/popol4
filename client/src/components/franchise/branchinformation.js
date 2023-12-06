import "./branchinformation.css";
import React, { useState, useEffect } from "react";

function BranchInformation() {
  const [menu, setMenu] = useState("써브웨이 프랜차이즈");
  const [end, setEnd] = useState("");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
  }, [menu]);

  return(
    <div className="branchinformation">
      <h1 id="title2">지사안내</h1>
      <div className="branchinformation_container">
        <div className="button_css">
          <button
            className={menu === "써브웨이 프랜차이즈" ? "active" : "noactive"}
            onClick={() => MenuClick("서울")}
          >
            서울
          </button>
          <button
            className={menu === "써브웨이 프랜차이즈" ? "active" : "noactive"}
            onClick={() => MenuClick("수도권")}
          >
            수도권
          </button>
          <button
            className={menu === "써브웨이 프랜차이즈" ? "active" : "noactive"}
            onClick={() => MenuClick("지방")}
          >
            지방
          </button>
        </div>
        <div className="button_info">
          {menu === "서울" && (
            <div className={"start " + end}>
              <div className="jh_seoul">
                
              </div>
            </div>
          )}

          {menu === "수도권" && (
            <div className={"start " + end}>
              <div className="jh_center">
                
              </div>
            </div>
          )}

          {menu === "지방" && (
            <div className={"start " + end}>
              <div className="jh_country">
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  

}

export default BranchInformation;