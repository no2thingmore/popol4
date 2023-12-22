import { Link } from "react-router-dom";

function Table(params) {
  console.log("table",params.data);
  const data = params.data
  return(
    <table className='KJH_inq_table_section'>
      <thead className='KJH_inq_table_thead_section'>
        <tr className='KJH_inq_title_section'>
          <th className='KJH_inq_title_id'>이름</th>
          <th className='KJH_inq_title_kinds'>이메일</th>
          <th className='KJH_inq_title_title'>비밀번호</th>
          <th className='KJH_inq_title_created'>전화번호</th>
          <th className='KJH_inq_title_ctrl'>가입 일</th>
          <th className='KJH_inq_title_status'>수정 일</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className='KJH_inq_contents_section'>
              <td className='KJH_inq_contents_id'>{item.name}</td>
              <td className='KJH_inq_contents_kind'>{item.email}</td>
              <td className='KJH_inq_contents_title' >{item.password}</td>
              <td className='KJH_inq_contents_created'>{item.contact_number}</td>
              <td className='KJH_inq_contents_ctrl'>{item.createdAt}</td>
              <td className='KJH_inq_contents_ctrl'>{item.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;