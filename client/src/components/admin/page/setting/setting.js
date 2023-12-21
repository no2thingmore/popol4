import React from "react";
import './setting.css';

function Setting(){
  return(
    <div id="set_Main_container">
      <div className="set_location_link"></div>
      <div className="set_content">
        <h1>기본 환경 설정</h1>
        <form className="set_form">
          <div className="set_info">
              <table className="set_table">
                <colgroup className="set_colgroup"></colgroup>
                <tr className="set_tr">
                  <td ></td>
                </tr>
              </table>
          </div>
          <div className="set_time"></div>
          <div className="set_domain"></div>
          <div className="set_state"></div>
        </form>
        <div className="set_"></div>
      </div>
    </div>
  )
}
export default Setting;