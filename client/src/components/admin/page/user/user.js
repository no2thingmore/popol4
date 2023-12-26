import { useParams } from "react-router-dom";
import SubTemplate from "./sub_template";
import "./user.css"
import { useEffect, useState } from "react";
import Main from "./components/main";
import Nomal from "./components/user";
import Oner from "./components/oner";
import Admin from "./components/admin";
import EditUser from "./components/editUser";

function User(){
  const params = useParams();
  console.log(params);
  return (
    <div>
      <SubTemplate />
      {params.category === "main" && <Main />}
      {params.category === "nomal" && <Nomal />}
      {params.category === "oner" && <Oner />}
      {params.category === "admin" && <Admin />}
      {params.category === "edit" && <EditUser />}
    </div>
  )
}

export default User;