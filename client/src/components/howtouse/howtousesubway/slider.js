import React, { useState, useEffect } from 'react';
import './slider.css'; // 스타일 파일을 불러옵니다.
import './storeorder.css'

// 이미지 파일들
import order_step1 from "../image/img/img_store_order01.png";
import order_step2 from "../image/img/img_store_order02.png";
import order_step3 from "../image/img/img_store_order03.png";
import order_step4 from "../image/img/img_store_order04.png";
import order_step5 from "../image/img/img_store_order05.png";

// const imageFiles = [
//   {order_step5}, 
//   {order_step4}, 
//   {order_step3}, 
//   {order_step2}, 
//   {order_step1}];

const imageFiles = [
  {
    img: order_step5,
    title: "메뉴 선택",
    content: "메뉴를 고르세요.",
    content2: "샌드위치(15cm 또는 30cm)와",
    content3: "샐러드 중 선택 가능합니다.",
    button: "샌드위치 메뉴",
    button2: "샐러드 메뉴",
    link : '../../menuintro/sandwich',
    link2 : '../../menuintro/salad'
  },
  {
    img: order_step4,
    title: "빵 선택 (샐러드 선택 시 제외)",
    content: "매장에서 직접 구운 6가지 종류 중",
    content2: "고객님이 원하는 빵으로",
    content3: "추가비용 없이 선택 가능합니다.",
    button: "빵 종류",
    link : '../../menuintro/salad'
  },
  {
    img: order_step3,
    title: "추가토핑 선택",
    content: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
    content2: "",
    content3: "",
    button: "추가토핑 메뉴",
    link : '../../menuintro/salad'
  },
  {
    img: order_step2,
    title: "야채&소스 선택",
    content: "나만의 스타일을 완성하는 단계!",
    content2: "원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.",
    content3: "오늘의 기분에 맞는 소스를 선택해주세요.",
    button: "야채 종류",
    button2: "소스 종류",
    link : '../../menuintro/salad',
    link2 : '../../menuintro/salad'
  },
  {
    img: order_step1,
    title: "세트선택",
    content: "세트로 구매하면 할인혜택을 받으실 수 있습니다.",
    content2: "세트로 더욱 든든하고 알차게 즐기세요.",
    content3: "",
    button: "스마일 썸"
    ,link : '../../menuintro/smile'
  },
];

