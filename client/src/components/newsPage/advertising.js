import "./advertising.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [data, setData] = useState([
    
      {
        id: 1,
        Kname: "랍스터 컬렉션",
        img: ma,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },
      {
        id: 2,
        Kname: "랍스터 컬렉션 15s",
        img: mb,
        videoUrl:"https://www.youtube.com/embed/5gjpeD5OF_M?autoplay=0"
      },
      {
        id: 3,
        Kname: "랍스터 컬렉션 6s",
        img: mc,
        videoUrl:"https://www.youtube.com/embed/-XZXbQydUKQ"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 full",
        img: md,
        videoUrl:"https://www.youtube.com/embed/fF5B1ZH2y7E"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 30s",
        img: me,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 15s",
        img: mf,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 6s A",
        img: mg,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 6s B",
        img: mh,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },
      {
        id: 1,
        Kname: "Eat Fresh Feel Good #2 6s C",
        img: mr,
        videoUrl:"https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
      },

    
  ]);

  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/2cpO9LAe_Ws?si=R1uUzq5vJNNwJhWZ"
  );


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
  }, [isInitialLoad]);

  const handleVideoChange = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return(
    <div className="m_all">
      <div className="m_h2">
        <h2>
          광고영상
        </h2>
      </div>

      <div>
        <div className="m_advertising">
          <iframe 
          width="1500" 
          height="700"
          src={selectedVideo}
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
        </div>
        <div className="m_advertising_list_all">
          <div className="YMJ_selectcontent">
            <div className="YMJ_selectcontentGridBox">
              {data.map((a, i) => {
                return (
                  <div
                    className={"YMJ_selectCard start " + end}
                    key={a.id}
                    onClick={() => handleVideoChange(a.videoUrl)}
                  >

                    <div className="YMJ_selectCardImg">
                      <img src={a.img} width="100%"></img>
                    </div>
                    <img src={go} className="m_play"></img>
                    <div className="YMJ_selectCardEname">{a.Ename}</div>
                    <div className="YMJ_selectCardKname">{a.Kname}</div>
                    <div className="YMJ_selectCardEname">{a.Ename}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Advertising;



{/* <div className="m_advertising_list">
                <div className="m_advertising_Image">
                  <a className="m_image_all" href="#">
                    <img src={go} className="m_play"></img>
                    <img src={ma} className="m_hover_image"></img>
                  </a>
                </div>
                <p>
                  랍스터 컬렉션
                </p>
              </div> */}

          {/* <div className="m_advertising_list">
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
          </div> */}