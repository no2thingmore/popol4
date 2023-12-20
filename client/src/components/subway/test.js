import React, { useEffect, useState, Component } from "react";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import styled from "styled-components";
import './test.css';
import $ from 'jquery';
import slide_img_1 from './art_images/img_sandwich_artist_slider01.jpg';
import slide_img_2 from './art_images/img_sandwich_artist_slider02.jpg';
import slide_img_3 from './art_images/img_sandwich_artist_slider03.jpg';
import slide_img_4 from './art_images/img_sandwich_artist_slider04.jpg';
import slide_img_5 from './art_images/img_sandwich_artist_slider05.jpg';
import * as img_slide_fnc from './img_slide_fnc.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Test(){
  const [slideData, setSlideData] = useState([]);
  
  useEffect(() => {
    //설정페이지에서 슬라이드 이미지, 텍스트를 수정하면 반영되게 하고 미리 렌더링하기 위함
    const slide_items = [
      {
        imgURL: './art_images/img_sandwich_artist_slider01.jpg',
        title: "Best Artist",
        text: "샌드위치 아티스트™는 언제나 완벽한 샌드위치를 만듭니다."
      },
      {
        imgURL: './art_images/img_sandwich_artist_slider02.jpg',
        title: "Best Fresh Keeper",
        text: "샌드위치 아티스트™는 각종 재료의 신선함과 매장의 청결을 철저하게 관리합니다."
      },
      {
        imgURL: './art_images/img_sandwich_artist_slider03.jpg',
        title: "Best Service Professional",
        text: "샌드위치 아티스트™는 항상 고객을 우선으로 생각하며 고객이 무엇을 원하는지 경청합니다."
      },
      {
        imgURL: './art_images/img_sandwich_artist_slider04.jpg',
        title: "Best Team Member",
        text: "샌드위치 아티스트™는 최고의 팀원으로서 고객에게 최고의 경험을 제공하기 위해 다른 팀원들과 함께 노력합니다."
      },
      {
        imgURL: './art_images/img_sandwich_artist_slider05.jpg',
        title: "Best Artist",
        text: "LE SSERAFIM은 언제나 완벽한 무대를 만듭니다."
      },
    ];
    setSlideData(slide_items);
    setViewSlide(0);
  }, []); // 처음 한 번만 실행
  const [viewSlide, setViewSlide] = useState(0);


  // 다음 슬라이드
  const nextSlide = () => {
    console.log("다음");
    setViewSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };
  // 이전 슬라이드
  const prevSlide = () => {
    console.log("이전");
    setViewSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };
  
  const click_dot = (index) => {
    console.log(index + "번 버튼");
    setViewSlide(index);
  };








  // 슬릭 사용
  // const [viewSlide, setViewSlide] = useState(0);




  // const settings = {
  //   speed: 500,
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   arrow: true,
  //   afterChange: (index) => setViewSlide(index),
  //   // prevArrow : "<a className='bt_prev' >Prev</a>",
  //   // nextArrow : "<a className='bt_next' >Next</a>"
  // };

  // const [activeIndex, setActiveIndex] = useState(0);
  // // 이전 슬라이드
  // const prevSlide = () => {
  //   console.log("이전 슬라이드");
  //   setViewSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  // };
  // // 다음 슬라이드
  // const nextSlide = () => {
  //   console.log("다음 슬라이드");
  //   setViewSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  // };


// 선언
// const slide_list = document.querySelector('.slide_li');
// const slide_items = document.querySelectorAll('.slide_li_item');
// const slide_arrow = document.querySelector('.slide_ctl_Arrow');
// const paginations = document.querySelector('.slide_ctl_Dot');
// const lastIndex = slide_items.length - 1;
// let selected = 0;


// const setTransition = (value) => {
//   slide_list.style.transition = value;
// };

