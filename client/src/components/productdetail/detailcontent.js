import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../config/contansts';
import { useParams } from 'react-router-dom';

function DetailContent(props) {
  const [sections, setSections] = useState([]);
  const sectionPoint = 100;
  const {id} = useParams()
  const [data, setData] = useState("")

  const getData = async()=>{
    await axios.get(`${API_URL}/Food/menuIntro/detail`,{params:{id:id}})
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }

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

    getData();
    window.addEventListener("scroll", revealSections);

    return () => {
      window.removeEventListener("scroll", revealSections);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정
  return (
    <div className="CHM_detailpageBg">
      <div className="CHM_detailpageTitle">
        {data.kname}
      </div>
      <div className="CHM_detailpageFlex">
        <div>{data.ename}</div>
        <div>{data.ingred_kcal}kcal</div>
      </div>
      <section>
        <div className="CHM_detailpageImg">
          <img src={API_URL + "/upload/" + data.image_url}></img>
        </div>
      </section>
      <div className="CHM_detailpageContent">{data.coment}</div>
      <div className="CHM_detailpageSubContent">
        <div>* 써브웨이가 제공하는 신선한 야채가 정량으로 제공됩니다.</div>
        <div>* 제품 사진은 이미지컷입니다.</div>
      </div>
    </div>
  );
}

export default DetailContent;