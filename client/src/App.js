import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from "./components/mainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;