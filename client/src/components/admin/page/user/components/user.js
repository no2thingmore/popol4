import { useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

function Nomal(){
  const [nomal,setNomal] = useState([]);

  const nomalData = async()=>{
    await axios.get(`${API_URL}/user/nomal`)
    .then((response)=>{
      setNomal(response.data);
    })
  }

  useEffect(()=>{
    nomalData();
  },[])

  return(
    <div className='KJH_inq_section'>
      <div className='KJH_inq_route'>
          Admin &gt; 회원 관리 &gt; 일반 회원 
          <span> 회원 수 {nomal.length}명</span>
      </div>
      <div className='KJH_inq_info'>
        <Table data={nomal}></Table>
      </div>
    </div>
  )
}

export default Nomal;
