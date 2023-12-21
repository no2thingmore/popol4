import React, { useState } from "react";
import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../../useCookies";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/contansts";

function Adminlogin() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  // if (getCookie("saveID")) {
  //   setUserId(getCookie("saveID"));
  // }
  // const login = async (e) => {
  //   e.preventDefault();
  //   const email = e.target.login_id.value;
  //   const password = e.target.login_pwd.value;
  //   const saveID = e.target.login_saveID.checked;
  //   axios
  //     .get(`${API_URL}/user/login`, { params: { email, password } })
  //     .then((response) => {
  //       console.log("로그인 성공");
  //       if (saveID == 1) {
  //         setCookie("saveID", email);
  //       } else if (saveID == 0) {
  //         removeCookie("saveID");
  //       }
  //       console.log(response);
  //       setCookie("rolo", response.data.rolo);
  //       setCookie("user", response.data.id);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("로그인에 실패하였습니다.");
  //     });
  // };
  return (
    <div className="login_container" style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
      <div className="login_section">
        <h1>관리자 LOGIN</h1>
        <a href="/admin/home/none">a</a>
        <fieldset className="login_form">
          <form  className="login_form">
            <div className="login_input">
              <div className="login_id_input">
                <label>아이디(이메일)</label>
                <input
                  id="login_id"
                  type="text"
                  value={userId}
                  placeholder="아이디(이메일) 입력"
                ></input>
              </div>
              <div className="login_pwd_input">
                <label>비밀번호</label>
                <input
                  id="login_pwd"
                  type="password"
                  placeholder="비밀번호 입력"
                ></input>
              </div>
            </div>
            <div className="login_id_save">
              <input id="login_saveID" type="checkbox" /> 아이디(이메일) 저장
            </div>
            <div className="login_btn">
              <button type="submit">로그인</button>
            </div>
          </form>
        </fieldset>
        <ol className="login_nav">
          <li>
            <a>아이디 찾기</a>
          </li>
          <li className="login_nav_second">
            <a>비밀번호 찾기</a>
          </li>
          <li>
            <a>회원가입</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Adminlogin;
