import "./store.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Store() {
  
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 데이터를 가져오기 위한 useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get("");
      setData(response.data);
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
              <th style={{ width: "6%" }}>이름</th>
              <th style={{ width: "10%" }}>연락처</th>
              <th style={{ width: "10%" }}>이메일</th>
              <th style={{ width: "20%" }}>지역</th>
              <th style={{ width: "10%" }}>제목</th>
              <th style={{ width: "35%" }}>내용</th>
              <th style={{ width: "6%" }}>첨부파일</th>
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
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.attachment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Store;
