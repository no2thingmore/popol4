import React, { useState } from "react";

function Search(props) {
  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if(value === "false"){
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
                <option value="false">=카테고리선택=</option>
                <option value="샌드위치">샌드위치</option>
                <option value="랩ㆍ기타">랩ㆍ기타</option>
                <option value="샐러드">샐러드</option>
                <option value="아침메뉴">아침메뉴</option>
                <option value="스마일 썹">스마일 썹</option>
                <option value="단체메뉴">단체메뉴</option>
              </select>

              {props.categorySelect1 === "샌드위치" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="클래식">클래식</option>
                  <option value="프레쉬&라이트">프레쉬&라이트</option>
                  <option value="프리미엄">프리미엄</option>
                  <option value="신제품">신제품</option>
                </select>
              )}

              {props.categorySelect1 === "랩ㆍ기타" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="시그니처 랩">시그니처 랩</option>
                  <option value="미니 랩">미니 랩</option>
                </select>
              )}

              {props.categorySelect1 === "샐러드" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="클래식">클래식</option>
                  <option value="프레쉬&라이트">프레쉬&라이트</option>
                  <option value="프리미엄">프리미엄</option>
                  <option value="신제품">신제품</option>
                </select>
              )}

              {props.categorySelect1 === "아침메뉴" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="샌드위치">샌드위치</option>
                  <option value="랩">랩</option>
                </select>
              )}

              {props.categorySelect1 === "스마일 썹" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="스마일 썹">스마일 썹</option>
                </select>
              )}

              {props.categorySelect1 === "단체메뉴" && (
                <select
                  id="categorySelect2"
                  onChange={handleCategorySelect2Change}
                >
                  <option value="false">=카테고리선택=</option>
                  <option value="샌드위치">샌드위치</option>
                  <option value="쿠키">쿠키</option>
                </select>
              )}
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
                  value="진열"
                  checked={props.selectedSalesStatus === "진열"}
                  onChange={() => props.setSelectedSalesStatus("진열")}
                />
                진열
              </label>
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  value="품절"
                  checked={props.selectedSalesStatus === "품절"}
                  onChange={() => props.setSelectedSalesStatus("품절")}
                />
                품절
              </label>
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  value="단종"
                  checked={props.selectedSalesStatus === "단종"}
                  onChange={() => props.setSelectedSalesStatus("단종")}
                />
                단종
              </label>
              <label>
                <input
                  type="radio"
                  name="salesStatus"
                  value="중지"
                  checked={props.selectedSalesStatus === "중지"}
                  onChange={() => props.setSelectedSalesStatus("중지")}
                />
                중지
              </label>
            </div>
          </div>
        </div>

        <div className="CHM_adminProductSearchBtnBox">
          <button onClick={props.handleSerchedChange}>검색</button>
          <button>초기화</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
