import React, { useState } from "react";
import MapContainer from "./map";

function LandingPage() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <div className="CHM_serachBG">
      <div className='CHM_serachFlex'>
        <form className="CHM_inputForm" onSubmit={handleSubmit}>
          <input
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            value={InputText}
          />
          <i  type="submit" class="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>

      <MapContainer searchPlace={Place} />
    </div>
  );
}

export default LandingPage;
