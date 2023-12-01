import React from "react";
import "./Event.css";

function Event(){
  return(
    <div id="Event_all">
      <div className="Subtitle">
        <h2> 이벤트ㆍ프로모션 </h2>
      </div>

      <div className="Painting">
      {/* 그림 */}
      </div>

      <div id="List">
        <div id="List_button">
          <ul className="Button">
            <li className="the_entire">
              <a href="">전체</a>
            </li>
            <li className="ongoing">
              <a href="">진행중인 이벤트</a>
            </li>
            <li className="Termination">
              <a href="">종료된 이벤트</a>
            </li>
          </ul>
        </div>

        <div id="List">
          <ul className="List_li">
            
            <li>  
              <a href="#" >
                <div className="List_photo">
                  <img src="??"></img>
                </div>
                <div className="List_content">
                  <h3>앙기모띠</h3>
                  <p>2023.11.20 ~ 2023.12.03</p>
                </div>
              </a>
            </li>

            <li>  
              <a href="#" >
                <div className="List_photo">
                  <img src="??"></img>
                </div>
                <div className="List_content">
                  <h3>앙기모띠</h3>
                  <p>2023.11.20 ~ 2023.12.03</p>
                </div>
              </a>
            </li>

            <li>  
              <a href="#" >
                <div className="List_photo">
                  <img src="??"></img>
                </div>
                <div className="List_content">
                  <h3>앙기모띠</h3>
                  <p>2023.11.20 ~ 2023.12.03</p>
                </div>
              </a>
            </li>

          </ul>
        </div>


        
        <a>더보기</a>
      
      </div>
    
    </div>
  )
}

export default Event;