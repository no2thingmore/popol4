import './storeorder.css'

import order_step1 from "../image/img/img_store_order01.png"

function Storeorder(props) {
  return (
    <div id="storeorder">
      <div id='step_content'>
        <ul>
          <li className='order_active'>
            <div className='order_step'>
              STEP
              <br/>
              <strong>1</strong>
            </div>
          </li>
          <div className='···'>···</div>
          <li className='order_active'>
            <div className='order_step'>
              STEP
              <br/>
              <strong>2</strong>
            </div>
          </li>
          <div className='···'>···</div>
          <li className='order_active'>
            <div className='order_step'>
              STEP
              <br/>
              <strong>3</strong>
            </div>
          </li>
          <div className='···'>···</div>
          <li className='order_active'>
            <div className='order_step'>
              STEP
              <br/>
              <strong>4</strong>
            </div>
          </li>
          <div className='···'>···</div>
          <li className='order_active'>
            <div className='order_step'>
              STEP
              <br/>
              <strong>5</strong>
            </div>
          </li>
        </ul>
      </div> 
      <div className='order_img_content'>
        <a></a>
        <ul>
          <li>
            <img src={order_step1}  />
          </li>
          <li>
            <div className='order_content_step'>
              <ol>
                <li>
                  <p className='step_num'>STEP 1</p>
                  <strong className='step_name'>메뉴 선택</strong>
                  <p className='step_list'>
                    메뉴를 고르세요. <br/>
                    샌드위치(15cm 또는 30cm)와 <br/>
                    샐러드 중 선택 가능합니다.
                  </p>
                  <div id='menu_link'>
                    <a><span>샌드위치 메뉴</span><img src=''/></a>
                    <a><span>샐러드 메뉴</span><img src=''/></a>
                  </div>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Storeorder;
