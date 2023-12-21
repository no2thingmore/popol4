import axios from "axios";
import { useState } from "react";
import { Upload } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/contansts";

function Jeryoplus(props) {
  const navigate = useNavigate();
  const [categort1, setCategory1] = useState("");
  const [kname, setKname] = useState("");
  const [ename, setEname] = useState("");
  const [comment, setComent] = useState("");
  const [price, setPrice] = useState("");
  const [kcal, setKcal] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCategorySelect1Change = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCategory1(value);
      setCategory1(value);
    } else {
      setCategory1(value);
    }
  };

  const onChangeImage = (info) => {
    // 파일이 업로드 중일 때
    console.log("new", info.file);
    if (info.file.status === "uploading") {
      console.log("업로드중");
      return;
    }
    // 파일이 업로드 완료 되었을 때
    if (info.file.status === "done") {
      console.log("성공");
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      // 받은 이미지경로를 imageUrl에 넣어줌
      setImageUrl(imageUrl);
    }
  };

  const productjeryoplus = async (e) => {
    e.preventDefault();

    if (
      kname === "" ||
      ename === "" ||
      categort1 === "" ||
      imageUrl === "" ||
      price === ""
    ) {
      alert("빈칸없이 전부 채워주세요");
    } else {
      await axios
        .post(`${API_URL}/ingredient/admin`, {
          kname: kname,
          ename: ename,
          kinds: categort1,
          comment: comment,
          image_url: imageUrl,
          price: price,
          ingred_kcal: kcal,
          admin_id: 1,
        })
        .then(() => {
          console.log("성공");
          navigate("/admin/jeryo/none");
          window.location.reload();
        })
        .catch((e) => {
          console.log("에러남");
          console.error(e);
        });
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
      <div className="CHM_jeryoplusformBox">
        <form onSubmit={productjeryoplus}>
          <div className="CHM_jeryoplustable1grid">
            <div className="CHM_jeryoplustablegrid">
              <div className="CHM_jeryoplusTableTitle">상품명(한국어)</div>
              <input
                placeholder="한국이름"
                name="kname"
                value={kname}
                onChange={(e) => {
                  setKname(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_jeryoplustablegrid">
              <div className="CHM_jeryoplusTableTitle">상품명(영어)</div>
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

          <div className="CHM_jeryoplustable1grid">
            <div className="CHM_jeryoplustablegrid">
              <div className="CHM_jeryoplusTableTitle">종류</div>
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
                <option value="0">빵</option>
                <option value="1">야채</option>
                <option value="2">치즈</option>
                <option value="3">소스</option>
                <option value="4">고기</option>
              </select>
            </div>
            <div className="CHM_jeryoplustablegrid">
              <div className="CHM_jeryoplusTableTitle">칼로리</div>
              <input
                value={kcal}
                type="number"
                name="ingred_kcal"
                onChange={(e) => {
                  setKcal(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="CHM_jeryoplustable1grid">
            <div className="CHM_jeryoplustablegrid">
              <div className="CHM_jeryoplusTableTitle">가격</div>
              <input
                placeholder="가격"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
            <div className="CHM_jeryoplustablegrid">
            <div className="CHM_jeryoplusTableTitle">이미지</div>
            <Upload
              name="image"
              action={`${API_URL}/image`}
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              {imageUrl ? (
                <p>{imageUrl}</p>
              ) : (
                <div id="upload-img-placeholder">
                  <i class="fa-regular fa-file-image"></i>
                  <br />
                  <span>제품사진을 등록 해주세요.</span>
                </div>
              )}
            </Upload>
            </div>
          </div>

          <div className="CHM_jeryoplustablegrid3">
            <div className="CHM_jeryoplusTableTitle">상품설명</div>
            <input
              placeholder="상품설명"
              name="comment"
              style={{ width: "90%" }}
              value={comment}
              onChange={(e) => {
                setComent(e.target.value);
              }}
            ></input>
          </div>

          <div className="CHM_jeryoplusPageBtnBox">
            <button type="submit">상품등록</button>
            <Link className='CHM_plusPageBackBtn' to="/admin/product/none">취소</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jeryoplus;
