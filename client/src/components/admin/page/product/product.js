import React, { useEffect, useState } from "react";
import "./product.css";
import Search from "./search";
import Result from "./result";
import img from "./sandwich.png";
import Plus from "./plus";
import Edit from "./edit";
import axios from "axios"
import { API_URL } from "../../../config/contansts";

function Product() {
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

  useEffect(async ()=>{
    await axios.get(`${API_URL}/food/admin`)
    .then((res)=>{
      console.log('db조회 완료');
      setData(res);
    })
    .catch((err)=>{
      console.error(err);
      console.log("실패");
    })
  },[])


  const handleDeleteItems = (itemIds) => {
    // 선택된 아이템을 데이터에서 제거
    setData(data.filter((item) => !itemIds.includes(item.id)));
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

    // categorySelect2에 대한 필터링
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
          (searchcategory === "설명" && item.coment.includes(search))
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
        <Search
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
        ></Search>
      ) : (
        ""
      )}
      {page === "list" ? (
        <Result
          filteredResults={filteredResults}
          onDeleteItems={handleDeleteItems}
          setPage={setPage}
          setId={setId}
        ></Result>
      ) : (
        ""
      )}

      {page === "plus" ? <Plus setPage={setPage}></Plus> : ""}

      {page === "edit" ? (
        <Edit
          setPage={setPage}
          data={data}
          id={id}
        ></Edit>
      ) : (
        ""
      )}
    </div>
  );
}

export default Product;
