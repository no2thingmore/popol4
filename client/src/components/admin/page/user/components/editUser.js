import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../../../config/contansts";
import "./editUser.css";

function EditUser() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();
  const id = useLocation().state.userID;
  const getData = async () => {
    await axios
      .get(`${API_URL}/user/mypage`, { params: { id: id } })
      .then((response) => {
        setEmail(response.data.email);
        setName(response.data.name);
        setPhone(response.data.contact_number);
        setPwd(response.data.password);
        setRole(response.data.role);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const cancle = () => {
    navigate(-1);
  };

  const editData = async (e) => {
    e.preventDefault();
    const Nname = e.target.Ename.value;
    const Nemail = e.target.Eemail.value;
    const Npwd = e.target.Epwd.value;
    const Nphone = e.target.Ephone.value;
    const Nrole = e.target.Eselect.value;
    await axios
      .patch(`${API_URL}/user/admin/${role}`, {
        id,
        Nemail,
        Nname,
        Nphone,
        Npwd,
        Nrole,
      })
      .then(() => {
        console.log("수정완료");
      })
      .catch((err) => {
        console.log(err);
        console.log("수정실패");
      });
  };
  return (
    <form className="user_edit_section" onSubmit={editData}>
      <div className="user_type">
        Admin &gt; 회원 관리 &gt;{" "}
        {role == 0 ? (
          <span>일반회원</span>
        ) : role == 1 ? (
          <span>사업자회원</span>
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="CHM_plustable1grid">
          <div className="CHM_plustablegrid" style={{borderRight: "1px solid #c6c6c6", borderTop: "2px solid black"}}>
            <div className="CHM_plusTableTitle">이름</div>
            <input id="Ename" type="text" defaultValue={name}></input>
          </div>
        </div>

        <div className="CHM_plustable1grid">
          <div className="CHM_plustablegrid" style={{borderRight: "1px solid #c6c6c6"}}>
            <div className="CHM_plusTableTitle">이메일</div>
            <input id="Eemail" type="text" defaultValue={email}></input>
          </div>  
        </div>

        <div className="CHM_plustable1grid">
          <div className="CHM_plustablegrid" style={{borderRight: "1px solid #c6c6c6"}}>
            <div className="CHM_plusTableTitle">비밀번호</div>
            <input id="Epwd" type="text" defaultValue={pwd}></input>
          </div>
        </div>

        <div className="CHM_plustable1grid">
          <div className="CHM_plustablegrid" style={{borderRight: "1px solid #c6c6c6"}}>
            <div className="CHM_plusTableTitle">전화번호</div>
            <input id="Ephone" type="text" defaultValue={phone}></input>
          </div>
        </div>

        <div className="CHM_plustable1grid">
          <div className="CHM_plustablegrid" style={{borderRight: "1px solid #c6c6c6"}}>
            <div className="CHM_plusTableTitle">권한</div>
            <select id="Eselect" defaultValue={role}>
              <option value={0}>일반회원</option>
              <option value={1}>사업자회원</option>
            </select>
          </div>
        </div>

        <div className="CHM_plusPageBtnBox2">
          <button type="submit">수정하기</button>
          <button>
            <Link to={"/admin/user/main"}>취소</Link>
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditUser;
