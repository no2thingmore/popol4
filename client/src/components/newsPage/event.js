import { useEffect, useState } from "react";
import axios from "axios";
import "./event.css";

import painting1 from "./image/painting1.jpg";
import painting2 from "./image/painting2.jpg";
import painting3 from "./image/painting3.jpg";
import painting4 from "./image/painting4.jpg";

import { API_URL } from "../config/contansts";

// const images = [painting1, painting2, painting3, painting4];
// const images = [Painting1, Painting2, Painting3];

function Event(){

  // 슬라이드 이미지
  const event_slideData = [
    {
      imgURL: painting1,
      title: "랍스터 컬렉션",
      text: "신선한 리얼 랍스터가 그대로! 올겨울 한정판으로 더욱 특별하게 준비한 써브웨이 랍스터 컬렉션"
    },
    {
      imgURL: painting2,
      title: "써브웨이 오늘의 수프",
      text: "오늘의 수프를 원하는 사이즈로! 샌드위치랑 함께 먹으면 든든하고 맛있썹!"
    },
    {
      imgURL: painting3,
      title: "Eat Fresh Feel Good",
      text: "써브웨이 X 차은우 신선함 가득! 즐거움 가득! 함께하는 이 순간이 즐거워!"
    },
    {
      imgURL: painting4,
      title: "말이 안 나올 땐 손으로 주문하자!",
      text: "말이 안 나올 땐? 손으로 주문하자!!"
    },

  ];

  // 슬라이드

  const clone_slide = [event_slideData[event_slideData.length-2] ,event_slideData[event_slideData.length-1], ...event_slideData, event_slideData[0], event_slideData[1]];
  const [currentSlide, setCurrentSlide] = useState(2);
  const [noTransition, setNoTransition] = useState(false);

  const nextSlide = () => {
      setCurrentSlide((prev) => (prev === clone_slide.length - 1 ? 0 : prev + 1));
      console.log(currentSlide);
    };
  
  
  const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? clone_slide.length - 1 : prev - 1));
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


  // const [data, setData] = useState([]);

  // const [select, setSelect] = useState("전체");
  // const categories = ["전체", "진행중인 이벤트", "종료된 이벤트"];

  // const handleCategoryClick = (category) => {
  //   setSelect(category);
  // };

  // const [end ,setEnd] = useState("");
  // const [isInitialLoad, setIsInitialLoad] = useState(true);

  // const getData = async()=>{
  //   await axios.get(`${API_URL}/event`)
  //   .then((response)=>{
  //     console.log('test',response.data);
  //     setData(response.data)
  //   })
  // } 

  // useEffect(()=>{
  //   getData();
  // },[])

  // useEffect(() => {
  //   if (!isInitialLoad) {
  //     setTimeout(() => {
  //       setEnd("end");
  //     }, 400);

  //     return () => {
  //       setEnd("end2");
  //     };
  //   } else {
  //     setIsInitialLoad(false);
  //   }
  // }, [select, isInitialLoad]);


  

  return(
    <div id="event_all">
      <div className="y_subtitle">
        <h2> 이벤트ㆍ프로모션 </h2>
      </div>

      {/* 슬라이드 */}
      <div className="YMJ_Artist_slide_content">
        <div className="YMJ_Artist_slide">
          <div className="YMJ_Artist_slide_viewport" aria-live="polite" >
            <ul className="YMJ_slide_li" style={{
              transition: noTransition ? "none" : "transform 0.5s ease",
              transform: `translate3d(-${currentSlide * 900}px, 0, 0)` ,
              }}>
              {clone_slide.map((slide, index) => (
                <li className="YMJ_slide_li_item">
                  <div key={index} className={`YMJ_slide_img ${index === currentSlide || (currentSlide === index + event_slideData.length || currentSlide === index - event_slideData.length) ? "active" : ""}`} >
                  <img src={slide.imgURL} alt={`Slide ${index + 1}`} />
                  </div>
                  <div className={`YMJ_slide_info ${index === currentSlide ? "active" : ""}`}>
                    <strong className="YMJ_slide_info_tit">{slide.title}</strong>
                    <p className="YMJ_slide_info_txt">{slide.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="YMJ_slide_ctl">
            <div className="YMJ_slide_ctl_Arrow">
              <a className="YMJ_bt_prev" onClick={prevSlide}>Prev</a>
              <a className="YMJ_bt_next" onClick={nextSlide}>Next</a>
            </div>

            <div className="YMJ_slide_ctl_Dot">
              {clone_slide.map((_, index) => (
                (index > 1 && index < clone_slide.length - 2) &&(
                <div key={index} className="YMJ_Dot_item">
                  <a
                    className={`YMJ_clicked_dot ${index === currentSlide || (currentSlide === index + event_slideData.length || currentSlide === index - event_slideData.length)? "on" : ""}`}
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


)
}
export default Event;



{/* <div className="y_list_button">
  <button className="y_button_l"  onClick={buttonlistClick}>
    전체
  </button>

  <button className="y_button"  onClick={buttonlistClick}>
    진행중인 이벤트
  </button>

  <button className="y_button_r" onClick={buttonlistClick}>
    종료된 이벤트
  </button>
</div> */}


{/* <div className="y_list_item">  
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
</div>  */}