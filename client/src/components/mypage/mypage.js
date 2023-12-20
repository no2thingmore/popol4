import axios from "axios";
import { API_URL } from "../config/contansts";
import { useState } from "react";
import "./mypage.css";
import { useParams } from 'react-router-dom';
import Cart from './cart';
import Select from './select';
import Infoedit from './infoedit';

function Mypage() {
  const {select} = useParams()
  const [status, setStatus] = useState(select)
  const [user, setUser] = useState({
    id: 1,
    email: "ssp04364@naver.com",
    password: "gkals5542@",
    name: "차하민",
    contact_number: 21705542,
    role: 0,
    created_at: "2023-12-15",
  });

  return (
    <div className="CHM_mypageBox">
      {status === "none" ? <Select user={user}></Select> : ""}
      {status === "edit" ? <Infoedit user={user}></Infoedit> : ""}
      {status === "cart" ? <Cart></Cart> : ""}
    </div>
  );
}

export default Mypage;
