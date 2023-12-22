import { useEffect, useState } from "react";
import axios from "axios";
import "./event.css";

import painting1 from "./image/painting1.jpg";
import painting2 from "./image/painting2.jpg";
import painting3 from "./image/painting3.jpg";
import painting4 from "./image/painting4.jpg";

import { API_URL } from "../config/contansts";

function Event(){
  const slideData = [
    {
            imgURL: painting1,
            created_at: "2023.12.04 ~",
            title: "랍스터 컬렉션",
            text: "신선한 리얼 랍스터가 그대로! 올겨울 한정판으로 더욱 특별하게 준비한 써브웨이 랍스터 컬렉션"
            
          },
          {
            imgURL: painting2,
            created_at: "2023.12.04 ~",
            title: "써브웨이 오늘의 수프",
            text: "오늘의 수프를 원하는 사이즈로! 샌드위치랑 함께 먹으면 든든하고 맛있썹!"
      
          },
          {
            imgURL: painting3,
            created_at: "2023.11.01 ~",
            title: "Eat Fresh Feel Good",
            text: "써브웨이 X 차은우 신선함 가득! 즐거움 가득! 함께하는 이 순간이 즐거워!"
      
          },
          {
            imgURL: painting4,
            created_at: "2020.10.16 ~",
            title: "말이 안 나올 땐 손으로 주문하자!",
            text: "말이 안 나올 땐? 손으로 주문하자!"
      
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

  const [data, setData] = useState([]);

  const [select, setSelect] = useState("전체");
  const categories = ["전체", "진행중인 이벤트", "종료된 이벤트"];

  const handleCategoryClick = (category) => {
    setSelect(category);
  };

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const getData = async()=>{
    await axios.get(`${API_URL}/event`)
    .then((response)=>{
      console.log('test',response.data);
      setData(response.data)
    })
  } 

  useEffect(()=>{
    getData();
  },[])

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
  }, [select, isInitialLoad]);

  
  // 더보기 함수  

  const showmore = () => {
    console.log("클릭");
    const gridItems = document.querySelectorAll('.y_list_item.hide');
      gridItems.forEach(item => {
        item.classList.remove('hide');
    })
  };

  return(
    <div id="event_all">
      <div className="y_subtitle">
        <h2> 이벤트ㆍ프로모션 </h2>
      </div>

      <div className="y_painting">
        <div className="Artist_slide">
          <div className="Artist_slide_viewport" aria-live="polite" >
            <ul className="slide_li" style={{
              transition: noTransition ? "none" : "transform 0.5s ease",
              transform: `translate3d(-${currentSlide * 900}px, 0, 0)` ,
              }}>
              {clone_slide.map((slide, index) => (
                <li className="slide_li_item">
                  <div key={index} className={`slide_img ${index === currentSlide || (currentSlide === index + slideData.length || currentSlide === index - slideData.length) ? "active" : ""}`} >
                  <a href="/">
                    <img src={slide.imgURL} alt={`Slide ${index + 1}`} />
                  </a>
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

      <div className="y_all_button">
        <div style={{position: "relative"}}>
          <div className="YMJ2_subSelectbar">
            <div className="YMJ2_saladSubSelectList1">
            {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={select === category ? { color: "White",borderRadius: "50px",backgroundColor: "#58006C" } : {}}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className="YMJ_selectcontent">
            <div className="YMJ_selectcontentGridBox">
              {data &&  data.map((a, i) => {
                  //날짜 표출시 T이후의 글자 삭제 
                const formattedDate = a.createdAt.split('T')[0];
                return (
                  <div className={"YMJ_selectCard start " + end}>
                    {/* <Link to={`/ingreDients/freshingredients/${a.id}`}> */}
                    <div className="YMJ_selectCardImg">
                      <img src={API_URL+"/upload/"+a.image_url } width="100%" height="180px"></img>
                    </div>
                    <div className="jsw_selectCardbox">
                      <div className="YMJ_selectCardEname1">{a.noname}</div>
                      <div className="YMJ_selectCardEname1">{a.title}</div>
                      <div className="YMJ_selectCardEname1">{a.noname}</div>
                      <div className="YMJ_selectCardKname1">{formattedDate}~</div>
                      <div className="YMJ_selectCardEname1">{a.noname}</div>
                    </div>
                  </div>
                );
              })}
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
