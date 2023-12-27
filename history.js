import React from "react";
import './history.css';
import logo1 from './his_images/img_history_logo.png';
import logo2 from './his_images/img_history_logo02.png';
import history01_1 from './his_images/img_history01_1.png';
import history01_2 from './his_images/img_history01_2.png';
import history02_1 from './his_images/img_history02_1.png';
import history02_2 from './his_images/img_history02_2.png';
import history02_3 from './his_images/img_history02_3.png';
import history02_4 from './his_images/img_history02_4.png';
import history03_1 from './his_images/img_history03_1.png';
import history03_2 from './his_images/img_history03_2.png';
import history04_1 from './his_images/img_history04_1.png';
import history04_2 from './his_images/img_history04_2.png';
import history04_3 from './his_images/img_history04_3.png';
import logo_sub_header from './his_images/logo_sub_header.png';
import logo_w from './his_images/logo_w.png';


function History(){
  return(
    <div id="History_Main_Div">
      <div className="history_container">
        <div className="history_section_content scene01">
          <strong className="his_tit">GLOBAL</strong>
          <ul className="history_ul">
            <li className="history_li right big">
              <div className="his_year">1965</div>
              <p className="his_li_content">
                17세 사업가, 프레드 델루카
                <br />
                Pete’s Super Submarines 오픈
                <br />
                (미국, 코네티컷)
              </p>
            </li>
            <li className="history_li left">
              <div className="his_year">1968</div>
              <div className="his_logo">
                <img src={logo1}></img>
              </div>
              <p className="his_li_content">공식 명칭 ‘써브웨이’ 사용 시작</p>
            </li>
            <li className="history_li left">
              <div className="his_year">1975</div>
              <p className="his_li_content">
                클래식 BMT 출시
              </p>
            </li>
          </ul>
          <div className="his_line"></div>
          <div className="his_sec_img01">
            <img src={history01_1}></img>
          </div>
          <div className="his_sec_img02">
            <img src={history01_2}></img>
          </div>
        </div>
        <div className="history_section_content scene02">
          <ul className="history_ul">
            <li className="history_li right big">
              <div className="his_year">1983</div>
              <p className="his_li_content">
                매장에서 직접 구워낸
                <br />
                신선한 빵 제공 시작
              </p>
            </li>
            <li className="history_li right big">
              <div className="his_year">1984</div>
              <p className="his_li_content">
                단체 고객을 위한
                <br />
                파티플래터 상품 출시
              </p>
            </li>
            <li className="history_li left big">
              <div className="his_year">1981-1987</div>
              <p className="his_li_content">
                프랜차이즈를 통한
                <br />
                글로벌 사업 확장
              </p>
            </li>
            <li className="history_li left big">
              <div className="his_year">1988</div>
              <p className="his_li_content">
                엔터프리지 선정 500대
                <br />
                프랜차이즈 기업 1위
              </p>
            </li>
            <li className="history_li right big">
              <div className="his_year">1992</div>
              <p className="his_li_content">
                편의 시설 주변에 오픈을 통해
                <br />
                대중적인 브랜드로 거듭나다
              </p>
            </li>
            <li className="history_li right big">
              <div className="his_year">1997</div>
              <p className="his_li_content">
                저지방 샌드위치
                <br />
                메뉴 출시
              </p>
            </li>
          </ul>
          <div className="his_line"></div>
          <div className="his_sec_img01">
            <img src={history02_1}></img>
          </div>
          <div className="his_sec_img02">
            <img src={history02_2}></img>
          </div>
          <div className="his_sec_img03">
            <img src={history02_3}></img>
          </div>
          <div className="his_sec_img04">
            <img src={history02_4}></img>
          </div>
        </div>
        <div className="history_section_content scene03">
          <ul className="history_ul">
              <li className="history_li left big">
                <div className="his_year">2000</div>
                <p className="his_li_content">
                  메뉴의 다양화!
                  <br />
                  빵과 소스 선택 가능
                </p>
              </li>
              <li className="history_li left big">
                <div className="his_year">2005</div>
                <p className="his_li_content">
                  토스트 샌드위치의
                  <br />
                  시작
                </p>
              </li>
              <li className="history_li right">
                <div className="his_year">2013</div>
                <p className="his_li_content">
                  빵의 인공 첨가물 제거
                </p>
              </li>
              <li className="history_li left big">
                <div className="his_year">2017</div>
                <p className="his_li_content">
                  'Fresh Forward'를 통한
                  <br />
                  새로운 변화
                </p>
              </li>
            </ul>
          <div className="his_sec_img01">
            <img src={history03_1}></img>
          </div>
          <div className="his_sec_img02">
            <img src={history03_2}></img>
          </div>
          <div className="his_line"></div>
        </div>
        <div className="history_section_content scene04">
          <strong className="his_tit">KOREA</strong>
          <ul className="history_ul">
              <li className="history_li left big">
                <div className="his_year">May 1991</div>
                <p className="his_li_content">
                  써브웨이 한국 1호점 개점
                  <br />
                  (63빌딩 아케이드)
                </p>
              </li>
              <li className="history_li right">
                <div className="his_year">2005</div>
                <p className="his_li_content">
                  한국 지사 설립
                </p>
              </li>
              <li className="history_li right">
                <div className="his_year">2012</div>
                <p className="his_li_content">
                  50개 매장 달성
                </p>
              </li>
              <li className="history_li right big">
                <div className="his_year">2013</div>
                <p className="his_li_content">
                  페이스북, PPL 등을 총한
                  <br />
                  활발한 마케팅 활동 시작
                </p>
              </li>
              <li className="history_li left">
                <div className="his_year">2014</div>
                <p className="his_li_content">
                  100개 매장 달성
                </p>
              </li>
              <li className="history_li left">
                <div className="his_year">2017</div>
                <p className="his_li_content">
                  300개 매장 달성
                </p>
              </li>
              <li className="history_li right big">
                <div className="his_year">2017</div>
                <div className="his_logo">
                <img src={logo2}></img>
              </div>
                <p className="his_li_content">
                  아시아 최초 'Fresh Forward'
                  <br />
                  매장 국내 오픈
                </p>
              </li>
              <li className="history_li right">
                <div className="his_year">2018</div>
                <p className="his_li_content">
                  2018 한국 웹사이트 리뉴얼 오픈
                </p>
              </li>
              <li className="history_li left">
                <div className="his_year">2020</div>
                <p className="his_li_content">
                  써브웨이 앱 출시, 
                  <br />
                  국내 첫 Drive Through  매장 오픈
                </p>
              </li>
              <li className="history_li left">
                <div className="his_year">2023</div>
                <p className="his_li_content">
                  조경익과 아이들, KDT를 통해서
                  <br />
                  웹 사이트를 포트폴리오로 제작
                </p>
              </li>
              
            </ul>
          <div className="his_line"></div>
          <div className="his_sec_img01">
            <img src={history04_1}></img>
          </div>
          <div className="his_sec_img02">
            <img src={history04_2}></img>
          </div>
          <div className="his_sec_img03">
            <img src={history04_3}></img>
          </div>
        </div>

      </div>
    </div>
  )
}

export default History;