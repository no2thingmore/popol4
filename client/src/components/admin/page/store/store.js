import "./store.css"
// import { useState } from "react";


function Store(){
  return (
    <div className="CHM_adminProductPageBg">
      <div className="jj_franchise">
        가맹신청 문의
      </div>
      <div className="jj_adminStoreTalbeBox">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                />
              </th>
              <th>이름</th>
              <th>연락처</th>
              <th>이메일</th>
              <th>지역</th>
              <th>제목</th>
              <th>내용</th>
              <th>첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Store;