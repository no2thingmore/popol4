import { useState } from 'react';
import { Nav } from "react-bootstrap";
// import "./howtousesubway.css";
import Storeorder from './storeorder';
import Ordertip from './ordertip';

function Howtousesubway(props) {
  let [select, setSelect] =useState(0);
  return (
    <div className='jsw_maindiv'>
      <div className='jsw_howto'>
        <h2>써브웨이 이용방법</h2>
      </div>
      <div className="inquiry_main">
        
        <div>
          <Nav style={{paddingLeft: '2vw'}}variant="tabs" defaultActiveKey="link0">
            <Nav.Item id='jsw_nav1'>
              <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
                setSelect(1)
              }}>매장에서 주문하기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
                setSelect(0)
              }}>주문 TIP</Nav.Link>
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
