import React, { useState, useRef } from "react";
import $ from 'jquery';
import styled from "styled-components";
import './apply.css';

import slide_img_1 from './art_images/img_sandwich_artist_slider01.jpg';
import slide_img_2 from './art_images/img_sandwich_artist_slider02.jpg';
import slide_img_3 from './art_images/img_sandwich_artist_slider03.jpg';
import slide_img_4 from './art_images/img_sandwich_artist_slider04.jpg';
import slide_img_5 from './art_images/img_sandwich_artist_slider05.jpg';
import icon_1 from './art_images/icon_sw_artist_point01.png';
import icon_2 from './art_images/icon_sw_artist_point02.png';
import icon_3 from './art_images/icon_sw_artist_point03.png';
import icon_4 from './art_images/icon_sw_artist_point04.png';
import WakDo from './art_images/GgamJjickYee.mp4';




function Apply(){
// 슬라이드 기본 함수


// 임시 클릭확인 코드
const [click_btn, setClick_btn] = useState();
const click_what = (e) => {
  const intxt = e.target.textContent;
  setClick_btn(intxt);
  console.log(intxt + '버튼 클릭');
}

// 1. 슬라이드 버튼 함수
const [arrow, setArrow] = useState();
  const slide_act = (e) => {
    let direction = e.target.className;
    let x_Coordinates = 0;
    setArrow(direction);
    console.log('방향 = ' + direction);
    if(direction === 'bt_prev') {
      console.log('이전 슬라이드');
      x_Coordinates += 900;
    }
    else if(direction === 'bt_next') {
      console.log('다음 슬라이드');
      x_Coordinates -= 900;
    }

  }
  
// 점을 눌렀을 때 바뀌는 함수
// 비활성화된 슬라이드의 이미지는 투명도 0.5 글자는 0
// 활성화된 슬라이드의 텍스트만 활성화 하는 함수




  return(
    <div id="Artist_Main_Div">
      <div className="Artist_Main_Grid">
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
                <a className="bt_prev" onClick={slide_act}>Prev</a>
                <a className="bt_next" onClick={slide_act}>Next</a>
              </div>

              <div className="slide_ctl_Dot">
                <div className="Dot_item"><a href="#" className="clicked_dot" onClick={click_what}>1</a></div>
                <div className="Dot_item"><a href="#" className="clicked_dot" onClick={click_what}>2</a></div>
                <div className="Dot_item"><a href="#" className="clicked_dot" onClick={click_what}>3</a></div>
                <div className="Dot_item"><a href="#" className="clicked_dot" onClick={click_what}>4</a></div>
                <div className="Dot_item"><a href="#" className="clicked_dot" onClick={click_what}>5</a></div>
              </div>
            </div>
          </div>
        </div>
        {/* 핵심요소 */}
        <div className="Point">
          <h3>써브웨이 NOW 핵심 요소</h3>
          <ul className="Point_li">
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_1}></img>
                <span>Guest First</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_2}></img>
                <span>Great Food</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_3}></img>
                <span>Great Store</span>
              </div>
            </li>
            <li className="Point_li_item">
              <div className="point_icon">
                <img src={icon_4}></img>
                <span>Great Team</span>
              </div>
            </li>
          </ul>
        </div>
        {/* 커리어 요약 */}
        <div className="career_path">
          <h3>Career Path</h3>
          <ol className="path_point">
            <li>
							<span className="point_num">01</span>
							<strong>Sandwich<br />Artist</strong>
							<div className="view_deep">
                <p>상세보기</p>
              </div>
							<div className="layer_view">
								<p>
									샌드위치 아티스트™는 고객에게 <br />
									최고의 경험을 제공하기 위해<br />
									매장 내 다양한 업무를 실행합니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">02</span>
							<strong>Senior Sandwich<br />Artist</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									선임 샌드위치 아티스트™는<br />
									매장 운영 및 관리 업무를<br />
									습득함으로써 매니저로<br />
									성장의 기회를 갖게 됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">03</span>
							<strong>Shift<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									시프트 매니저는 함께 일하는<br />
									샌드위치 아티스트™의 업무를 조율하고<br />
									매니저의 업무를 지원하는 역할을<br />
									실행합니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">04</span>
							<strong>Assistant<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									한 매장을 책임지고 관리하는 매니저가<br />
									되기 위한 이전 단계로, 매장운영과 관련된<br />
									중요한 업무에 대해 본격적으로 책임지기<br />
									시작하는 직급입니다.<br />
									써브웨이 트레이닝 센터에서 진행되는<br />
									매니저 교육을 통해 직원관리,<br />
									매출 및 시스템 관리에 대해 체계적으로<br />
									배울 수 있는 기회가 제공됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">05</span>
							<strong>Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									매장 운영 및 관리의 책임자로서<br />
									역할을 실행하며 온라인 학습 과정을 통해<br />
									지속적으로 업무능력 향상의 기회가<br />
									제공됩니다.
								</p>
							</div>
						</li>
            <li>
							<span className="point_num">06</span>
							<strong>Multi-Unit<br />Manager</strong>
							<div className="view_deep"><p>상세보기</p></div>
							<div className="layer_view">
								<p>
									한 개 이상의 매장을<br />
									운영 및 관리하는<br />
									매니저입니다.
								</p>
							</div>
						</li>
          </ol>
        </div>
        {/* 채용지원 */}
        <div className="recruit">
          <div className="recruit_head">
            <h3>채용지원</h3>
            <p>최고의 샌드위치 아티스트™에 도전하세요</p>
          </div>
          <div className="recruit_link">
            <div className="recruit_link_li">
              <div className="recruit_link_li_item">
                <a href="http://www.alba.co.kr/search/Search.asp?srchType=ALL&clsType=search&EasySearch=mainSearch&wsSrchWord=%BD%E1%BA%EA%BF%FE%C0%CC&wsSrchWordarea=" target="_blank">
                  <div className="recruit_logo"></div>
                  <strong>알바천국 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
              <div className="recruit_link_li_item">
                <a href="http://www.albamon.com/search?Keyword=%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4" target="blank">
                  <div className="recruit_logo"></div>
                  <strong>알바몬 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
              <div className="recruit_link_li_item">
                <a href="/subwayRecruit" target="blank">
                  <div className="recruit_logo"></div>
                  <strong>홈페이지 채용지원</strong>
                  <span>바로가기</span>
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply;