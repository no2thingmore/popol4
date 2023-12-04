import React, { useState } from "react";
import "./faq.css";

function FAQ() {
  const [sections, setSections] = useState({
    sec1: false,
    sec2: false,
  });

  const toggleSection = (section) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>

  return (
    <div>
      <h1 id="title">가맹관련 FAQ</h1>
      <div className="wow">
        <div className="faq_container1">
          <div className="faq_section">
            <div className="faq_section_title" onClick={() => toggleSection("sec1")}>
              <div><i class="fa-solid fa-q"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;첫 번째 섹션</div>
              <i className={`fa-solid ${sections.sec1 ? "fa-solid fa-xmark" : "fa-solid fa-plus"}`}></i>
            </div>
            <div className={sections.sec1 ? "faq-section-content-visible" : "faq-section-content-hidden"}>
              {sections.sec1 &&
                <div id="first_list">
                  <p><i class="fa-solid fa-a"></i></p>
                  <p id="second_list">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  최소 전용 면적 25평 기준, 약 2억원 ~ 2억 1천만원이 예상됩니다.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  자세한 예상비용은 홈페이지 "가맹점 → 써브웨이 프랜차이즈"에서 확인하실 수 있습니다.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  (추가공사, 별도비용, 임대료, 부가세 제외)<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  http://www.subway.co.kr/franchise</p>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="faq_container2">
          <div className="faq_section">
            <div className="faq_section_title" onClick={() => toggleSection("sec2")}>
              <div><i class="fa-solid fa-q"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 두 번째 섹션</div>
              <i className={`fa-solid ${sections.sec2 ? "fa-solid fa-xmark" : "fa-solid fa-plus"}`}></i>
            </div>
            <div className={sections.sec2 ? "faq-section-content-visible" : "faq-section-content-hidden"}>      
              {sections.sec2 && 
                <div id="first_list">
                  <p><i class="fa-solid fa-a"></i></p>
                  <p id="second_list">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  따라서 제품의 퀄리티, 매장 운영, 고객 서비스에 있어 브랜드의 가치를 실현하기 위해 운영 매누얼 및 본사의 규정과 지침을 이행하고 준수 할 수 있<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  자세한 예상비용은 홈페이지 "가맹점 → 써브웨이 프랜차이즈"에서 확인하실 수 있습니다.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  는 분, 고객 서비스 마인드를 갖춘 분과 가맹계약을 체결합니다.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  각 지사의 가맹 개발자는 계약 체결 전, 심도 깊은 상담, 성향 테스트를 통해 이부분은 검증합니다.</p>
                </div>
                }
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default FAQ;
