import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MapContainer = ({ searchPlace }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { kakao } = window;

    if (kakao && kakao.maps && kakao.maps.services && kakao.maps.services.Places) {
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 3 });
      const container = document.getElementById("myMap");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      const ps = new kakao.maps.services.Places();

      // 검색어에 "써브웨이"가 포함되어 있는지 확인
      if (searchPlace.includes("써브웨이")) {
        ps.keywordSearch(searchPlace, placesSearchCB, { category_filter: "FD6" });
      } else {
        // 포함되어 있지 않으면 "써브웨이" 키워드를 추가하여 검색
        ps.keywordSearch(`${searchPlace} 써브웨이`, placesSearchCB, { category_filter: "FD6" });
      }

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
          let subwayFound = false;

          for (let i = 0; i < data.length; i++) {
            console.log(data[i].category_name);

            if (data[i].category_name.includes("써브웨이")) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              subwayFound = true;
            }
          }

          if (subwayFound) {
            map.setBounds(bounds);
          } else {
            alert("검색 결과에 써브웨이가 없습니다.");
          }
        }
      }

      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        const location = place.place_name;
        console.log("location: ", location);

        kakao.maps.event.addListener(marker, "click", function () {
          infowindow.setContent(
            `<div style="padding:5px;font-size:0.8vw;cursor: pointer;" onclick="handleClick('${location}')">${location}</div>`
          );
          infowindow.open(map, marker);
        });
      }

      window.handleClick = (location) => {
        navigate(`/order/Fast-Sub/step2/${location}/0/Nan`);
      };
    }
  }, [searchPlace, navigate]);

  return <div id="myMap" className="CHM_kakaomap"></div>;
};

export default MapContainer;