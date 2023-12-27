import { useState } from "react";
import Header from "./header";
import "./admin.css";
import { useParams, Link } from "react-router-dom";
import User from "./page/user/user";
import Store from "./page/store/store";
import Product from "./page/product/product";
import Setting from "./page/setting/setting";
import Jeryo from "./page/jeryo/jeryo";
import Home from "./page/home/home";
import Sup from "./page/sup/sup";
import Adminlogin from "./adminlogin";

function Admin() {
  const { type } = useParams();
  const [menu, setMenu] = useState(type);

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  return (
    <div className="admin_contents">
      {menu === "adminlogin" ? (
        <Adminlogin />
      ) : (
        <>
          <div>
            <Header menu={menu} setMenu={setMenu} />
          </div>
          <div className="admin_tagBox">
            <nav>
              <ul className="admin_tags">
                <li>
                  <a
                    href="/admin/user/main"
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
                    재료관리
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
                  <a
                    href="/admin/store/none"
                    className={menu === "방 등록하기" ? "active" : "noactive"}
                    onClick={() => MenuClick("방 등록하기")}
                  >
                    가게 문의하기
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/setting/none"
                    className={menu === "설정" ? "active" : "noactive"}
                    onClick={() => MenuClick("설정")}
                  >
                    설정
                  </a>
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

            {menu === "setting" && <div>{<Setting></Setting>}</div>}

            {menu === "store" && <div>{<Store></Store>}</div>}
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
