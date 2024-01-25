import "./event_detall.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../config/contansts';

function Event_detall() {
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
    <div className="n_ed_all">
      <div className="n_ed_title">
        <h3>{data.title}</h3>
        <p>{data.updated_at}</p>
      </div>
      <div className="n_ed_image">
        <img src={API_URL+"/upload/"+data.image_url}></img>
        <p>
          {data.content}
        </p>
      </div>
      <div className="n_ed_back_b">
        <button id="n_ed_back_1">
          <a href="/newsPage/event">목록보기</a>
        </button>
      </div>
    </div>
  );
}

export default Event_detall;
