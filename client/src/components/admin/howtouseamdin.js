import "./howtouseamdin.css"

function Howtouseamdin(){
  return(
    <div id="jsw_container">
      <div className="jsw_div1">
        <div className="jsw_class1">
          <span>회원관리 사용방법</span>
          <p>
            회원가입한 회원의 정보가 표출되며 <br/>
            우측의 변경란의 수정버튼과 탈퇴란의 삭제버튼을 통해 회원정보 삭제 및 수정가능 <br/>
            사업자 회원의 경우에도 일반 회원과 동일하게 표출되어 관리가능
          </p>
        </div>
        <div className="jsw_class1">
          <span>재료 및 상품관리 사용방법</span>
          <p>
            우측하단의 상품추가 버튼을 통해 상품 추가가능 <br/>
            우측의 관리란의 수정 및 삭제 버튼을 통해 <br/>
            수정 및 삭제 가능
          </p>
          <p>
            상단의 기본검색란에서 검색어와 상품가격등을 기입하여 검색가능 하며 <br/>
            검색어와 카테고리, 판매여부등을 선택하여 검색할수 있다.<br/>
          </p>
        </div>
        <div className="jsw_class1">
          <span>가맹신청 문의 사용방법</span>
          <p>
            받아둔 가망신청 문의를 나열하고 가게관리를 통해 승인 또는 거절을 할수 있음.<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Howtouseamdin;