// const setTranslate = ({ index, reset }) => {
//   if (reset) slide_list.style.transform = `translate(-${slide_list.clientWidth}px, 0)`;
//   else slide_list.style.transform = `translate(-${(index + 1) * slide_list.clientWidth}px, 0)`;
// };

// --------------------------------------
// const list = document.querySelector('.slide_li');
// const items = document.querySelectorAll('.slide_li_item');
// const buttons = document.querySelector('.slide_ctl_Arrow');
// const paginations = document.querySelector('.slide_ctl_Dot');
// const lastIndex = items.length - 1;
// let selected = 0;
// let interval;


// --------------------------------------




// 임시 클릭확인 코드
// const [click_btn, setClick_btn] = useState();
// const click_what = (e) => {
//   const intxt = e.target.textContent;
//   setClick_btn(intxt);
//   console.log(intxt + '버튼 클릭');
// }

// 1. 슬라이드 버튼 함수


// let x_Coordinates = 0;
// const [arrow, setArrow] = useState();
//   const slide_act = (e) => {
//     let direction = e.target.className;
//     setArrow(direction);
//     console.log('방향 = ' + direction);
//     if(direction === 'bt_prev') {
//       console.log('이전 슬라이드');
//       x_Coordinates += 900;
//       console.log('x = ' + x_Coordinates);
//       selected -= 1;
//     }
//     else if(direction === 'bt_next') {
//       console.log('다음 슬라이드');
//       x_Coordinates -= 900;
//       console.log('x = ' + x_Coordinates);
//     }

//   }
  // 점을 눌렀을 때 해당 슬라이드로 넘어가는 함수

  // 점을 눌렀을 때 클래스명을 바꾸는 함수
  // const [dotStat, setDotStat] = useState();
  
  // function change_dot_class() {
    
  // }

// 맨 앞 뒤 슬라이드 복사, 최초 로딩 시 한번만 실행
// function cloneElement() {
//   slide_list.prepend(slide_items[lastIndex].cloneNode(true));
//   slide_list.append(slide_items[0].cloneNode(true));
//   setTranslate({ reset: true });
// };

// useEffect(()=>{
//   console.log('딱 한번만 실행할거임 로딩됬음');
//   cloneElement();
// },[]);



// 페이지가 로딩되면 1번 슬라이드를 보이게
// const [isLoad,setIsLoad]= useState(true);
// useEffect(() => {
//   if (!isLoad) {
//     setTimeout(() => {

//     }, 400);

//     return () => {

//     };
//   } else {
//     setIsLoad(false);
//   }
// }, [dotStat, isLoad]);
// this usestate로 버튼의 상태
// const dot_class = document.querySelectorAll('.clicked_dot');
// // on ? off ?
// console.log(dot_class);
// const [isActive, setIsActive] = useState(false);
// const click_dot = (e) => {
//   console.log('click dot 실행');
//   // const newArr = Array(dot_class.length).fill(false);
//   // newArr[e] = true;
//   // setIsActive(newArr);
//   if(isActive){
//     setIsActive(false);
//   }
//   else setIsActive(true);
// }


// const element = React.createElement;
// const createDot = () => {
//   console.log("점 생성!");
//   return element('div', {className: 'Dot_item'}, 
//       element('a', {className: 'clicked_dot', onClick: click_dot})
//     )
//   } 
//   ReactDOM.render(createDot(), document.getElementsByClassName('slide_ctl_Dot')[0]);





