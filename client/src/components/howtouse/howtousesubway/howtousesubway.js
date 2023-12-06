import { useState } from 'react';
import { Nav } from "react-bootstrap";
import "./howtousesubway.css";
import Storeorder from './storeorder';
import Ordertip from './ordertip_1';

function Howtousesubway(props) {
  let [select, setSelect] =useState(1);
  return (
    <div className='jsw_maindiv'>
      <div className='jsw_howto'>
        <h2>써브웨이 이용방법</h2>
      </div>
      <div className="inquiry_main">
        
        <div id='jsw_container2'>
          <Nav id='jsw_container_2' variant="tabs" defaultActiveKey="link0">
            <Nav.Item id='jsw_nav1'>
              <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
                setSelect(1)
              }}><p>매장에서 주문하기</p></Nav.Link>
            </Nav.Item>
            <Nav.Item id='jsw_nav2'>
              <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
                setSelect(0)
              }}><p>주문 TIP</p></Nav.Link>
            </Nav.Item>
          </Nav>
          <Uicontent selcet={select}></Uicontent>
        </div>
      </div>
    </div>
  );
}
function Uicontent(props) {
  return [<Ordertip/>,<Storeorder/>][props.selcet]
}

export default Howtousesubway;
