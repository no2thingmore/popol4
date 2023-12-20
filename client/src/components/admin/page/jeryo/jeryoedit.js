import { useEffect, useState } from "react";
import { API_URL } from "../../../config/contansts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Upload } from "antd";

function Jeryoedit(props) {
  const navigate = useNavigate();
  const jeryoeditdata = props.data.filter((item) => item.id == props.id);
  const [categort1, setCategory1] = useState(jeryoeditdata[0].kinds);
  const [kname, setKname] = useState(jeryoeditdata[0].kname);
  const [ename, setEname] = useState(jeryoeditdata[0].ename);
  const [comment, setComent] = useState(jeryoeditdata[0].comment);
  const [price, setPrice] = useState(jeryoeditdata[0].add_price);
  const [kcal, setKcal] = useState(jeryoeditdata[0].ingred_kcal);
  const [imageUrl, setImageUrl] = useState(jeryoeditdata[0].image_url);
  console.log(jeryoeditdata);
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

  const updateDataItem = (e) => {
    e.preventDefault();
    axios
      .patch(`${API_URL}/ingredient/admin`, {
        id: props.id,
        kname: kname,
        ename: ename,
        comment: comment,
        price: price,
        ingred_kcal: kcal,
        kinds: categort1,
      })
      .then((response) => {
        console.log("데이터 업데이트 성공");
        navigate("/admin/jeryo/none");
        window.location.reload();
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
              <div className="CHM_plusTableTitle">칼로리</div>
              <input
                value={kcal}
                onChange={(e) => {
                  setKcal(e.target.value);
                }}
              ></input>
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
              <div className="CHM_plusTableTitle">이미지</div>
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
            <div className="CHM_plustablegrid2"></div>
          </div>

          <div className="CHM_plustablegrid3"></div>

          <div className="CHM_plusPageBtnBox">
            <button type="submit">상품수정</button>
            <button>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jeryoedit;
