import "./noticedetail.css";
import React from "react";

import d1 from "./image/notice_1.jpg";
import { useParams } from "react-router-dom";

function Noticedetail(){
const {id}=useParams();
console.log(id);
    return(
        <div className="n_1_all">
            <div className="n_1_title">
                <h3>써브웨이와 함께하는 JTBC 수목드라마 '이 연애는 불가항력'</h3>
                <p>2023.08.29 14:55</p>
            </div>
            <div className="n_1_image">
                <img src={d1}></img>
                <p>써브웨이와 함께하는 JTBC 수목드라마 '이 연애는 불가항력' 많은 시청 부탁 드립니다.</p>
            </div>
            <div className="n_back_b">
                <button id="n_back_1"><a href="/newsPage/Notice">목록</a></button>
            </div>
        </div>
    )
  }
  
  export default Noticedetail;