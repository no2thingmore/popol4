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
              <th style={{ width: "10%" }}>이름</th>
              <th style={{ width: "10%" }}>연락처</th>
              <th style={{ width: "10%" }}>이메일</th>
              <th style={{ width: "15%" }}>지역</th>
              <th style={{ width: "10%" }}>가게 지점명</th>
              <th style={{ width: "5%" }}>처리상태</th>
              <th style={{ width: "5%" }}>제거</th>
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
                <td>{item.status}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Store;
