import React from "react";
import './apply.css';

import slide_img_1 from './art_images/img_sandwich_artist_slider01.jpg';
import slide_img_2 from './art_images/img_sandwich_artist_slider02.jpg';
import slide_img_3 from './art_images/img_sandwich_artist_slider03.jpg';
import slide_img_4 from './art_images/img_sandwich_artist_slider04.jpg';
import slide_img_5 from './art_images/img_sandwich_artist_slider05.jpg';
import important_icon_1 from './art_images/icon_sw_artist_point01.png';
import important_icon_2 from './art_images/icon_sw_artist_point02.png';
import important_icon_3 from './art_images/icon_sw_artist_point03.png';
import important_icon_4 from './art_images/icon_sw_artist_point04.png';




function Apply(){
  return(
    <div id="Artist_Main_Div">
      <div className="Main_Grid">
        {/* 헤더 */}
        <div className="Head_Line">
        <h2 className="Head_txt">
            <em className="em_txt">GREAT PEOPLE, GREAT BRAND, </em>
            <br />
            GREAT OPPORTUNITY
          </h2>
          <p id="Head_subtitle">샌드위치 아티스트™는 고객에게 최고의 경험을 제공하기 위해
          <br />
          써브웨이 NOW 핵심요소 를 실행합니다.
          </p>
        </div>
        {/* 슬라이드 */}
        <div className="Artist_slide_content">
          <div className="Artist_slide">
            <div className="Artist_slide_viewport" aria-live="polite">
              <ul className="slide_li">
                <li className="slide_li_item">
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
                </li>
                <li className="slide_li_item">
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
                </li>
              </ul>
            </div>
            <div className="slide_ctl">
              <div className="slide_ctl_Arrow">
                <a className="bt_prev">
                  Prev
                </a>
                <a className="bt_next">
                  Next
                </a>
              </div>
              <div className="slide_ctl_Dot"></div>
            </div>
          </div>

        </div>
        {/* 핵심요소 */}
        <div></div>
        {/* 채용지원 */}
        <div></div>
      </div>
    </div>
  )
}

export default Apply;