import { Link } from "react-router-dom";
import "./header.css"
function Header(){

  return(
    <div className="admin_header">
      <div id="admin_logo">
        <h1>Administrator Page</h1>
      </div>
      <ul className="admin_ul_list">
        <li>
          <Link to={'#'}>관리자정보</Link>
        </li>
        <li>
          <Link to={'/admin'}>관리자홈</Link>
        </li>
        <li>
          <Link to={'/'}>메인페이지</Link>
        </li>
        <li>
          <Link to={'/'}>로그아웃</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;