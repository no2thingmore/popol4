import { useEffect, useState } from "react";
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

function Jeryoresult(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productbasedata, setProductbasedata] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setProductbasedata(props.filteredResults);
  }, [props.filteredResults]);

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

  const itemsPerPage = 5; // 한 페이지당 표시할 공지사항 수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productbasedata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(productbasedata.length / itemsPerPage);
  const maxVisiblePages = 3; // 보이는 페이지 숫자의 최대 개수
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

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
            {currentItems.map((a, i) => {
              const itemNumber = (currentPage - 1) * itemsPerPage + i + 1;
              return (
                <tr key={a.id} style={{ height: "6vw" }}>
                  <td>{itemNumber}</td>
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
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={productbasedata.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        />
      </div>
    </>
  );
}

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
  pageNumbers,
}) {
  return (
    <div className="CHM_pagination">
      {" "}
      {/* 현재 페이지의 위치를 알려주는 컴포넌트 */}
      {currentPage > 1 && (
        <span onClick={() => onPageChange(currentPage - 1)}>&laquo;</span>
      )}
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </span>
      ))}
      {currentPage < totalPages && (
        <span onClick={() => onPageChange(currentPage + 1)}>&raquo;</span>
      )}
    </div>
  );
}

export default Jeryoresult;
