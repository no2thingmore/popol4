import { useState, useEffect } from "react";
import Header from "./header";
import "./admin.css";
import { useParams, Link } from "react-router-dom";
import User from "./page/user/user";
import Store from "./page/store/store";
import Product from "./page/product/product";
import Option from "./page/option/option";
import Design from "./page/design/design";
import Category from "./page/category/category";
import Home from "./page/home/home";
import Inquiry from "./page/suppot/submenu/inquiry";
import Res from "./page/suppot/submenu/res";
import Event from "./page/suppot/submenu/event";
import News from "./page/suppot/submenu/news";
import Faq from "./page/suppot/submenu/faq";

function Admin() {
  const { type } = useParams();
  const [menu, setMenu] = useState(type);


  // type 값이 변경될 때마다 실행됨
  // URL 변경에 따라 menu 상태를 동기화
  useEffect(() => {
    if (type) {
      setMenu(type);
    }
  }, [type]);

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
              <Link
                to="/admin/category"
                className={menu === "카테고리관리" ? "active" : "noactive"}
                onClick={() => MenuClick("카테고리관리")}
              >
                카테고리관리
              </Link>
            </li>
            <li>
              <Link
                to="/admin/product"
                className={menu === "상품관리" ? "active" : "noactive"}
                onClick={() => MenuClick("상품관리")}
              >
                상품관리
              </Link>
            </li>
            <li>
              <Link
                to="/admin/support-inquiry"
                className={menu === "고객지원" ? "active" : "noactive"}
                onClick={() => MenuClick("고객지원")}
              >
                고객지원
              </Link>
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
                to="/admin/store"
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

        {menu === "category" && <div>{<Category></Category>}</div>}

        {menu === "product" && <div>{<Product></Product>}</div>}

        {menu === "support-inquiry" && <Inquiry />}
        {menu === "support-res" && <Res />}
        {menu === "support-event" && <Event />}
        {menu === "support-news" && <News />}
        {menu === "support-faq" && <Faq />}

        {menu === "design" && <div>{<Design></Design>}</div>}

        {menu === "option" && <div>{<Option></Option>}</div>}

        {menu === "store" && <div>{<Store></Store>}</div>}
      </div>
    </div>
  );
}

export default Admin;
