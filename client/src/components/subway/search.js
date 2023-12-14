/* global kakao */

import React, { useEffect } from "react";

function StoreSearch() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.06618608392056, 127.08111309444713), // 지도 중심좌표
      level: 3
    };

    new kakao.maps.Map(container, options); // 지도 생성
  }, []);

  return (
    <div>
      <div id="map" style={{width: '100%', height: '45em'}}></div>
    </div>
  );
}

export default StoreSearch;