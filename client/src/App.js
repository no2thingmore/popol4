import './App.css';
import { Route, Routes } from "react-router-dom";
import History from './components/subway/history';
import Promise from './components/subway/promise';
import Apply from './components/subway/apply';
import StoreSearch from './components/subway/search';

function App() {
  return (
    <div className="App">
      <Route path="/History" element={<History></History>}></Route>
      <Route path="/Promise" element={<Promise></Promise>}></Route>
      <Route path="/Apply" element={<Apply></Apply>}></Route>
      <Route path="/StoreSearch" element={<StoreSearch></StoreSearch>}></Route>
    </div>
  );
}

export default App;
