import React from "react";
import "./event.css";

import painting1 from "./image/painting1.jpg";
import painting2 from "./image/painting2.jpg";
import painting3 from "./image/painting3.jpg";
import painting4 from "./image/painting4.jpg";

import aa from "./image/y_a.jpg";
import bb from "./image/y_b.jpg";
import cc from "./image/y_c.jpg";
import dd from "./image/y_d.jpg";
import ee from "./image/y_e.jpg";
import ff from "./image/y_f.jpg";

// const images = [Painting1, Painting2, Painting3];

function Event(){
  return(
    <div id="event_all">
      <div className="y_subtitle">
        <h2> 이벤트ㆍ프로모션 </h2>
      </div>

      <div className="y_painting">
        <img src={painting1}></img>
        <img src={painting2}></img>
        <img src={painting3}></img>
        <img src={painting4}></img>
      </div>

      <div className="y_all_button">
        <div className="y_list_button">
          <ul className="y_button">
            <li className="y_the_entire">
              <a href="">전체</a>
            </li>
            <li className="y_ongoing">
              <a href="">진행중인 이벤트</a>
            </li>
            <li className="y_termination">
              <a href="">종료된 이벤트</a>
            </li>
          </ul>
        </div>
        <br/>

        <div className="y_list_all">
        
          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={aa}></img>
              </div>
              <div className="list_content">
                <h3>랍스타 컬렉션</h3>
                <p>2023.12.04 ~ </p>
              </div>
            </a>
          </div>

          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={bb}></img>
              </div>
              <div className="list_content">
                <h3>써브웨이 오늘의 수프</h3>
                <p>2023.12.04 ~ </p>
              </div>
            </a>
          </div>

          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={cc}></img>
              </div>
              <div className="list_content">
                <h3>Eat Fresh Feel Good</h3>
                <p>2023.11.01 ~ </p>
              </div>
            </a>
          </div>

          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={dd}></img>
              </div>
              <div className="list_content">
                <h3>스파이시 시리즈</h3>
                <p>2023.09.01 ~ 2023.12.10</p>
              </div>
            </a>
          </div>

          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={ee}></img>
              </div>
              <div className="list_content">
                <h3>고구마 칩 신규 메뉴 출시</h3>
                <p>2022.10.04 ~ 소진 시</p>
              </div>
            </a>
          </div>

          <div className="y_list_item">  
            <a href="#" >
              <div className="list_photo">
                <img src={ff}></img>
              </div>
              <div className="list_content">
                <h3>말이 안 나올 땐 손으로 주문하자!</h3>
                <p>2020.10.16 ~ </p>
              </div>
            </a>
          </div>
            
        </div>


        
        <a>더보기</a>
      
      </div>
    
    </div>
  )
}

export default Event;