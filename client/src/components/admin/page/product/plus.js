import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../../config/contansts";

function Plus(props) {
  const [categort1, setCategory1] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [kname, setKname] = useState("");
  const [ename, setEname] = useState("");
  const [coment, setComent] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [kcal, setKcal] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [sugars, setSugars] = useState("");
  const [salt, setSalt] = useState("");
  const [gram, setGram] = useState("");

  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCategory1(value);
      setCategory1(value);
    } else {
      setCategory1(value);
    }
  };

  const productplus = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API_URL}/food/admin`, {
        kname: kname,
        ename: ename,
        kinds: categort1,
        tags: selectedTag,
        coment: coment,
        price: price,
        status: status,
        ingred_kcal: kcal,
        ingred_protein: protein,
        ingred_fat: fat,
        ingred_sugars: sugars,
        ingred_salt: salt,
        ingred_gram: gram,
      })
      .then(() => {
        console.log("성공");
      })
      .catch((e) => {
        console.log("에러남");
        console.error(e);
      });
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
        <form onSubmit={productplus}>
          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">상품명(한국어)</div>
              <input
                placeholder="한국이름"
                name="kname"
                value={kname}
                onChange={(e) => {
                  setKname(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">상품명(영어)</div>
              <input
                placeholder="영어이름"
                name="ename"
                value={ename}
                onChange={(e) => {
                  setEname(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">종류</div>
              <select
                value={categort1}
                name="kinds"
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
              {categort1 == "0" && (
                <select
                  id="categorySelect2"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="0">클래식</option>
                  <option value="1">프레쉬&라이트</option>
                  <option value="2">프리미엄</option>
                  <option value="3">신제품</option>
                </select>
              )}

              {categort1 == "1" && (
                <select
                  id="categorySelect2"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="4">시그니처 랩</option>
                  <option value="5">미니 랩</option>
                </select>
              )}

              {categort1 == "2" && (
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  id="categorySelect2"
                  name="tags"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="6">클래식</option>
                  <option value="7">프레쉬&라이트</option>
                  <option value="8">프리미엄</option>
                  <option value="9">신제품</option>
                </select>
              )}

              {categort1 == "3" && (
                <select
                  id="categorySelect2"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="10">샌드위치</option>
                  <option value="11">랩</option>
                </select>
              )}

              {categort1 == "4" && (
                <select
                  id="categorySelect2"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="12">스마일 썹</option>
                </select>
              )}

              {categort1 == "5" && (
                <select
                  id="categorySelect2"
                  name="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="13">샌드위치</option>
                  <option value="14">쿠키</option>
                </select>
              )}
            </div>
          </div>

          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">가격</div>
              <input
                placeholder="가격"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">판매여부</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="status"
                    value="0"
                    checked={status === 0}
                    onChange={() => setStatus(0)}
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  출시
                </label>
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="status"
                    value="1"
                    checked={status === 1}
                    onChange={() => setStatus(1)}
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  품절
                </label>
                <label style={{ paddingRight: "1vw" }}>
                  <input
                    type="radio"
                    name="status"
                    value="2"
                    checked={status === 2}
                    onChange={() => setStatus(2)}
                    style={{ marginRight: "0.5vw", width: "auto", padding: 0 }}
                  />
                  판매종료
                </label>
              </div>
            </div>
          </div>

          <div className="CHM_plustablegrid3">
            <div className="CHM_plusTableTitle">상품설명</div>
            <input
              placeholder="상품설명"
              name="coment"
              style={{ width: "90%" }}
              value={coment}
              onChange={(e) => {
                setComent(e.target.value);
              }}
            ></input>
          </div>

          <div className="CHM_plustable6grid">
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">칼로리</div>
              <input
                value={kcal}
                name="ingred_kcal"
                onChange={(e) => {
                  setKcal(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">무게(g)</div>
              <input
                value={gram}
                name="ingred_gram"
                onChange={(e) => {
                  setGram(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">단백질</div>
              <input
                value={protein}
                name="ingred_protein"
                onChange={(e) => {
                  setProtein(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">포화지방</div>
              <input
                value={fat}
                name="ingred_fat"
                onChange={(e) => {
                  setFat(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">당류</div>
              <input
                value={sugars}
                name="ingred_sugars"
                onChange={(e) => {
                  setSugars(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">나트륨</div>
              <input
                value={salt}
                name="ingred_salt"
                onChange={(e) => {
                  setSalt(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="CHM_plustablegrid3">
            <div className="CHM_plusTableTitle">이미지</div>
            <input placeholder="이미지"></input>
          </div>

          <div className="CHM_plusPageBtnBox">
            <button type="submit">상품등록</button>
            <button
              onClick={() => {
                props.setPage("list");
              }}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Plus;
