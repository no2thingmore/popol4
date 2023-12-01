import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;