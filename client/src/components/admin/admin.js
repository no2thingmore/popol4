import { useState } from "react";
import Header from "./header";
import "./admin.css";
import { useParams, Link } from "react-router-dom";
import User from "./page/user/user";
import Store from "./page/store/store";
import Product from "./page/product/product";
import Option from "./page/option/option";
import Design from "./page/design/design";
import Jeryo from "./page/jeryo/jeryo";
import Home from "./page/home/home";
import Sup from "./page/sup/sup";

function Admin() {
  const { type } = useParams();
  const [menu, setMenu] = useState(type);

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  return (
    <div className="admin_contents">
      <div>
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="admin_tagBox">
        <nav>
          <ul className="admin_tags">
            <li>
              <Link
                to="/admin/user"
                className={menu === "회원관리" ? "active" : "noactive"}
                onClick={() => MenuClick("회원관리")}
              >
                회원관리
              </Link>
            </li>
            <li>
              <a
                href="/admin/jeryo/none"
                className={menu === "카테고리관리" ? "active" : "noactive"}
                onClick={() => MenuClick("카테고리관리")}
              >
                카테고리관리
              </a>
            </li>
            <li>
              <a
                href="/admin/product/none"
                className={menu === "상품관리" ? "active" : "noactive"}
                onClick={() => MenuClick("상품관리")}
              >
                상품관리
              </a>
            </li>
            <li>
              <a
                href="/admin/support/inquiry"
                className={menu === "고객지원" ? "active" : "noactive"}
                onClick={() => MenuClick("고객지원")}
              >
                고객지원
              </a>
            </li>
            <li>
              <Link
                to="/admin/design"
                className={menu === "디자인관리" ? "active" : "noactive"}
                onClick={() => MenuClick("디자인관리")}
              >
                디자인관리
              </Link>
            </li>
            <li>
              <Link
                to="/admin/option"
                className={menu === "설정" ? "active" : "noactive"}
                onClick={() => MenuClick("설정")}
              >
                설정
              </Link>
            </li>
            <li>
              <Link
                to="/admin/store/none"
                className={menu === "방 등록하기" ? "active" : "noactive"}
                onClick={() => MenuClick("방 등록하기")}
              >
                가게 등록하기
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu_info">
        {menu === "home" && <div>{<Home></Home>}</div>}

        {menu === "user" && <div>{<User></User>}</div>}

        {menu === "jeryo" && <div>{<Jeryo></Jeryo>}</div>}

        {menu === "product" && <Product></Product>}

        {menu === "support" && <Sup />}

        {menu === "design" && <div>{<Design></Design>}</div>}

        {menu === "option" && <div>{<Option></Option>}</div>}

        {menu === "store/none" && <div>{<Store></Store>}</div>}
      </div>
    </div>
  );
}

export default Admin;
