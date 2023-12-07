import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MapContainer = ({ searchPlace }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { kakao } = window;
  
    if (
      kakao &&
      kakao.maps &&
      kakao.maps.services &&
      kakao.maps.services.Places
    ) {
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 3 });
      const container = document.getElementById("myMap");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
  
      const ps = new kakao.maps.services.Places();
  
      // Use category_filter to limit the search to the food category
      ps.keywordSearch(searchPlace, placesSearchCB, { category_filter: "FD6" });
  
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
  
          for (let i = 0; i < data.length; i++) {
            // Check if the place category is '음식점' (restaurant)
            if (data[i].category_name === "음식점") {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
          }
  
          map.setBounds(bounds);
        }
      }
  
      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
  
        const location = place.place_name;
        console.log("location: ", location);
  
        // 마커에 클릭 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            `<div style="padding:5px;font-size:0.8vw;cursor: pointer;" onclick="handleClick('${location}')">${location}</div>`
          );
          infowindow.open(map, marker);
        });
      }
  
      // 클릭 이벤트 핸들러에서 페이지 이동과 함께 location 값을 전달하는 함수
      window.handleClick = (location) => {
        navigate(`/order/Fast-Sub/step2/${location}/sandwich/Nan`);
      };
    }
  }, [searchPlace, navigate]);

  return <div id="myMap" className="CHM_kakaomap"></div>;
};

export default MapContainer;