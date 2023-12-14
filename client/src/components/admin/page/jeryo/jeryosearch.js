import React, { useState } from "react";

function Jeryosearch(props) {
  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if(value == ""){
      props.setCategorySelect1(value);
      props.setCategorySelect2(value);
    } else {
      props.setCategorySelect1(value);
    }
  };

  const handleCategorySelect2Change = (event) => {
    const value = event.target.value;
    props.setCategorySelect2(value);
  };

  const handleStartpriceChange = (event) => {
    const value = event.target.value;
    props.setStartprice(value);
  };

  const handleEndpriceChange = (event) => {
    const value = event.target.value;
    props.setEndprice(value);
  };

  const handleSerchcategoryChange = (event) => {
    const value = event.target.value;
    props.setSearchcategory(value);
  };

  const handleSerchcChange = (event) => {
    const value = event.target.value;
    props.setSearch(value);
  };

  return (
    <div>
      <div className="CHM_adminProductPageTitle">상품관리</div>
      <div className="CHM_adminProductPageSubTitle">기본검색</div>
      <form>
        <div className="CHM_adminProductPageGridBox">
          <div className="CHM_adminProductPageGrid">
            <label className="CHM_adminProductPageLabel" htmlFor="mainSection">
              검색어
            </label>
            <div className="CHM_adminProductPageSearchSelect">
              <select
                id="mainSection"
                onChange={handleSerchcategoryChange}
                value={props.searchcategory}
              >
                <option value="상품명">상품명</option>
                <option value="상품아이디">상품아이디</option>
                <option value="설명">설명</option>
              </select>
              <input type="text" onChange={handleSerchcChange} />
            </div>
          </div>
          <div className="CHM_adminProductPageGrid">
            <label
              className="CHM_adminProductPageLabel"
              htmlFor="categorySelect1"
            >
              카테고리
            </label>
            <div className="CHM_adminProductPageSearchSelect">
              <select
                id="categorySelect1"
                onChange={handleCategorySelect1Change}
                value={props.categorySelect1}
              >
                <option value="">=카테고리선택=</option>
                <option value="0">빵</option>
                <option value="1">야채</option>
                <option value="2">소스</option>
              </select>

              {/* {props.categorySelect1 === "0" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="0">클래식</option>
                  <option value="1">프레쉬&라이트</option>
                  <option value="2">프리미엄</option>
                  <option value="3">신제품</option>
                </select>
              )}

              {props.categorySelect1 === "1" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="4">시그니처 랩</option>
                  <option value="5">미니 랩</option>
                </select>
              )}

              {props.categorySelect1 === "2" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="6">클래식</option>
                  <option value="7">프레쉬&라이트</option>
                  <option value="8">프리미엄</option>
                  <option value="9">신제품</option>
                </select>
              )}

              {props.categorySelect1 === "3" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="10">샌드위치</option>
                  <option value="11">랩</option>
                </select>
              )}

              {props.categorySelect1 === "4" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="12">스마일 썹</option>
                </select>
              )}

              {props.categorySelect1 === "5" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="13">샌드위치</option>
                  <option value="14">쿠키</option>
                </select>
              )} */}
            </div>
          </div>
          <div className="CHM_adminProductPageGrid">
            <label className="CHM_adminProductPageLabel">상품가격</label>
            <div className="CHM_adminProductPagePriceSelect">
              <input
                onChange={handleStartpriceChange}
                value={props.startprice}
                name="startprice"
                type="number"
              ></input>
              원 이상 ~{" "}
              <input
                onChange={handleEndpriceChange}
                value={props.endprice}
                name="endprice"
                type="number"
                style={{ marginLeft: "0.5vw" }}
              ></input>
              원 이하
            </div>
          </div>
          <div className="CHM_adminProductPageGrid">
            <label className="CHM_adminProductPageLabel">판매여부</label>
            <div className="CHM_adminProductPageSellSelect">
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  checked={props.selectedSalesStatus == "0"}
                  onChange={() => props.setSelectedSalesStatus("0")}
                />
                출시
              </label>
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  checked={props.selectedSalesStatus == "1"}
                  onChange={() => props.setSelectedSalesStatus("1")}
                />
                품절
              </label>
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  checked={props.selectedSalesStatus == "2"}
                  onChange={() => props.setSelectedSalesStatus("2")}
                />
                판매종료
              </label>
            </div>
          </div>
        </div>

        <div className="CHM_adminProductSearchBtnBox">
          <button onClick={props.resetSearchState}>초기화</button>
        </div>
      </form>
    </div>
  );
}

export default Jeryosearch;
