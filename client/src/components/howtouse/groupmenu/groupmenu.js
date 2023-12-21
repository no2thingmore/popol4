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
      <div id='group0'>
        <h2>단체메뉴 이용방법</h2>
      </div>
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
          <li className="li1_jsw">
            <div className="icon">
            <img src={bar}/>
            </div>
            <span>STEP 1</span>
            <dt>메뉴 선택</dt>
            <dd className='dd'>
              샌드위치는 10개 이상 주문 시 또는<br/>
              원하는 단체메뉴를 선택하세요
            </dd>
          </li>
          <li className="li1_jsw">
            <div className="icon">
            <img src={phone}/>
            </div>
            <span>STEP 2</span>
            <dt>매장 문의</dt>
            <dd className='dd'>
              단체주문은 가까운 매장 또는 써브웨이 고객<br/>
              센터(02-797-5036)로 문의·주문해 주세요.<br/>
              ※ 최소 1일 전 문의하시기 바랍니다.
            </dd>
          </li>
          <li className="li1_jsw">
            <div className="icon">
            <img src={subway}/>
            </div>
            <span>STEP 3</span>
            <dt>매장 픽업</dt>
            <dd>
              주문 약속 날짜, 시간에<br/>
              매장에서 픽업하세요
            </dd>
          </li>
        </ul>
      </div>
      <div id="undermenu">
        <a href='/menuIntro/5'><span>단체메뉴 보기</span></a>
        <a href='/StoreSearch'><span>매장찾기</span></a>
      </div>
    </div>
  );
}

export default Groupmenu;