return(
	<div id="contents">
    <div className="Artist_slide_content">
          <div className="Artist_slide">
            <div className="Artist_slide_viewport" aria-live="polite">
              <ul className="slide_li">
                  {
                    slideData.map((a, i) => (
                      <li key={i}>
                        <div className={`slide_img ${i === viewSlide ? "active" : ""}`}>
                          <img src={a.imgURL} alt={`Slide ${i + 1}`} ></img>
                        </div>
                        <div className= {`slide_info ${i === viewSlide ? "active" : ""}`}
                        >
                          <strong className="slide_info_tit">
                            {a.title}
                          </strong>
                          <p className="slide_info_txt">
                            {a.text}
                            </p>
                        </div>
                      </li>
                    ))
                  }



              
                {/* <li className="slide_li_item">
                  <div className="slide_img">
                    <img src={slide_img_1}></img>
                  </div>
                  <div className="slide_info">
                    <strong className="slide_info_tit">Best Artist</strong>
                    <p className="slide_info_txt">
                    샌드위치 아티스트™는
                    <br />
                    언제나 완벽한 샌드위치를 만듭니다.
                    </p>
                  </div>
                </li>
                <li className="slide_li_item">
                  <div className="slide_img">
                    <img src={slide_img_2}></img>
                  </div>
                  <div className="slide_info">
                    <strong className="slide_info_tit">Best Fresh Keeper</strong>
                    <p className="slide_info_txt">
                    샌드위치 아티스트™는 각종 재료의 신선함과
                    <br />
                    매장의 청결을 철저하게 관리합니다.
                    </p>
                  </div>
                </li>
                <li className="slide_li_item">
                  <div className="slide_img">
                    <img src={slide_img_3}></img>
                  </div>
                  <div className="slide_info">
                    <strong className="slide_info_tit">Best Service Professional</strong>
                    <p className="slide_info_txt">
                    샌드위치 아티스트™는 항상 고객을 우선으로 생각하며
                    <br />
                    고객이 무엇을 원하는지 경청합니다.
                    </p>
                  </div>
                </li>
                <li className="slide_li_item">
                  <div className="slide_img">
                    <img src={slide_img_4}></img>
                  </div>
                  <div className="slide_info">
                    <strong className="slide_info_tit">Best Team Member</strong>
                    <p className="slide_info_txt">
                    샌드위치 아티스트™는 최고의 팀원으로서 고객에게 최고의 경험을
                    <br />
                    제공하기 위해 다른 팀원들과 함께 노력합니다.
                    </p>
                  </div>
                </li>
                <li className="slide_li_item">
                  <div className="slide_img">
                    <img src={slide_img_5}></img>
                  </div>
                  <div className="slide_info">
                    <strong className="slide_info_tit">Best Artist</strong>
                    <p className="slide_info_txt">
                    LE SSERAFIM은
                    <br />
                    언제나 완벽한 무대를 만듭니다.
                    </p>
                  </div>
                </li> */}
              </ul>

            </div>

            <div className="slide_ctl">
              <div className="slide_ctl_Arrow">
                <a className="bt_prev" onClick={prevSlide}>Prev</a>
                <a className="bt_next" onClick={nextSlide}>Next</a>
              </div>

              <div className="slide_ctl_Dot">
                {
                  slideData.map((a, i) => {
                    <div className="Dot_item">
                      <a className={`clicked_dot ${i === viewSlide ? "on" : ""}
                      `} onClick={click_dot}
                      >{i + 1}</a>
                    </div>
                  })
                }

                {/* <div className="Dot_item"><a href="#" className={isActive ? 'clicked_dot on' : 'clicked_dot'} onClick={click_dot}>1</a></div>
                <div className="Dot_item"><a href="#" className={isActive ? 'clicked_dot on' : 'clicked_dot'} onClick={click_dot}>2</a></div>
                <div className="Dot_item"><a href="#" className={isActive ? 'clicked_dot on' : 'clicked_dot'} onClick={click_dot}>3</a></div>
                <div className="Dot_item"><a href="#" className={isActive ? 'clicked_dot on' : 'clicked_dot'} onClick={click_dot}>4</a></div>
                <div className="Dot_item"><a href="#" className={isActive ? 'clicked_dot on' : 'clicked_dot'} onClick={click_dot}>5</a></div> */}
              </div>
            </div>
          </div>
    </div>
  </div>
  )
}
export default Test;