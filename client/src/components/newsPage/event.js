import React, { useState } from "react";
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
import xx from "./image/y_xx.jpg";
import yy from "./image/y_yy.jpg";
import zz from "./image/y_zz.jpg";

const images = [painting1, painting2, painting3, painting4];
// const images = [Painting1, Painting2, Painting3];

function Event(){
  
  // 더보기 함수  


  const showmore = () => {
    console.log("클릭");
    const gridItems = document.querySelectorAll('.y_list_item.hide');
      gridItems.forEach(item => {
        item.classList.remove('hide');
    })
  };

  const [event_b, setEvent_b] = useState("전체");
  const b_list = ["전체", "진행중인 이벤트", "종료된 이벤트"];
  const buttonlistClick = (e) => {
    // console.log(e.target.textContent);
    setEvent_b(e.target.textContent);
    
  };

  return(
    <div id="event_all">
      <div className="y_subtitle">
        <h2> 이벤트ㆍ프로모션 </h2>
      </div>

      <div className="y_painting">
        {/* {images.map((image, index) => (
            <img 
                key={index}
                className={`top_slide ${index === currentIndex ? 'active' : ''}`}
                src={image}
                alt={`이미지 ${index + 1}`}
            />
        ))} */}
      </div>

      <div className="y_all_button">
        
        <div className="y_list_button">
          <button className="y_button_l"  onClick={buttonlistClick}>
            전체
          </button>

          <button className="y_button"  onClick={buttonlistClick}>
            진행중인 이벤트
          </button>

          <button className="y_button_r" onClick={buttonlistClick}>
            종료된 이벤트
          </button>
        </div>

        <div className="y_list_all">
          
          <div className="y_list_ongoing">
            
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
          

            <div className="y_list_item hide">  
              <a href="#" >
                <div className="list_photo">
                  <img src={zz}></img>
                </div>
                <div className="list_content">
                  <h3>Lobster Teaser Campaign</h3>
                  <p>이벤트가 종료되었습니다.</p>
                </div>
              </a>
            </div>

            <div className="y_list_item hide">  
              <a href="#" >
                <div className="list_photo">
                  <img src={yy}></img>
                </div>
                <div className="list_content">
                  <h3>2023 슈퍼팝 프로모션</h3>
                  <p>이벤트가 종료되었습니다.</p>
                </div>
              </a>
            </div>

            <div className="y_list_item hide">  
              <a href="#" >
                <div className="list_photo">
                  <img src={xx}></img>
                </div>
                <div className="list_content">
                  <h3>차은우 메뉴 프로모션</h3>
                  <p>이벤트가 종료되었습니다.</p>
                </div>
              </a>
            </div> 
          </div>
        </div>

        <div className="y_morebtn">
          <button onClick={showmore}>더보기</button>
        </div>

      </div>

    </div>

    
  )
}
export default Event;