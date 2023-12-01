import "./login.css"
import React, { useState } from "react";
import axios from "axios"
import { getCookie, removeCookie, setCookie } from "../../useCookies";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate()
  const [userId,setUserId] = useState(null)
  if (getCookie('saveID')) {
    setUserId(getCookie('saveID'))
  }
  const login = async (e)=>{
    e.preventDefault()
    const email = e.target.login_id.value;
    const password = e.target.login_pwd.value;
    const saveID = e.target.login_saveID.checked;
    axios.post('/user/login',{email,password})
    .then(()=>{
      console.log("로그인 성공");
      if (saveID == 1) {
        setCookie("saveID",email)
      }else if(saveID == 0){
        removeCookie("saveID");
      }
      // navigate('/')
    })
    .catch((err)=>{
      console.log(err);
      alert('로그인에 실패하였습니다.')
    })
  }
  return(
    <div className="login_section">
      <h1>LOGIN</h1>
      <div className="login_coments">
        <p>마이웨이 회원으로 로그인하시면 제공하는</p>
        <p>다양한 서비스를 이용할 수 있습니다.</p>
      </div>
      <fieldset>
        <form onSubmit={login}>
          <label>아이디(이메일)</label>
          <input id="login_id" type="text" value={userId}></input>
          <label>비밀번호</label>
          <input id="login_pwd" type="password"></input>
          <input id="login_saveID" type="checkbox" /> 아이디(이메일) 저장
          <button type="submit">로그인</button>
        </form>
      </fieldset>
      <ol>
        <li>
          <a >아이디 찾기</a>
        </li>
        <li>
          <a >비밀번호 찾기</a>
        </li>
        <li>
          <a >회원가입</a>
        </li>
      </ol>
    </div>
  )
}

export default Login;