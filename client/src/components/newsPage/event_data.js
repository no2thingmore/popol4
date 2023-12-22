

import event_date_1 from './image/event_date_1';
import event_date_2 from './image/event_date_2';
import event_date_3 from './image/event_date_3';
import event_date_4 from './image/event_date_4';

const event_data = [
    {
      imgURL: event_date_1,
      created_at: "2023.12.04 ~",
      title: "랍스터 컬렉션",
      text: "신선한 리얼 랍스터가 그대로! 올겨울 한정판으로 더욱 특별하게 준비한 써브웨이 랍스터 컬렉션"
      
    },
    {
      imgURL: event_date_2,
      created_at: "2023.12.04 ~",
      title: "써브웨이 오늘의 수프",
      text: "오늘의 수프를 원하는 사이즈로! 샌드위치랑 함께 먹으면 든든하고 맛있썹!"

    },
    {
      imgURL: event_date_3,
      created_at: "2023.11.01 ~",
      title: "Eat Fresh Feel Good",
      text: "써브웨이 X 차은우 신선함 가득! 즐거움 가득! 함께하는 이 순간이 즐거워!"

    },
    {
      imgURL: event_date_4,
      created_at: "2020.10.16 ~",
      title: "말이 안 나올 땐 손으로 주문하자!",
      text: "말이 안 나올 땐? 손으로 주문하자!"

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