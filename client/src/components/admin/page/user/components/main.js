import { useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";


function Main(){
  const [nomal,setNomal] = useState([]);
  const [oner,setOner] = useState([]);

  const nomalData = async()=>{
    await axios.get(`${API_URL}/user/nomal`)
    .then((response)=>{
      setNomal(response.data);
    })
  }
  const onerData = async()=>{
    await axios.get(`${API_URL}/user/oner`)
    .then((response)=>{
      setOner(response.data);
    })
  }

  useEffect(()=>{
    nomalData();
    onerData();
  },[])

  console.log(nomal, oner);
  return(
    <div className='KJH_inq_section'>
      <div className='KJH_inq_route'>
          Admin &gt; 회원 관리 &gt; 일반 회원 
          <span> 회원 수 {nomal.length}명</span>
      </div>
      <div className='KJH_inq_info'>
        <Table data={nomal}></Table>
      </div>
      <div className='KJH_inq_route'>
          Admin &gt; 회원 관리 &gt; 사업자 회원
          <span> 회원 수 {oner.length}명</span>
      </div>
      <div className='KJH_inq_info'>
        <Table data={oner}></Table>
      </div>
    </div>
  )
}

export default Main;
