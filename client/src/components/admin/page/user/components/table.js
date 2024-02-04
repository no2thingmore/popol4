import { Link } from "react-router-dom";
import "./userTable.css"
import axios from "axios";
import { API_URL } from "../../../../config/contansts";

function editUser(id){
  console.log("edit",id);
}

function delUser(id){
  axios.delete(`${API_URL}/user/admin`,{data: { id: id }})
  .then(()=>{
    window.location.reload();
  })
}

function Table(params) {
  const data = params.data

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
  };
  
  return(
    <table className='GIK_inq_table_section'>
      <thead className='GIK_inq_table_thead_section'>
        <tr className='GIK_inq_title_section'>
          <th className='GIK_inq_title_id'>이름</th>
          <th className='GIK_inq_title_kinds'>이메일</th>
          <th className='GIK_inq_title_title'>비밀번호</th>
          <th className='GIK_inq_title_created'>전화번호</th>
          <th className='GIK_inq_title_ctrl'>가입 일</th>
          <th className='GIK_inq_title_status'>수정 일</th>
          <th className='GIK_inq_title_status'>변경</th>
          <th className='GIK_inq_title_status'>탈퇴</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className='GIK_inq_contents_section'>
            <td className='GIK_inq_contents_id'>{item.name}</td>
            <td className='GIK_inq_contents_kind'>{item.email}</td>
            <td className='GIK_inq_contents_title' >{item.password}</td>
            <td className='GIK_inq_contents_created'>{item.contact_number}</td>
            <td className='GIK_inq_contents_ctrl'>{formatDate(item.createdAt)}</td>
            <td className='GIK_inq_contents_ctrl'>{formatDate(item.updatedAt)}</td>
            <td className='GIK_inq_contents_ctrl'>
            <Link to={`/admin/user/edit`} state={{userID: item.id}}><span className='GIK_inq_contents_ans'>수정</span></Link>
            </td>
            <td className='GIK_inq_contents_ctrl'>
            <span className='GIK_inq_contents_del' onClick={()=>delUser(item.id)}>삭제</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;