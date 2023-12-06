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
import Event from "./components/NewsPage/Event";
import Login from "./components/login/login";
import Menuintro from "./components/menuintro/menuintro";
import Detail from "./components/productdetail/detail";
import Order from "./components/order/order";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지가 마운트되거나 location이 변경될 때 스크롤을 맨 위로 조정
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 아무것도 렌더링하지 않음
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/History" element={<History></History>}></Route>
        <Route path="/Promise" element={<Promise></Promise>}></Route>
        <Route path="/Apply" element={<Apply></Apply>}></Route>
        <Route
          path="/StoreSearch"
          element={<StoreSearch></StoreSearch>}
        ></Route>
        <Route path="/Event" element={<Event />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/menuIntro/:product"
          element={<Menuintro></Menuintro>}
        ></Route>
        <Route
          path="/menuIntro/:product/:id"
          element={<Detail></Detail>}
        ></Route>
        <Route
          path="/order/:type/:step/:location/:product/:id"
          element={<Order></Order>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
