import React, { useEffect, useState } from "react";
import "./jeryo.css";
import Jeryosearch from "./jeryosearch";
import Jeryoresult from "./jeryoresult";
import Jeryoplus from "./jeryoplus";
import Jeryoedit from "./jeryoedit";

import axios from "axios";

import { API_URL } from "../../../config/contansts";

function Jeryo() {
  const [selectedSalesStatus, setSelectedSalesStatus] = useState("");
  const [categorySelect1, setCategorySelect1] = useState("");
  const [categorySelect2, setCategorySelect2] = useState("");
  const [startprice, setStartprice] = useState(0);
  const [endprice, setEndprice] = useState(0);
  const [searchcategory, setSearchcategory] = useState("상품명");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("list");
  const [id, setId] = useState("");

  console.log("id: ", id);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/ingredient/admin`)
      .then((res) => {
        console.log("db조회 완료");
        console.log("bbang",res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("실패");
      });
  }, []);

  const handleDeleteItems = (itemIds) => {
    // 선택된 아이템을 삭제하기 위해 서버에 요청 보내기
    axios
      .delete(`${API_URL}/ingredient/admin`, {
        data: { id: itemIds }, // 서버에서는 이 데이터를 활용하여 삭제 처리
      })
      .then((response) => {
        console.log("아이템 삭제 성공");
        // 성공적으로 삭제된 경우, 로컬 상태를 업데이트하거나 다른 필요한 작업 수행
      })
      .catch((error) => {
        console.error("아이템 삭제 실패:", error);
      });
  };

  const filterResults = () => {
    let filteredData = data;

    if (selectedSalesStatus) {
      filteredData = filteredData.filter(
        (item) => item.status == selectedSalesStatus
      );
    }

    if (startprice && endprice) {
      filteredData = filteredData.filter(
        (item) => startprice <= item.price && item.price <= endprice
      );
    }

    if (categorySelect1) {
      filteredData = filteredData.filter(
        (item) => item.kinds == categorySelect1
      );
    }

    if (categorySelect2) {
      filteredData = filteredData.filter(
        (item) => item.tags == categorySelect2
      );
    }

    if (search) {
      filteredData = filteredData.filter(
        (item) =>
          (searchcategory === "상품명" && item.kname.includes(search)) ||
          (searchcategory === "상품아이디" &&
            item.id === parseInt(search, 10)) ||
          (searchcategory === "설명" && item.comment.includes(search))
      );
    }

    return filteredData;
  };

  const filteredResults = filterResults();

  const resetSearchState = (e) => {
    e.preventDefault();
    setSelectedSalesStatus("");
    setCategorySelect1("");
    setCategorySelect2("");
    setStartprice(0);
    setEndprice(0);
    setSearchcategory("상품명");
    setSearch("");
  };


  return (
    <div className="CHM_adminProductPageBg">
      {page === "list" ? (
        <Jeryosearch
          categorySelect1={categorySelect1}
          setCategorySelect1={setCategorySelect1}
          categorySelect2={categorySelect2}
          setCategorySelect2={setCategorySelect2}
          selectedSalesStatus={selectedSalesStatus}
          setSelectedSalesStatus={setSelectedSalesStatus}
          startprice={startprice}
          setStartprice={setStartprice}
          endprice={endprice}
          setEndprice={setEndprice}
          searchcategory={searchcategory}
          setSearchcategory={setSearchcategory}
          search={search}
          setSearch={setSearch}
          resetSearchState={resetSearchState}
        ></Jeryosearch>
      ) : (
        ""
      )}
      {page === "list" ? (
        <Jeryoresult
          filteredResults={filteredResults}
          onDeleteItems={handleDeleteItems}
          setPage={setPage}
          setId={setId}
        ></Jeryoresult>
      ) : (
        ""
      )}

      {page === "plus" ? <Jeryoplus setPage={setPage}></Jeryoplus> : ""}

      {page === "jeryoedit" ? (
        <Jeryoedit
          setPage={setPage}
          data={data}
          id={id}
        ></Jeryoedit>
      ) : (
        ""
      )}
    </div>
  );
}

export default Jeryo;
