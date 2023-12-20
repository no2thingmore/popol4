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
  const clone_slide = [slideData[slideData.length-2] ,slideData[slideData.length-1], ...slideData, slideData[0], slideData[1]];
  const [currentSlide, setCurrentSlide] = useState(2);
  const [noTransition, setNoTransition] = useState(false);

  const nextSlide = () => {
    if(currentSlide === clone_slide.length - 3){
      setCurrentSlide((prev) => (prev === clone_slide.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setNoTransition(true);
        setCurrentSlide(2);
      }, 500);
      setNoTransition(false);
    } else{
      setNoTransition(false);
      setCurrentSlide((prev) => (prev === clone_slide.length - 1 ? 0 : prev + 1));
    }
    console.log(currentSlide);
  };
  
  const prevSlide = () => {
    if(currentSlide === 2){
      setCurrentSlide((prev) => (prev === 0 ? clone_slide.length - 1 : prev - 1));
      setTimeout(() => {
        setNoTransition(true);
        setCurrentSlide(clone_slide.length - 3);
      }, 500);
      setNoTransition(false);
    } else {
      setNoTransition(false);
      setCurrentSlide((prev) => (prev === 0 ? clone_slide.length - 1 : prev - 1));
    }
    console.log(currentSlide);
  };
  
  const goToSlide = (index) => {
      setNoTransition(false);
      if (index === 1){
      console.log(index);
      setTimeout(() => {
        setCurrentSlide(clone_slide.length - 2);
      }, 0);
    }
    else if(index === clone_slide.length - 2){
      console.log(index);
      setTimeout(() => {
        setCurrentSlide(1);
      }, 0);
    }
    else {
      console.log(index);
      setCurrentSlide(index);
    }
  };

  return (
    <div id="contents">
      <div className="Artist_slide_content">
        <div className="Artist_slide">
          <div className="Artist_slide_viewport" aria-live="polite" >
            <ul className="slide_li" style={{
              transition: noTransition ? "none" : "transform 0.5s ease",
              transform: `translate3d(-${currentSlide * 900}px, 0, 0)` ,
              }}>
              {clone_slide.map((slide, index) => (
                <li className="slide_li_item">
                  <div key={index} className={`slide_img ${index === currentSlide || (currentSlide === index + slideData.length || currentSlide === index - slideData.length) ? "active" : ""}`} >
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
              {clone_slide.map((_, index) => (
                (index > 1 && index < clone_slide.length - 2) &&(
                <div key={index} className="Dot_item">
                  <a
                    className={`clicked_dot ${index === currentSlide || (currentSlide === index + slideData.length || currentSlide === index - slideData.length)? "on" : ""}`}
                    onClick={() => goToSlide(index)}
                  >
                    {index + 1}
                  </a>
                </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Test;






























