import React from "react";
import promise1 from './sw_images/img_sw_promise01.jpg';
import promise2 from'./sw_images/img_sw_promise02.jpg';
import promise3 from'./sw_images/img_sw_promise03.jpg';
import promise4 from'./sw_images/img_sw_promise04.jpg';
import './promise.css';

function Promise(){
  return( 
    <div id="Holy_Fxxk">
      <div id="Promise_Main_Div">
        <div className="Head_Line">
          <h2 className="Head_txt">
            <em className="em_txt">SEARCH </em>
            FOR BETTER
            <span className="corporate_mark">®</span>
          </h2>
          <p id="Head_subtitle">우리는 더 좋은 써브웨이를 위해 매일 노력합니다.</p>
        </div>
        <ol className="grid_li">
          <li className="grid_li_item">
            <div id="grid_1st" className="grid_box">
              <div className="image_sec">
                <img src={promise1}></img>
              </div>
              <div className="grid_txt_area">
                <span class="grid_head_num">01</span>
                <span className="grid_head_txt">엄격하게 관리되는 우리의 재료</span>
                <p className="grid_main_txt">
                매일 매장에 배송되는 신선한 야채들은 각 매장에서 정성스럽게 손질됩니다.
                <br />
                엄격한 규율에 따라 세척 과정을 거친 야채들은
                <br />
                당일 판매되는 양만큼 준비되며 언제나 신선한 최상의 야채를
                <br />
                안전하게 제공하는 것이 써브웨이의 목표입니다.
                </p>
              </div>
              <p className="eng">Our Veggies</p>
            </div>
          </li>
          <li className="grid_li_item">
            <div id="grid_2nd" className="grid_box">
              <div className="image_sec">
                <img src={promise2}></img>
              </div>
              <div className="grid_txt_area">
                <span class="grid_head_num">02</span>
                <span className="grid_head_txt">써브웨이만의 특별한 빵</span>
                <p className="grid_main_txt">
                  1983년부터 써브웨이는
                  각 매장에서 매일 직접 구워 낸 신선한 샌드위치 빵을 제공합니다.
                  <br />
                  신선한 샌드위치는 신선한 빵에서 시작된다는 철학으로
                  <br />
                  매일 최상의 샌드위치 빵을 제공하기 위해 노력하고 있습니다.
                </p>
              </div>
              <p className="eng">Our Bread</p>
            </div>
          </li>
          <li className="grid_li_item">
            <div id="grid_3rd" className="grid_box">
              <div className="image_sec">
                <img src={promise3}></img>
              </div>
              <div className="grid_txt_area">
                <span class="grid_head_num">03</span>
                <span className="grid_head_txt">환경을 위한 우리의 노력</span>
                <p className="grid_main_txt">
                써브웨이의 샐러드 보울은 95% 재생 용기로 만들어졌으며,
                <br />
                매장 내 일회용품 사용을 줄여 나가고 있습니다.
                <br />
                써브웨이는 작은 부분이라도 놓치지 않고
                <br />
                환경을 늘 생각하는 브랜드가 되기 위해 지속적으로 노력하고 있습니다.
                <br />
                우리는 이 모든 것을 태워 빛이 될 거야
                </p>
              </div>
              <p className="eng">Our Impact</p>
            </div>
          </li>
          <li className="grid_li_item">
            <div id="grid_4th" className="grid_box">
              <div className="image_sec">
                <img src={promise4}></img>
              </div>
              <div className="grid_txt_area">
                <span class="grid_head_num">04</span>
                <span className="grid_head_txt">신선함을 위한 우리의 노력</span>
                <p className="grid_main_txt">
                써브웨이 빵은 인위적 당분이 함유되어 있지 않으며
                <br />
                비타민과 칼슘을 강화하고 나트륨을 줄이는 등
                <br />
                건강한 먹거리를 제공하기 위해 노력하고 있습니다.
                </p>
              </div>
              <p className="eng">Our Fresh</p>
            </div>
          </li>
        </ol>
      </div>
    </div>

  )
}

export default Promise;