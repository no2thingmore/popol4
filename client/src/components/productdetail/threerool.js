import { useEffect, useState } from "react";
import rool1 from "./rool1.jpg";
import rool2 from "./rool2.jpg";
import rool3 from "./rool3.jpg";

function Threerool() {
  const [sections, setSections] = useState([]);
  const sectionPoint = 300;

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
    <div className="CHM_threeroolBg">
      <div className="CHM_threeroolSubTitle">
        마이웨이만이 가지고 있는 세가지 원칙
      </div>
      <div className="CHM_threeroolTitle">
        <span style={{ color: "#009223" }}>MYWAY </span>
        <span style={{ color: "#ffc300" }}>3 FRESH</span>
      </div>
      <div className="CHM_threeroolImgGrid">
        <section className="CHM_section1">
          <div className="CHM_threeroolImgBox">
            <img src={rool1}></img>
            <div className="CHM_threeroolContent">
              <div className="CHM_threeroolContentTitle">
                <div className="CHM_threeroolContentTitleBox">
                  <div>매장에서 직접 구워낸</div>
                  <div>신선한 빵</div>
                </div>
                <div className="CHM_threeroolNumber">1</div>
              </div>
              <div className="CHM_threeroolContentDetail">
                <div>매일 아침 각 매장에서 발효하고 직접 구워서</div>
                <div>퀄러티 높은 신선한 빵을 제공합니다.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="CHM_section2">
          <div className="CHM_threeroolImgBox">
            <img src={rool2}></img>
            <div className="CHM_threeroolContent">
              <div className="CHM_threeroolContentTitle">
                <div className="CHM_threeroolContentTitleBox">
                  <div>매일 배송되는</div>
                  <div>신선한 야채 제공</div>
                </div>
                <div className="CHM_threeroolNumber">2</div>
              </div>

              <div className="CHM_threeroolContentDetail">
                <div>매장에서 직접 손질한 야채를</div>
                <div>당일판매 원칙으로 제공하고 있습니다.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="CHM_section3">
          <div className="CHM_threeroolImgBox">
            <img src={rool3}></img>
            <div className="CHM_threeroolContent">
              <div className="CHM_threeroolContentTitle">
                <div className="CHM_threeroolContentTitleBox">
                  <div>주문과 동시에</div>
                  <div>바로 만드는 신선함</div>
                </div>
                <div className="CHM_threeroolNumber">3</div>
              </div>

              <div className="CHM_threeroolContentDetail">
                <div>주문과 동시에 만들어지는 시스템으로</div>
                <div>직접 눈으로 신선함을 확인하실 수 있습니다.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Threerool;
