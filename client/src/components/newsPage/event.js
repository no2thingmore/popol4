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
  const slideData = [
    {
      imgURL: painting1,
      title: "Best Artist",
      text: "샌드위치 아티스트™는 \r 언제나 완벽한 샌드위치를 만듭니다."
    },
    {
      imgURL: painting2,
      title: "Best Fresh Keeper",
      text: "샌드위치 아티스트™는 각종 재료의 신선함과 매장의 청결을 철저하게 관리합니다."
    },
    {
      imgURL: painting3,
      title: "Best Service Professional",
      text: "샌드위치 아티스트™는 항상 고객을 우선으로 생각하며 고객이 무엇을 원하는지 경청합니다."
    },
    {
      imgURL: painting4,
      title: "Best Team Member",
      text: "샌드위치 아티스트™는 최고의 팀원으로서 고객에게 최고의 경험을 제공하기 위해 다른 팀원들과 함께 노력합니다."
    },

  ];

  // 슬라이드

  const clone_slide = [slideData[slideData.length-2] ,slideData[slideData.length-1], ...slideData, slideData[0], slideData[1]];
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