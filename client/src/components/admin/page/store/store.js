import "./store.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../config/contansts";

function Store() {
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 데이터를 가져오기 위한 useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/store/admin`);
      setData(response.data);
      console.log(response.data);

    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  const deleteData = async (id) => {
    try {

      await axios.delete(`${API_URL}/store/admin`,{data: { id:id }});

      // 클라이언트 상태에서도 해당 데이터 삭제
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("데이터 삭제 실패:", error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/store/admin`, { status: newStatus });

      // 클라이언트 상태에서도 해당 데이터의 상태 업데이트
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (error) {
      console.error("상태 업데이트 실패:", error);
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return "운영중";
      case 1:
        return "운영종료";
      case 2:
        return "승인 대기중";
      default:
        return "승인 대기중";
    }
  };
  
  return (
    <div className="CHM_adminProductPageBg">
      <div className="jj_franchise">가맹신청 문의</div>
      <div className="jj_adminStoreTalbeBox">
        <table>
          <thead>
            <tr>
              <th style={{ width: "3%" }}>
                <input 
                  type="checkbox"
                />
              </th>
              <th style={{ width: "5%" }}>이름</th>
              <th style={{ width: "10%" }}>연락처</th>
              <th style={{ width: "10%" }}>이메일</th>
              <th style={{ width: "13%" }}>지역</th>
              <th style={{ width: "10%" }}>가게 지점명</th>
              <th style={{ width: "5%" }}>처리상태</th>
              <th style={{ width: "8%" }}>가게관리</th>
              <th style={{ width: "5%" }}>데이터 삭제</th>
            </tr>
          </thead>
          <tbody>
            {/* 서버에서 받아온 데이터를 테이블에 매핑하여 표시 */}
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input 
                    type="checkbox" 
                  />
                </td>
                <td>{item.oner}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.name}</td>
                <td>{getStatusText(item.status)}</td>
                <td>
                <button id="jj_td_btn" onClick={() => 
                  updateStatus(item.id, 0)}>승인</button>
                <button id="jj_td_btn" onClick={() => 
                  updateStatus(item.id, 1)}>종료</button></td>
                <td>
                  <button onClick={() => 
                    deleteData(item.id)}
                  >
                  삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Store;