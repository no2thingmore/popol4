function Infoedit(props) {
  return (
    <div className="loginBg">
      <div className="registerpage">
        <form className="registerform">
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
