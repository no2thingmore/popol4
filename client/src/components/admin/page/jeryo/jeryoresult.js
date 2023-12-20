import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/contansts";

const getKindsLabel = (kinds) => {
  switch (kinds) {
    case 0:
      return "빵";
    case 1:
      return "야채";
    case 2:
      return "치즈";
    case 3:
      return "소스";
  }
};

const getTagsabel = (tags) => {
  switch (tags) {
    case 0:
      return "클래식";
    case 1:
      return "프레쉬&라이트";
    case 2:
      return "프리미엄";
    case 3:
      return "신제품";
    case 4:
      return "시그니처 랩";
    case 5:
      return "미니 랩";
    case 6:
      return "클래식";
    case 7:
      return "프레쉬&라이트";
    case 8:
      return "프리미엄";
    case 9:
      return "신제품";
    case 10:
      return "샌드위치";
    case 11:
      return "랩";
    case 12:
      return "스마일 썹";
    case 13:
      return "샌드위치";
    case 14:
      return "쿠키";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case 0:
      return "출시";
    case 1:
      return "품절";
    case 2:
      return "판매종료";
  }
};

function Jeryoresult(props) {
  const navigate = useNavigate();
  function confirmModal(id, kname) {
    if (window.confirm(`"${kname}"상품을 정말 삭제하시겠습니까?`)) {
      axios
        .delete(`${API_URL}/ingredient/admin`, {
          data: { id: id }, // 서버에서는 이 데이터를 활용하여 삭제 처리
        })
        .then((response) => {
          console.log("아이템 삭제 성공");
          navigate("/admin/jeryo/none")
          window.location.reload();
          // 성공적으로 삭제된 경우, 로컬 상태를 업데이트하거나 다른 필요한 작업 수행
        })
        .catch((error) => {
          console.error("아이템 삭제 실패:", error);
        });
    } else {
      console.log("취소. 변화 없음");
    }
  }


  const handleEditButtonClick = (id) => {
    props.setId(id);
    navigate("/admin/jeryo/jeryoedit");
  };

  const count = props.filteredResults.length;
  return (
    <>
      <div className="CHM_adminProductPageSubTitle">
        <div style={{ fontSize: "1.7vw" }}>상품리스트 ({count}건)</div>
        <a href="/admin/jeryo/jeryoplus">
          <div className="CHM_adminProductPlusBtn">+상품추가</div>
        </a>
      </div>
      <div className="CHM_adminProductpageTableBox">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}>번호</th>
              <th style={{ width: "10%" }}>이미지</th>
              <th style={{ width: "20%" }}>
                <div
                  style={{
                    paddingBottom: "0.7vw",
                    borderBottom: "1px solid #c6c6c6",
                  }}
                >
                  상품명
                </div>
                <div style={{ paddingTop: "0.7vw" }}>카테고리</div>
              </th>
              <th style={{ width: "25%" }}>내용</th>
              <th style={{ width: "10%" }}>
                최초등록일 /<br />
                <div style={{ marginTop: "0.5vw" }}>최근수정일</div>
              </th>
              {/* <th style={{ width: "10%" }}>진열</th> */}
              <th style={{ width: "10%" }}>가격</th>
              <th style={{ width: "10%" }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredResults.map((a, i) => {
              return (
                <tr key={a.id} style={{ height: "6vw" }}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={API_URL + "/upload/" + a.image_url}
                      width="65%"
                    ></img>
                  </td>
                  <td
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      height: "6vw",
                      padding: "0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottom: "1px solid #c6c6c6",
                      }}
                    >
                      {a.kname}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      종류: {getKindsLabel(a.kinds)}
                    </div>
                  </td>
                  <td style={{ padding: "1vw" }}>{a.comment}</td>
                  <td>
                    2023-01-01 /<br />
                    <div style={{ marginTop: "0.5vw" }}>2023-12-14</div>
                  </td>
                  {/* <td>{getStatusLabel(a.status)}</td> */}
                  <td>{a.add_price}원</td>
                  <td>
                    <button
                      className="CHM_adminproducttdBtn"
                      style={{
                        fontSize: "1vw",
                        marginRight: "0.8vw",
                        padding: "0.3vw 0.6vw",
                        backgroundColor: "rgb(52, 52, 52)",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => handleEditButtonClick(a.id)}
                    >
                      수정
                    </button>
                    <button
                      className="CHM_adminproducttdBtn"
                      onClick={() => confirmModal(a.id, a.kname)}
                      style={{
                        fontSize: "1vw",
                        padding: "0.3vw 0.6vw",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Jeryoresult;
