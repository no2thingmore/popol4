import { useState } from "react";

function Plus(props) {
  const [categort1, setCategory1] = useState("");

  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCategory1(value);
      setCategory1(value);
    } else {
      setCategory1(value);
    }
  };

  return (
    <div>
      <div
        className="CHM_adminProductPageSubTitle"
        style={{ fontSize: "1.8vw" }}
      >
        상품 추가
      </div>
      <div className="CHM_plusformBox">
        <form>
          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">상품명(한국어)</div>
              <input placeholder="한국이름"></input>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">상품명(영어)</div>
              <input placeholder="영어이름"></input>
            </div>
          </div>

          

          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">종류</div>
              <select
                value={categort1}
                onChange={handleCategorySelect1Change}
                id="categorySelect1"
                style={{
                  marginLeft: "1vw",
                  padding: "0.3vw",
                  fontSize: "1.3vw",
                  width: "70%",
                }}
              >
                <option value="">=카테고리선택=</option>
                <option value="0">샌드위치</option>
                <option value="1">랩ㆍ기타</option>
                <option value="2">샐러드</option>
                <option value="3">아침메뉴</option>
                <option value="4">스마일 썹</option>
                <option value="5">단체메뉴</option>
              </select>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">태그</div>
              {categort1 === "0" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="0">클래식</option>
                  <option value="1">프레쉬&라이트</option>
                  <option value="2">프리미엄</option>
                  <option value="3">신제품</option>
                </select>
              )}

              {categort1 === "1" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="4">시그니처 랩</option>
                  <option value="5">미니 랩</option>
                </select>
              )}

              {categort1 === "2" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="6">클래식</option>
                  <option value="7">프레쉬&라이트</option>
                  <option value="8">프리미엄</option>
                  <option value="9">신제품</option>
                </select>
              )}

              {categort1 === "3" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="10">샌드위치</option>
                  <option value="11">랩</option>
                </select>
              )}

              {categort1 === "4" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="12">스마일 썹</option>
                </select>
              )}

              {categort1 === "5" && (
                <select
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="13">샌드위치</option>
                  <option value="14">쿠키</option>
                </select>
              )}
            </div>
          </div>

          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">가격</div>
              <input placeholder="가격"></input>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">판매여부</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center"
                }}
              >
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="salesStatus"
                    value="0"
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  출시
                </label>
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="salesStatus"
                    value="1"
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  품절
                </label>
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="salesStatus"
                    value="2"
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  판매종료
                </label>
              </div>
            </div>
          </div>

          <div className="CHM_plustablegrid3">
            <div className="CHM_plusTableTitle">상품설명</div>
            <input placeholder="상품설명" style={{ width: "90%" }}></input>
          </div>

          <div className="CHM_plustable6grid">
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">칼로리</div>
              <input></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">무게(g)</div>
              <input></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">단백질</div>
              <input></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">포화지방</div>
              <input></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">당류</div>
              <input></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">나트륨</div>
              <input></input>
            </div>
          </div>

          <div className="CHM_plustablegrid3">
            <div className="CHM_plusTableTitle">이미지</div>
            <input placeholder="이미지"></input>
          </div>
        </form>
      </div>
      <div className="CHM_plusPageBtnBox">
        <div
          onClick={() => {
            props.setPage("list");
          }}
        >
          상품등록
        </div>
        <div
          onClick={() => {
            props.setPage("list");
          }}
        >
          취소
        </div>
      </div>
    </div>
  );
}

export default Plus;
