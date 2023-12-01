import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from "./components/mainPage";
import History from "./components/subway/history";
import Promise from "./components/subway/promise";
import Apply from "./components/subway/apply";
import StoreSearch from "./components/subway/search";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/History" element={<History></History>}></Route>
      <Route path="/Promise" element={<Promise></Promise>}></Route>
      <Route path="/Apply" element={<Apply></Apply>}></Route>
      <Route path="/StoreSearch" element={<StoreSearch></StoreSearch>}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;