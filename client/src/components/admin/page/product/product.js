import React, { useEffect, useState } from "react";
import "./product.css";
import Search from "./search";
import Result from "./result";
import Plus from "./plus";
import Edit from "./edit";
import axios from "axios";
import { API_URL } from "../../../config/contansts";
import { useParams } from "react-router-dom";

function Product() {
  const { category } = useParams();
  const [selectedSalesStatus, setSelectedSalesStatus] = useState("");
  const [categorySelect1, setCategorySelect1] = useState("");
  const [categorySelect2, setCategorySelect2] = useState("");
  const [startprice, setStartprice] = useState(0);
  const [endprice, setEndprice] = useState(0);
  const [searchcategory, setSearchcategory] = useState("상품명");
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");

  console.log("id: ", id);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/food/admin`)
      .then((res) => {
        console.log("db조회 완료");
        console.log(res.data);
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
      .delete(`${API_URL}/food/admin`, {
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
      {category === "none" ? (
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
      {category === "none" ? (
        <Result
          filteredResults={filteredResults}
          onDeleteItems={handleDeleteItems}
          setId={setId}
        ></Result>
      ) : (
        ""
      )}

      {category === "plus" ? <Plus></Plus> : ""}

      {category === "edit" ? <Edit data={data} id={id}></Edit> : ""}
    </div>
  );
}

export default Product;
