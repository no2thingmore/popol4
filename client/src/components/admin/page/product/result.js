function Result(props) {
  return (
    <div className="CHM_adminProductpageTableBox">
      <table>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>
              <input type="checkbox" />
            </th>
            <th style={{ width: "5%" }}>번호</th>
            <th style={{ width: "10%" }}>이미지</th>
            <th style={{ width: "10%" }}>상품아이디</th>
            <th style={{ width: "20%" }}>
              <div
                style={{
                  paddingBottom: "0.7vw",
                  borderBottom: "1px solid #c6c6c6",
                }}
              >
                상품명
              </div>
              <div style={{ paddingTop: "0.7vw" }}>카테고리</div>
            </th>
            <th style={{ width: "10%" }}>최초등록일</th>
            <th style={{ width: "10%" }}>최근수정일</th>
            <th style={{ width: "5%" }}>진열</th>
            <th style={{ width: "10%" }}>가격</th>
            <th style={{ width: "5%" }}>순위</th>
            <th style={{ width: "10%" }}>관리</th>
          </tr>
        </thead>
        <tbody>
          {props.searched.map((a, i) => {
            return (
              <tr key={a.id} style={{height: "6vw"}}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{i + 1}</td>
                <td>
                  <img src={a.img} width="70%"></img>
                </td>
                <td>{a.id}</td>
                <td
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    height: "6vw",
                    padding: "0"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid #c6c6c6",
                    }}
                  >
                    {a.Kname}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    타입: {a.type}
                  </div>
                </td>
                <td>2023-01-01</td>
                <td>2023-12-08</td>
                <td>{a.status}</td>
                <td>{a.price}원</td>
                <td><input style={{width: "40%", fontSize: "1vw"}} type='number'></input></td>
                <td>
                  <button
                    style={{
                      fontSize: "1vw",
                      marginRight: "0.5vw",
                      padding: "0.2vw 0.5vw",
                    }}
                  >
                    수정
                  </button>
                  <button style={{ fontSize: "1vw", padding: "0.2vw 0.5vw" }}>
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
