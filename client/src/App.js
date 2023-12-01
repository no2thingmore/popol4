import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import React, { Component } from 'react';
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