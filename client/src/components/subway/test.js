import React, { useState } from "react";
import './test.css';
import slide_img_1 from './art_images/img_sandwich_artist_slider01.jpg';
import slide_img_2 from './art_images/img_sandwich_artist_slider02.jpg';
import slide_img_3 from './art_images/img_sandwich_artist_slider03.jpg';
import slide_img_4 from './art_images/img_sandwich_artist_slider04.jpg';
import slide_img_5 from './art_images/img_sandwich_artist_slider05.jpg';

function Test() {
  const slideData = [
    {
      imgURL: slide_img_1,
      title: "Best Artist",
      text: "샌드위치 아티스트™는 \r 언제나 완벽한 샌드위치를 만듭니다."
    },
    {
      imgURL: slide_img_2,
      title: "Best Fresh Keeper",
      text: "샌드위치 아티스트™는 각종 재료의 신선함과 매장의 청결을 철저하게 관리합니다."
    },
    {
      imgURL: slide_img_3,
      title: "Best Service Professional",
      text: "샌드위치 아티스트™는 항상 고객을 우선으로 생각하며 고객이 무엇을 원하는지 경청합니다."
    },
    {
      imgURL: slide_img_4,
      title: "Best Team Member",
      text: "샌드위치 아티스트™는 최고의 팀원으로서 고객에게 최고의 경험을 제공하기 위해 다른 팀원들과 함께 노력합니다."
    },
    {
      imgURL: slide_img_5,
      title: "Best Artist",
      text: "LE SSERAFIM은 언제나 완벽한 무대를 만듭니다."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="contents">
      <div className="Artist_slide_content">
        <div className="Artist_slide">
          <div className="Artist_slide_viewport" aria-live="polite" >
            <ul className="slide_li" style={{transform: `translate3d(-${currentSlide * 900}px, 0, 0)` }}>
              {slideData.map((slide, index) => (
                <li className="slide_li_item">
                  <div key={index} className={`slide_img ${index === currentSlide ? "active" : ""}`} >
                  <img src={slide.imgURL} alt={`Slide ${index + 1}`} />
                  </div>
                  <div className={`slide_info ${index === currentSlide ? "active" : ""}`}>
                    <strong className="slide_info_tit">{slide.title}</strong>
                    <p className="slide_info_txt">{slide.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="slide_ctl">
            <div className="slide_ctl_Arrow">
              <a className="bt_prev" onClick={prevSlide}>Prev</a>
              <a className="bt_next" onClick={nextSlide}>Next</a>
            </div>

            <div className="slide_ctl_Dot">
              {slideData.map((_, index) => (
                <div key={index} className="Dot_item">
                  <a
                    className={`clicked_dot ${index === currentSlide ? "on" : ""}`}
                    onClick={() => goToSlide(index)}
                  >
                    {index + 1}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;