import "./noticedetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../config/contansts';

function Noticedetail() {
  const { id } = useParams();
  const [data, setData] = useState("")

  useEffect(() => {
    axios
      .get(`${API_URL}/board/news`, {params: {id: id}})
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

  console.log(id);
  return (
    <div className="n_1_all">
      <div className="n_1_title">
        <h3>써브웨이와 함께하는 JTBC 수목드라마 '이 연애는 불가항력'</h3>
        <p>2023.08.29 14:55</p>
      </div>
      <div className="n_1_image">
        <img src={data.image_url}></img>
        <p>
          써브웨이와 함께하는 JTBC 수목드라마 '이 연애는 불가항력' 많은 시청
          부탁 드립니다.
        </p>
      </div>
      <div className="n_back_b">
        <button id="n_back_1">
          <a href="/newsPage/Notice">목록</a>
        </button>
      </div>
    </div>
  );
}

export default Noticedetail;
