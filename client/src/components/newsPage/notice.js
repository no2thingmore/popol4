import axios from 'axios';
import "./notice.css";
import {n_data}from"./notice_all/notice_data.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from '../config/contansts.js';

function Notice(){

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/board`)
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일`;
};

  return(
    <div className="j_notice_all">
      <div className="j_Title">
        <h2> 뉴스ㆍ공지사항 </h2>
      </div>
      <div className="j_all">
        
        <div className="j_the_number">
          <p className="">
            총
            <strong> {data.length} </strong>
            건의 게시글이 있습니다.
          </p>
        </div>

        <div className="j_list_all">

        { 
          data.map((aa,i) => (
            <div className="j_list">
              <div className="j_number">
                <h3>{i + 1}</h3>
              </div>
              <div className="j_content">
                <Link to={`/news/${aa.id}`}>
                  <a>{aa.title}</a>
                </Link>
              </div>
              <div className="j_date">
                <p>{formatDate(aa.createdAt)}</p>
              </div>
            </div>
          ))
        }

            
            
            {/* <div className="j_list">
              <div className="j_number">
                <h3>1</h3>
              </div>
              <div className="j_content">
                <a href="#">고객 경험 설문조사 프로그램(Subway Listen®) 안내</a>
              </div>
              <div className="j_date">
                <p>21.09.09</p>
              </div> 
            </div>

          <div className="j_list">
            <div className="j_number">
              <h3>2</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이 앱 출시 및 앱 사용 불가 매장 안내</a>
            </div>
            <div className="j_date">
              <p>20.06.24</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>3</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이 모바일 상품권 이용 안내의 건</a>
            </div>
            <div className="j_date">
              <p>19.08.20</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>4</h3>
            </div>
            <div className="j_content">
              <a href="#">샌드위치 가격 조정 안내</a>
            </div>
            <div className="j_date">
              <p>23.01.30</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>5</h3>
            </div>
            <div className="j_content">
              <a href="#">시스템 안정화를 위한 서버 점검 안내</a>
            </div>
            <div className="j_date">
              <p>23.01.30</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>6</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이와 함께하는 채널A '하트시그널4'</a>
            </div>
            <div className="j_date">
              <p>23.05.19</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>7</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이와 함께하는 tvN '뿅뿅 지구 오락실2'</a>
            </div>
            <div className="j_date">
              <p>23.06.19</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>8</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이와 함께하는 tvN '이번 생도 잘 부탁해'</a>
            </div>
            <div className="j_date">
              <p>23.06.19</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>9</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이와 함께하는 SBS 금토드라마 '소방서 옆 경찰서 그리고 국과수'</a>
            </div>
            <div className="j_date">
              <p>23.08.04</p>
            </div>
          </div>

          <div className="j_list">
            <div className="j_number">
              <h3>10</h3>
            </div>
            <div className="j_content">
              <a href="#">써브웨이와 함께하는 JTBC 수목드라마 '이 연애는 불가항력'</a>
            </div>
            <div className="j_date">
              <p>23.08.29</p>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Notice;