import "./groupmenu.css"
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"

import subway from "./img/subway.png"
import phone from "./img/phone.png"
import bar from "./img/bar.png"

function Groupmenu(props) {
  return (
    <div id="groupmenu">
      <div id="group1">
        <div className="groupname">
          <strong>특별한 날엔 써브웨이와 함께!</strong>
        </div>
        <strong>Travel Day</strong>
        <p>
          설레는 여행에 빠질수 없는 먹는 즐거움!<br/>
          써브웨이 샌드위치와 함께 한다면 여행의 추억이 배가 됩니다.
        </p>

        <div className="groupicon">
          <a><img src={icon1}/></a>
          <a><img src={icon2}/></a>
          <a><img src={icon3}/></a>
        </div>
      </div>
      <div id="group2">
        <h3>단체메뉴 주문하기</h3>
        <ul>
          <li className="li1">
            <div className="icon">
            <img src={bar}/>
            </div>
            <span>STEP 1</span>
            <dt>메뉴 선택</dt>
            <dd>
              샌드위치는 10개 이상 주문 시 또는<br/>
              원하는 단체메뉴를 선택하세요
            </dd>
          </li>
          <li className="li1">
            <div className="icon">
            <img src={bar}/>
            </div>
            <span>STEP 1</span>
            <dt>메뉴 선택</dt>
            <dd>
              샌드위치는 10개 이상 주문 시 또는<br/>
              원하는 단체메뉴를 선택하세요
            </dd>
          </li>
          <li>
            <div className="icon">
            <img src={bar}/>
            </div>
            <span>STEP 1</span>
            <dt>메뉴 선택</dt>
            <dd>
              샌드위치는 10개 이상 주문 시 또는<br/>
              원하는 단체메뉴를 선택하세요
            </dd>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Groupmenu;
