import { useEffect, useState } from "react";
import { API_URL } from "../../../config/contansts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Jeryoedit(props) {
  const navigate = useNavigate();
  const jeryoeditdata = props.data.filter((item) => item.id == props.id);
  const [categort1, setCategory1] = useState(jeryoeditdata[0].kinds);
  const [selectedTag, setSelectedTag] = useState(jeryoeditdata[0].tags);
  const [kname, setKname] = useState(jeryoeditdata[0].kname);
  const [ename, setEname] = useState(jeryoeditdata[0].ename);
  const [comment, setComent] = useState(jeryoeditdata[0].comment);
  const [price, setPrice] = useState(jeryoeditdata[0].price);
  const [status, setStatus] = useState(jeryoeditdata[0].status);
  const [kcal, setKcal] = useState(jeryoeditdata[0].ingred_kcal);
  const [protein, setProtein] = useState(jeryoeditdata[0].ingred_protein);
  const [fat, setFat] = useState(jeryoeditdata[0].ingred_fat);
  const [sugars, setSugars] = useState(jeryoeditdata[0].ingred_sugars);
  const [salt, setSalt] = useState(jeryoeditdata[0].ingred_salt);
  const [gram, setGram] = useState(jeryoeditdata[0].ingred_gram);

  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCategory1(value);
      setCategory1(value);
    } else {
      setCategory1(value);
    }
  };

  const updateDataItem = (e) => {
    e.preventDefault();
    axios
      .patch(`${API_URL}/ingredient/admin`, {
        id: props.id,
        kname: kname,
        ename: ename,
        comment: comment,
        price: price,
        status: status,
        ingred_kcal: kcal,
        ingred_protein: protein,
        ingred_fat: fat,
        ingred_sugars: sugars,
        ingred_salt: salt,
        kinds: categort1,
        tags: selectedTag,
        ingred_gram: gram,
      })
      .then((response) => {
        console.log("데이터 업데이트 성공");
        navigate("/admin/jeryo");
      })
      .catch((error) => {
        console.error("데이터 업데이트 실패:", error);
      });
  };

  return (
    <div>
      <div
        className="CHM_adminProductPageSubTitle"
        style={{ fontSize: "1.8vw" }}
      >
        상품 정보 수정
      </div>
      <div className="CHM_plusformBox">
        <form onSubmit={updateDataItem}>
          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">상품명(한국어)</div>
              <input
                placeholder="한국이름"
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
                <option value="0">빵</option>
                <option value="1">야채</option>
                <option value="2">치즈</option>
                <option value="3">소스</option>
              </select>
            </div>
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">태그</div>
              {categort1 == "0" && (
                <select
                  id="categorySelect2"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="0">화이트</option>
                  <option value="1">곡물</option>
                  <option value="2">프리미엄</option>
                </select>
              )}

              {categort1 == "1" && (
                <select
                  id="categorySelect2"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="3">야채</option>
                  <option value="4">피클</option>
                </select>
              )}

              {categort1 == "2" && (
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  id="categorySelect2"
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="5">아메리칸</option>
                  <option value="6">슈레드</option>
                  <option value="7">모차렐라</option>
                </select>
              )}

              {categort1 == "3" && (
                <select
                  id="categorySelect2"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{
                    marginLeft: "1vw",
                    padding: "0.3vw",
                    fontSize: "1.3vw",
                    width: "70%",
                  }}
                >
                  <option value="">=카테고리선택=</option>
                  <option value="8">소스</option>
                  <option value="9">오일/식초</option>
                  <option value="10">소금/후추</option>
                </select>
              )}

            </div>
          </div>

          <div className="CHM_plustable1grid">
            <div className="CHM_plustablegrid">
              <div className="CHM_plusTableTitle">가격</div>
              <input
                placeholder="가격"
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
                    name="salesStatus"
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
                    name="salesStatus"
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
                    name="salesStatus"
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
              style={{ width: "90%" }}
              value={comment}
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
                onChange={(e) => {
                  setKcal(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">무게(g)</div>
              <input
                value={gram}
                onChange={(e) => {
                  setGram(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">단백질</div>
              <input
                value={protein}
                onChange={(e) => {
                  setProtein(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">포화지방</div>
              <input
                value={fat}
                onChange={(e) => {
                  setFat(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">당류</div>
              <input
                value={sugars}
                onChange={(e) => {
                  setSugars(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_plustablegrid2">
              <div className="CHM_plusTableTitle">나트륨</div>
              <input
                value={salt}
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
            <button type="submit">상품수정</button>
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

export default Jeryoedit;
