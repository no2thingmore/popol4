import { Link } from "react-router-dom";
import Kakao from './map';
import Serach from "./serach"

function Store() {
  return (
    <div>
      <div className="CHM_faststep1MapBox">
        <Serach></Serach>
      </div>
    </div>
  );
}

export default Store;
