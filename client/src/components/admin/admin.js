import { useState } from "react";
import Header from "./header";
import "./admin.css";
import { useParams } from "react-router-dom";
import User from "./page/user/user";
import Store from "./page/store/store";
import Product from "./page/product/product";
import Option from "./page/option/option";
import Design from "./page/design/design";
import Category from "./page/category/category";
import Assit from "./page/assit/assit";
import Home from "./page/home/home";

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
              <a
                href="/admin/user/none"
                className={menu === "회원관리" ? "active" : "noactive"}
                onClick={() => MenuClick("회원관리")}
              >
                회원관리
              </a>
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
                href="/admin/assit/none"
                className={menu === "고객지원" ? "active" : "noactive"}
                onClick={() => MenuClick("고객지원")}
              >
                고객지원
              </a>
            </li>
            <li>
              <a
                href="/admin/design/none"
                className={menu === "디자인관리" ? "active" : "noactive"}
                onClick={() => MenuClick("디자인관리")}
              >
                디자인관리
              </a>
            </li>
            <li>
              <a
                href="/admin/option/none"
                className={menu === "설정" ? "active" : "noactive"}
                onClick={() => MenuClick("설정")}
              >
                설정
              </a>
            </li>
            <li>
              <a
                href="/admin/store/none"
                className={menu === "방 등록하기" ? "active" : "noactive"}
                onClick={() => MenuClick("방 등록하기")}
              >
                가게 등록하기
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu_info">
        {menu === "home" && <div>{<Home></Home>}</div>}

        {menu === "user" && <div>{<User></User>}</div>}

        {menu === "category" && <div>{<Category></Category>}</div>}

        {menu === "product" && <div>{<Product></Product>}</div>}

        {menu === "assit" && <div>{<Assit></Assit>}</div>}

        {menu === "design" && <div>{<Design></Design>}</div>}

        {menu === "option" && <div>{<Option></Option>}</div>}

        {menu === "store" && <div>{<Store></Store>}</div>}
      </div>
    </div>
  );
}

export default Admin;
