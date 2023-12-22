import React, { ReactDOM, useState, useRef } from "react";
import $ from 'jquery';
import styled from "styled-components";
import './apply.css';

import slide_img_1 from './art_images/img_sandwich_artist_slider01.jpg';
import slide_img_2 from './art_images/img_sandwich_artist_slider02.jpg';
import slide_img_3 from './art_images/img_sandwich_artist_slider03.jpg';
import slide_img_4 from './art_images/img_sandwich_artist_slider04.jpg';
import slide_img_5 from './art_images/img_sandwich_artist_slider05.jpg';
import icon_1 from './art_images/icon_sw_artist_point01.png';
import icon_2 from './art_images/icon_sw_artist_point02.png';
import icon_3 from './art_images/icon_sw_artist_point03.png';
import icon_4 from './art_images/icon_sw_artist_point04.png';
import WakDo from './art_images/GgamJjickYee.mp4';
import axios from "axios";




function Apply(){
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


  //다음슬라이드로 이동하는 함수 (마지막 슬라이드에서 첫번째로 이동함) 
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
  

  // 이전슬라이드로 이동하는 함수
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
  
  // 지정된 인덱스로 이동하는 함수
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
  return(
    <div id="Artist_Main_Div">
      <div className="Artist_Main_Grid">
        {/* 헤더 */}
        <div className="Head_Line">
        <h2 className="Head_txt">
            <em className="em_txt">GREAT PEOPLE, GREAT BRAND, </em>
            <br />
            GREAT OPPORTUNITY
          </h2>
          <p id="Head_subtitle">샌드위치 아티스트™는 고객에게 최고의 경험을 제공하기 위해
          <br />
          써브웨이 NOW 핵심요소 를 실행합니다.
          </p>
        </div>
        {/* 슬라이드 */}
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
        {/* 핵심요소 */}
        <div className="Point">
          <h3>써브웨이 NOW 핵심 요소</h3>
          <ul className="Point_li">
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_1}></img>
                <span>Guest First</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_2}></img>
                <span>Great Food</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_3}></img>
                <span>Great Store</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_4}></img>
                <span>Great Team</span>
              </div>
            </li>
          </ul>
        </div>
        {/* 커리어 요약 */}
        <div className="career_path">
          <h3>Career Path</h3>
          <ol className="path_point">
            <li>
							<span className="point_num">01</span>
							<strong>Sandwich<br />Artist</strong>
							<div className="view_deep">
                <p>상세보기</p>
              </div>
							<div className="layer_view">
								<p>
									샌드위치 아티스트™는 고객에게 <br />
									최고의 경험을 제공하기 위해<br />
									매장 내 다양한 업무를 실행합니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">02</span>
							<strong>Senior Sandwich<br />Artist</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									선임 샌드위치 아티스트™는<br />
									매장 운영 및 관리 업무를<br />
									습득함으로써 매니저로<br />
									성장의 기회를 갖게 됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">03</span>
							<strong>Shift<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									시프트 매니저는 함께 일하는<br />
									샌드위치 아티스트™의 업무를 조율하고<br />
									매니저의 업무를 지원하는 역할을<br />
									실행합니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">04</span>
							<strong>Assistant<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									한 매장을 책임지고 관리하는 매니저가<br />
									되기 위한 이전 단계로, 매장운영과 관련된<br />
									중요한 업무에 대해 본격적으로 책임지기<br />
									시작하는 직급입니다.<br />
									써브웨이 트레이닝 센터에서 진행되는<br />
									매니저 교육을 통해 직원관리,<br />
									매출 및 시스템 관리에 대해 체계적으로<br />
									배울 수 있는 기회가 제공됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">05</span>
							<strong>Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									매장 운영 및 관리의 책임자로서<br />
									역할을 실행하며 온라인 학습 과정을 통해<br />
									지속적으로 업무능력 향상의 기회가<br />
									제공됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">06</span>
							<strong>Multi-Unit<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									한 개 이상의 매장을<br />
									운영 및 관리하는<br />
									매니저입니다.
								</p>
							</div>
						</li>
          </ol>
        </div>
        {/* 채용지원 */}
        <div className="recruit">
          <div className="recruit_head">
            <h3>채용지원</h3>
            <p>최고의 샌드위치 아티스트™에 도전하세요</p>
          </div>
          <div className="recruit_link">
            <div className="recruit_link_li">
              <div className="recruit_link_li_item">
                <a href="http://www.alba.co.kr/search/Search.asp?srchType=ALL&clsType=search&EasySearch=mainSearch&wsSrchWord=%BD%E1%BA%EA%BF%FE%C0%CC&wsSrchWordarea=" target="_blank">
                  <div className="recruit_logo"></div>
                  <strong>알바천국 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
              <div className="recruit_link_li_item">
                <a href="http://www.albamon.com/search?Keyword=%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4" target="blank">
                  <div className="recruit_logo"></div>
                  <strong>알바몬 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
              <div className="recruit_link_li_item">
                <a href="/subwayRecruit" target="blank">
                  <div className="recruit_logo"></div>
                  <strong>홈페이지 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply;