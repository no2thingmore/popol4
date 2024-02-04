import axios from "axios"
import { API_URL } from "../config/contansts";
import { getCookie, removeCookie } from "../../useCookies";
import { useNavigate } from "react-router-dom";
function Infoedit(props) {
  const navigate = useNavigate();
  const editPWD = async (e)=>{
    e.preventDefault()
    const pwd = e.target.pwd.value
    const CKpwd = e.target.CKpwd.value
    const id = getCookie("user")
    if (pwd,CKpwd != "") {
      if (pwd==CKpwd) {
        axios.patch(`${API_URL}/user/changePwd`,{pwd,id})
        .then(()=>{
          alert('변경이 완료되었습니다.');
          removeCookie('user');
          return navigate('/');
        })
        .catch(()=>{
          alert('비밀번호는 최소 6자리여야합니다.')
        })
      }else{
        alert('정보 수정에 실패하였습니다.');
        return alert('비밀번호를 확인해주세요.');
      }
    }else alert('비밀번호를 전부 입력해주세요')
  }
  return (
    <div className="loginBg">
      <div className="registerpage">
        <form className="registerform" onSubmit={editPWD}>
          <h3>회원정보 수정</h3>
          <div className="registerpageborderBox">
            <div className="registerpagegrid">
              <label>신규 비밀번호</label>
              <input
                id="pwd"
                type="password"
                className="form-control"
                placeholder="Old Password"
              />
            </div>

            <div className="registerpagegrid">
              <label>비밀번호 확인</label>
              <input
                id="CKpwd"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
}

export default Infoedit;
