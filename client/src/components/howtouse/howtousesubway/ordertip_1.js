import "./ordertip_1.css"

import tip_sandwich1 from "../image/img/img_sandwich01.png";
import tip_sandwich2 from "../image/img/img_sandwich02.png";
import tip_sandwich3 from "../image/img/img_sandwich03.png";

import tip_salad from "../image/img/tip_salad.jpg";

import americancheese from "../image/cheese/americancheese.jpg"

import cucumbers from "../image/vegetable/cucumbers.jpg"
import olives from "../image/vegetable/olives.jpg"

import sweetonion from "../image/sauce/sweetonion.jpg"
import ranch from "../image/sauce/ranch.jpg"

import tip_sauce from "../image/img/tip_sauce.jpg"


function Ordertip_1(props) {
  return (
    <div id="ordertip_1">
      <div className="ordertip_visual">
        <div className='ordertip_visual_1'>
          <div className="ordertip_content">
            <div id='first_content_left' className="content_left">
              <div className='left_1'><p>완벽한 한끼를 원하신다면?</p></div>
              <div className='left_2'><strong>스테이크 & 치즈</strong></div>
              <p className="left_p">
                고급스러운 스테이크와 고소하고 진한 치즈의 콜라보<br/>
                신선한 야채와 함게 푸짐하고 완벽한 한끼가 완성됩니다!<br/>
                다양한 토핑을 추가해 나만의 한끼 메뉴를 즐겨보세요.
              </p>
            </div>
            <div className="content_right">
              <img src={tip_sandwich1}/>
            </div>
          </div>
        </div>
        <div className="ordertip_intro">
          <div className="ordertip_content2">
            <div className="content_name">
              <strong>더 맛있게 즐기는 <span>TIP</span></strong>
            </div>
            <div className="more_tip">
              <ul>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={americancheese}/>
                  <p><span>+</span> CHEESE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={sweetonion}/>
                  <p><span>+</span> SAUCE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={cucumbers}/>
                  <p><span>-</span> VEGETABLE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="ordertip_visual2">
        <div className='ordertip_visual_2'>
          <div className="ordertip_content">
            <div id='two_content_left'  className="content_left">
              <div className='left_1_2'><p>다이어트중이라면?</p></div>
              <div className='left_2'><strong>로스트치킨</strong></div>
              <p className="left_p">
                퍽퍽한 닭가슴살은 이제 그만!<br/>
                로스트 치킨 샐러드는 가볍고 든든하게 즐길 수 있습니다.<br/>
                샌드위치와 샐러드로 맛있고 든든하게 즐기세요.
              </p>
            </div>
            <div className="content_right">
              <img src={tip_sandwich2}/>
            </div>
          </div>
        </div>
        <div className="ordertip_intro">
          <div className="ordertip_content2">
            <div className="content_name">
              <strong>더 맛있게 즐기는 <span>TIP</span></strong>
            </div>
            <div className="more_tip">
              <ul>
                <li className="more_tip_1">
                  <img src={tip_salad}/>
                  <p><span>+</span> SALAD</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={ranch}/>
                  <p><span>+</span> SAUCE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={olives}/>
                  <p><span>-</span> TOPPING</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="ordertip_visual3">
        <div className='ordertip_visual_3'>
          <div className="ordertip_content">
            <div id='two_content_left' className="content_left">
              <div className='left_1_3'><p>건강을 생각한다면?</p></div>
              <div className='left_2'><strong>써브웨이 클럽</strong></div>
              <p className="left_p">
                고기의 단백질과 야채의 비타민으로 영양UP!<br/>
                절임류 야채를 제외해서 더 담백하게, 올리브오일을 넣어 부담은 DOWN!<br/>
                써브웨이 클럽으로 건강한 하루를 보내세요.
              </p>
            </div>
            <div className="content_right">
              <img src={tip_sandwich3}/>
            </div>
          </div>
        </div>
        <div className="ordertip_intro">
          <div className="ordertip_content2">
            <div className="content_name">
              <strong>더 맛있게 즐기는 <span>TIP</span></strong>
            </div>
            <div className="more_tip">
              <ul>
                <li className="more_tip_1">
                  <img src={tip_sauce}/>
                  <p><span>+</span> SAUCE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={americancheese}/>
                  <p><span>-</span> CHEESE</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
                <li className="more_tip__">·····</li>
                <li className="more_tip_1">
                  <img className='more_tip_1_img' src={olives}/>
                  <p><span>-</span> TOPPING</p>
                  <dd>
                    더블치즈로 치즈와 쇠고기의<br/>
                    완벽한 조화!
                  </dd>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Ordertip_1;
