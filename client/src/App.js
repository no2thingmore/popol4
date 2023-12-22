import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import History from "./components/subway/history";
import Promise from "./components/subway/promise";
import Apply from "./components/subway/apply";
import StoreSearch from "./components/subway/search";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/mainPage";
import Event from "./components/newsPage/event";
import Newspage from "./components/newsPage/newspage";
import Advertising from "./components/newsPage/advertising";
import Notice from "./components/newsPage/notice";
import NoticeDetail from "./components/newsPage/noticedetail";
import Login from './components/login/login';
import Searchid from './components/login/searchid';
import Searchpw from './components/login/searchpw';
import Franchise from './components/franchise/franchise'
import Menuintro from "./components/menuintro/menuintro";
import Detail from './components/productdetail/detail';
import Order from "./components/order/order"
import Ordertip_1 from "./components/howtouse/howtousesubway/ordertip_1"
import Storeorder from "./components/howtouse/howtousesubway/storeorder"
import Slider from "./components/howtouse/howtousesubway/slider"
import Groupmenu from "./components/howtouse/groupmenu/groupmenu"
import Howtousesubway from "./components/howtouse/howtousesubway/howtousesubway"
import Ingredient from "./components/howtouse/ingredient/ingredient"
import Register from "./components/register/register";
import Admin from "./components/admin/admin";
import FFAQ from './components/helpdesk/ffaq';
import QQNA from './components/helpdesk/qqna';
import Test from "./components/subway/test";
import Mypage from './components/mypage/mypage';
import Comment from "./components/admin/page/sup/submenu/inquiry/comment";
import Subcard from "./components/footer/subcard/subcard";
import Condition from "./components/footer/condition/condition";
import Processing_policy from "./components/footer/processing_policy/processing_policy";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지가 마운트되거나 location이 변경될 때 스크롤을 맨 위로 조정
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 아무것도 렌더링하지 않음
}

function App() {
  const location = useLocation();
  const isCommentPage = location.pathname.startsWith('/admin/');
  return (
    <div className="App">
      <ScrollToTop />
      {!isCommentPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/history" element={<History></History>}></Route>
        <Route path="/promise" element={<Promise></Promise>}></Route>
        <Route path="/apply" element={<Apply></Apply>}></Route>
        <Route path="/storeSearch" element={<StoreSearch></StoreSearch>}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/advertising" element={<Advertising />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/news/:id" element={<NoticeDetail />}></Route>
        <Route path="/order/:type/:step/:location/:product/:id" element={<Order></Order>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/searchid' element={<Searchid />}></Route>
        <Route path='/searchpw' element={<Searchpw />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/franchise/:franchisee' element={<Franchise />}></Route>
        <Route path="/menuIntro/:product" element={<Menuintro></Menuintro>}></Route>
        <Route path="/menuIntro/:product/:id" element={<Detail></Detail>}></Route>
        <Route path="/howToUseSubway" element={<Howtousesubway></Howtousesubway>}></Route>
        <Route path="/ingreDient/:product" element={<Ingredient></Ingredient>}></Route>
        <Route path="/ingreDient/:product/:id" element={<Detail></Detail>}></Route>
        <Route path="/newsPage/:product" element={<Newspage></Newspage>}></Route>
        <Route path="/newsPage/:product/:id" element={<Detail></Detail>}></Route>
        <Route path="/orderTip_1" element={<Ordertip_1></Ordertip_1>}></Route>
        <Route path="/storeOrder" element={<Storeorder></Storeorder>}></Route>
        <Route path="/slider" element={<Slider></Slider>}></Route>
        <Route path="/groupMenu" element={<Groupmenu></Groupmenu>}></Route>
        <Route path="/admin/:type/:category/" element={<Admin></Admin>}></Route>
        <Route path="/admin/:type/:category" element={<Admin></Admin>}></Route>
        <Route path="/admin/:type/:category/:id" element={<Comment />}/>
        <Route path="/ffaq" element={<FFAQ />}></Route>
        <Route path="/qqna" element={<QQNA />}></Route>
        <Route path="/mypage/:select" element={<Mypage />}></Route>
        <Route path="/subcard" element={<Subcard />}></Route>
        <Route path="/condition" element={<Condition />}></Route>
        <Route path="/processing_policy" element={<Processing_policy />}></Route>
      </Routes>
      {!isCommentPage && <Footer />}
    </div>
  );
}

export default App;
