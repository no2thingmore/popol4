import { useEffect, useState } from 'react';

function DetailContent(props) {
  const [sections, setSections] = useState([]);
  const sectionPoint = 100;

  useEffect(() => {
    const allSections = document.querySelectorAll("section");
    setSections(allSections);

    function revealSections() {
      const windowHeight = window.innerHeight;

      allSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - sectionPoint) {
          section.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealSections);

    return () => {
      window.removeEventListener("scroll", revealSections);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정
  return (
    <div className="CHM_detailpageBg">
      <div className="CHM_detailpageTitle">
        {props.product}
        {props.id}
        {props.data[0].Kname}
      </div>
      <div className="CHM_detailpageFlex">
        <div>{props.data[0].Ename}</div>
        <div>{props.data[0].kcal}kcal</div>
      </div>
      <section>
        <div className="CHM_detailpageImg">
          <img src={props.data[0].img}></img>
        </div>
      </section>
      <div className="CHM_detailpageContent">{props.data[0].content}</div>
      <div className="CHM_detailpageSubContent">
        <div>* 써브웨이가 제공하는 신선한 야채가 정량으로 제공됩니다.</div>
        <div>* 제품 사진은 이미지컷입니다.</div>
      </div>
    </div>
  );
}

export default DetailContent;