const Slider = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  

  useEffect(() => {
    const slidesLength = imageFiles.length;
    const sliderHeight = document.querySelector(".slider-container").clientHeight;

    document.querySelector(".left-slide").style.top = `-${(slidesLength - 1) * 100}vh`;
    document.querySelector(".right-slide").style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    document.querySelector(".left-slide").style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  }, [activeSlideIndex]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 초기 슬라이드를 표시하기 위해 activeSlideIndex를 0으로 설정
    setActiveSlideIndex(0);
  }, []);

  const changeSlide = (direction) => {
    const slidesLength = imageFiles.length;

    if (direction === "up") {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
    }
  };

  return (
    <div>
      <div className="container">
        <div id='step_content'>
          <ul>
            <li className='order_active'>
              <div className='order_step'>
                STEP
                <br/>
                <strong>1</strong>
              </div>
            </li>
            <div className='···'>···</div>
            <li className='order_active'>
              <div className='order_step'>
                STEP
                <br/>
                <strong>2</strong>
              </div>
            </li>
            <div className='···'>···</div>
            <li className='order_active'>
              <div className='order_step'>
                STEP
                <br/>
                <strong>3</strong>
              </div>
            </li>
            <div className='···'>···</div>
            <li className='order_active'>
              <div className='order_step'>
                STEP
                <br/>
                <strong>4</strong>
              </div>
            </li>
            <div className='···'>···</div>
            <li className='order_active'>
              <div className='order_step'>
                STEP
                <br/>
                <strong>5</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="slider-container">
          <div className="left-slide">
            {/* 좌측 슬라이드의 내용 */}
            {imageFiles.map((file, index) => (
              <div id='jsw_slide_img' key={index}>
                <img src={file.img} alt={`Step ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="right-slide">
            {/* 우측 슬라이드의 내용 */}
            {imageFiles.map((a, index) => (
              <div key={index}>
                {/* 우측 슬라이드에 추가할 내용 */}
                <div id={`order_step_${index + 1}`}>
                  <li id="li_color">
                    <div className="order_content_step">
                      <ol>
                        <li>
                          <p className="step_num">{`STEP ${index + 1}`}</p>
                          <strong className="step_name">{a.title}</strong>
                          <p className="step_list">
                            {a.content}<br />
                            {a.content2}<br />
                            {a.content3}
                          </p>
                          <div id="menu_link">
                            <a href={a.link}>
                              <span>{a.button}</span>
                              <img src="/" alt="" />
                            </a>
                            {/* link2가 있는 경우에만 버튼을 활성화 */}
                            {a.link2 && (
                              <a href={a.link2}>
                                <span>{a.button2}</span>
                                <img src="/" alt="" />
                              </a>
                            )}
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                </div>
              </div>
            ))}
          </div>
          <div className="action-buttons">
            <button className="down-button" onClick={() => changeSlide("down")}>
              <i className="fas fa-arrow-down"></i>
            </button>
            <button className="up-button" onClick={() => changeSlide("up")}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

//  <div id='order_step_1'> 
// <li id='li_color'>
//   <div className='order_content_step'>
//     <ol>
//       <li>
//         <p className='step_num'>STEP 1</p>
//         <strong className='step_name'>빵 선택<span>(샐러드 선택 시 제외)</span></strong>
//         <p className='step_list'>
//           매장에서 직접 구운 6가지 종류 중. <br/>
//           고객님이 원하는 빵으로 <br/>
//           추가비용 없이 선택 가능합니다.
//         </p>
//         <div id='menu_link'>
//           <a href='../../menuintro/sandwich'><span>빵 종류</span><img src=''/></a>
//         </div>
//       </li>
//     </ol>
//   </div>
// </li>
// </div>
// <div id='order_step_2'> 
// <li id='li_color'>
//   <div className='order_content_step'>
//     <ol>
//       <li>
//         <p className='step_num'>STEP 2</p>
//         <strong className='step_name'>빵 선택<span>(샐러드 선택 시 제외)</span></strong>
//         <p className='step_list'>
//           매장에서 직접 구운 6가지 종류 중. <br/>
//           고객님이 원하는 빵으로 <br/>
//           추가비용 없이 선택 가능합니다.
//         </p>
//         <div id='menu_link'>
//           <a href='../../menuintro/sandwich'><span>빵 종류</span><img src=''/></a>
//         </div>
//       </li>
//     </ol>
//   </div>
// </li>
// </div>
// <div id='order_step_3'>
// <li id='li_color'>
//   <div className='order_content_step'>
//     <ol>
//       <li>
//         <p className='step_num'>STEP 3</p>
//         <strong className='step_name'>추가토핑 선택</strong>
//         <p className='step_list'>
//           나만의 메뉴를 더욱 풍성하게 즐기세요. <br/>
//         </p>
//         <div id='menu_link'>
//           <a href='../../menuintro/sandwich'><span>추가토핑 메뉴</span><img src=''/></a>
//         </div>
//       </li>
//     </ol>
//   </div>
// </li>
// </div>
// <div id='order_step_4'>
// <li id='li_color'>
//   <div className='order_content_step'>
//     <ol>
//       <li>
//         <p className='step_num'>STEP 4</p>
//         <strong className='step_name'>야채&소스 선택</strong>
//         <p className='step_list'>
//           나만의 스타일을 완성하는 단계! <br/>
//           원하지 않는 야채는 빼고 좋아하는 야채는 더하세요. <br/>
//           오늘의 기분에 맞는 소스를 선택해주세요.
//         </p>
//         <div id='menu_link'>
//           <a href='../../menuintro/sandwich'><span>야채 종류</span><img src=''/></a>
//           <a href='../../menuintro/salad'><span>소스 종류</span><img src=''/></a>
//         </div>
//       </li>
//     </ol>
//   </div>
// </li>
// </div>
// <div id='order_step_5'>
// <li id='li_color'>
//   <div className='order_content_step'>
//     <ol>
//       <li>
//         <p className='step_num'>STEP 5</p>
//         <strong className='step_name'>세트 선택</strong>
//         <p className='step_list'>
//           세트로 구매하시면 할인혜택을 <br/>
//           받으실 수 있습니다. 세트로 <br/>
//           더욱 든든하고 알차게 즐기세요
//         </p>
//         <div id='menu_link'>
//           <a href='../../menuintro/sandwich'><span>스마일 썹</span><img src=''/></a>
//         </div>
//       </li>
//     </ol>
//   </div>
// </li>
// </div> 
