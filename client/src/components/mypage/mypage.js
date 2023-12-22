import axios from "axios";
import { API_URL } from "../config/contansts";
import { useEffect, useState } from "react";
import "./mypage.css";
import { useParams } from 'react-router-dom';
import Cart from './cart';
import Select from './select';
import Infoedit from './infoedit';
import { getCookie } from '../../useCookies';

function Mypage() {
  const {select} = useParams()
  const [status, setStatus] = useState(select)
  const userdata = getCookie('user')
  const [user, setUser] = useState("");
  console.log(user);

  useEffect(() => {
    axios
      .get(`${API_URL}/user/mypage`, {params:{id: userdata}})
      .then((res) => {
        console.log("db조회 완료");
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

  return (
    <div className="CHM_mypageBox">
      {status === "none" ? <Select user={user}></Select> : ""}
      {status === "edit" ? <Infoedit user={user}></Infoedit> : ""}
      {status === "cart" ? <Cart></Cart> : ""}
    </div>
  );
}

export default Mypage;
