import { Link } from "react-router-dom";
function Header(props) {
  const logOut = () => {};
  return (
    <div className="admin_header">
      <a href="/admin/home">
        <div id="admin_logo">
          <h1>Administrator Page</h1>
        </div>
      </a>
      <ul className="admin_ul_list">
        <li>
          <Link to={"#"}>관리자정보</Link>
        </li>
        <li>
          <Link to={"/admin"}>관리자홈</Link>
        </li>
        <li>
          <Link to={"/"}>메인페이지</Link>
        </li>
        <li>
          <Link to={"/"} onClick={logOut}>
            로그아웃
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
