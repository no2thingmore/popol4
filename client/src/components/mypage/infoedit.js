import axios from "axios"
import { API_URL } from "../config/contansts";
function Infoedit(props) {

  const editPWD = async (e)=>{
    e.preventDefault()
    const pwd = e.target.pwd.value
    const CKpwd = e.target.pwd.value
    if (pwd==CKpwd) {
      axios.patch(`${API_URL}/user/changePwd`,{pwd})
    }
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
