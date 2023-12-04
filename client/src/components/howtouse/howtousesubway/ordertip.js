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


function Ordertip(props) {
  return (
    <div id="ordertipMain">
      <div className="ordertip1">

        <div className="ordertip1_1">
          <div>
            <p>완벽한 한끼를 원하신다면?</p>
          </div>
          <strong>스테이크 & 치즈</strong>
          <p>
            고급스러운 스테이크와 고소하고 진한 치즈의 콜라보<br/>
            신선한 야채와 함께 푸짐하고 완벽한 한끼가 완성됩니다!<br/>
            다양한 토핑을 추가해 나만의 한끼 메뉴를 즐겨보세요.
          </p>
        </div>
        <img className="both" src={tip_sandwich1}/>
      </div>
        <div className="ordertip2">
          <strong>더 맛있게 즐기는 <span>TIP</span></strong>
          <ul>
            <li>
              <img src={americancheese}/>
              <strong><span>+</span> CHEESE</strong>
              <p>
                더블치즈로 치즈와 쇠고기의<br/>
                완벽한 조화!
              </p>
            </li>
            <li>
              <img src={sweetonion}/>
              <strong><span>+</span> SAUCE</strong>
              <p>
                달콤하게 즐기고 싶다면 스윗어니언+마요네즈!<br/>
                스테이크의 맛을 즐기고 싶다면 후추만 톡톡!
              </p>
            </li>
            <li>
              <img src={cucumbers}/>
              <strong><span>+</span> VEGETABLE</strong>
              <p>
                토마토, 오이를 빼면<br/>
                고기의 풍미를 즐길 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Ordertip;
