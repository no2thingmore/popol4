import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../../../config/contansts";

function EditUser(){
  const navigate = useNavigate();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [pwd,setPwd] = useState();
  const [phone,setPhone] = useState();
  const [role,setRole] = useState();
  const id = useLocation().state.userID ;
  const getData = async ()=>{
    await axios.get(`${API_URL}/user/mypage`,{params:{id:id}})
    .then((response)=>{
      setEmail(response.data.email)
      setName(response.data.name)
      setPhone(response.data.contact_number)
      setPwd(response.data.password)
      setRole(response.data.role)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  const cancle = ()=>{
    navigate(-1);
  }

  const editData = async(e)=>{
    e.preventDefault()
    const Nname = e.target.Ename.value;
    const Nemail = e.target.Eemail.value;
    const Npwd = e.target.Epwd.value;
    const Nphone = e.target.Ephone.value;
    const Nrole = e.target.Eselect.value;
    await axios.patch(`${API_URL}/user/admin/${role}`, {id,Nemail,Nname,Nphone,Npwd,Nrole})
    .then(()=>{
      console.log('수정완료');
    })
    .catch((err)=>{
      console.log(err);
      console.log('수정실패');
    })
  }
  return(
    <form onSubmit={editData}>
      <div>
          Admin &gt; 회원 관리 &gt; {role==0? <span>일반회원</span>: role==1? <span>사업자회원</span> : ""}
      </div>
      <div>
      <table>
          <tr>
            <tr>
              <td>이름</td>
              <td><input id="Ename" type="text" value={name}></input></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input id="Eemail" type="text" value={email}></input></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input id="Epwd" type="text" value={pwd}></input></td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td><input id="Ephone" type="text" disabled value={phone}></input></td>
            </tr>
            <tr>
              <td>권한</td>
              <td>
                <select id="Eselect" value={role}>
                  <option value={0}>일반회원</option>
                  <option value={1}>사업자회원</option>
                </select>
              </td>
            </tr>
            <tr>
              <button type="submit">수정하기</button>
              <Link to={'/admin/user/main'}>취소</Link>
            </tr>
          </tr>
      </table>
      </div>
    </form>
  )
}

export default EditUser;
