import React, { useState } from "react";
import "./product.css";
import Search from "./search";
import Result from "./result";
import img from "./sandwich.png";
import Plus from "./plus";
import Edit from "./edit";

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
  const [data, setData] = useState([
    {
      id: 1,
      admin_id: 1,
      kname: "에그마요",
      ename: "Egg Mayo",
      image_url: img,
      coment: "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
      ingred_gram: 238,
      ingred_kcal: 416,
      ingred_protein: 16.4,
      ingred_fat: 4.8,
      ingred_sugars: 7.7,
      ingred_salt: 554,
      price: 6000,
      tags: 1,
      kinds: 0,
      status: 0,
    },
    {
      id: 2,
      admin_id: 1,
      kname: "이탈리안 비엠티",
      ename: "Italian B.M.T.",
      image_url: img,
      coment:
        "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러!",
      ingred_gram: 228,
      ingred_kcal: 388,
      ingred_protein: 21,
      ingred_fat: 5.9,
      ingred_sugars: 8.6,
      ingred_salt: 1064,
      price: 6000,
      tags: 2,
      kinds: 0,
      status: 0,
    },
    {
      id: 3,
      admin_id: 1,
      kname: "차하민",
      ename: "Chahamin",
      image_url: img,
      coment: "세계최고 탑 라이너",
      ingred_gram: 228,
      ingred_kcal: 388,
      ingred_protein: 21,
      ingred_fat: 5.9,
      ingred_sugars: 8.6,
      ingred_salt: 1064,
      price: 120000,
      tags: 10,
      kinds: 3,
      status: 2,
    },
  ]);
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
