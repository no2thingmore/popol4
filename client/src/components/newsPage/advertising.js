import "./advertising.css";
import React from "react";

import ma from "./image/m_a.jpg";
import mb from "./image/m_b.jpg";
import mc from "./image/m_c.jpg";
import md from "./image/m_d.jpg";
import me from "./image/m_e.jpg";
import mf from "./image/m_f.jpg";
import mg from "./image/m_g.jpg";
import mh from "./image/m_h.jpg";
import mr from "./image/m_r.jpg";
import go from "./image/go.png";

function Advertising(){
  return(
    <div className="m_all">
      <div className="m_h2">
        <h2>
          광고영상
        </h2>
      </div>

      <div>
        <div className="m_advertising">
          <iframe width="1500" height="700" src="https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="m_advertising_list_all">
          
          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={ma} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              랍스터 컬렉션
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mb} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              랍스터 컬렉션 15s
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mc} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              랍스터 컬렉션 6s
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={md} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={me} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full 30s
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mf} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full 15s
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mg} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full 6s A
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mh} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full 6s B
            </p>
          </div>

          <div className="m_advertising_list">
            <div className="m_advertising_Image">
              <a className="m_image_all" href="#">
                <img src={go} className="m_play"></img>
                <img src={mr} className="m_hover_image"></img>
              </a>
            </div>
            <p>
              Eat Fresh Feel Good #2 full 6s C
            </p>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Advertising;