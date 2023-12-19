import './inquiry.css';
import Customer from './data';

function Inquiry() {

    return (
        <>
            <div className='KJH_inq_section'>
                <div className='KJH_inq_route'>
                    HOME &gt; 문의사항 관리 &gt; 문의 내역
                </div>
                <div className='KJH_inq_info'>
                    <div className='KJH_inq_top_section'>
                        <span className='KJH_inq_top_list'>전체목록</span>
                        <span className='KJH_inq_top_pos_num_info'>문의사항</span>
                        <span className='KJH_inq_top_pos_num'>{Customer.length} 건</span>
                    </div>
                    <table className='KJH_inq_table_section'>
                        <colgroup>
                            <col style={{width: "140px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "500px"}} />
                            <col style={{width: "300px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "120px"}} />
                        </colgroup>
                        <thead className='KJH_inq_table_thead_section'>
                            <tr className='KJH_inq_title_section'>
                                <th className='KJH_inq_title_id'>유저 ID</th>
                                <th className='KJH_inq_title_kinds'>종류</th>
                                <th className='KJH_inq_title_title'>제목</th>
                                <th className='KJH_inq_title_created'>등록일</th>
                                <th className='KJH_inq_title_ctrl'>관리</th>
                                <th className='KJH_inq_title_status'>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Customer.map((item) => (
                                <tr key={item.id} className='KJH_inq_contents_section'>
                                    <td className='KJH_inq_contents_id'>{item.id}</td>
                                    <td className='KJH_inq_contents_kind'>{item.kind}</td>
                                    <td className='KJH_inq_contents_title'>{item.title}</td>
                                    <td className='KJH_inq_contents_created'>{item.created_at}</td>
                                    <td className='KJH_inq_contents_ctrl'>
                                        <span>{item.ctrl_r}</span>
                                        <span>{item.ctrl_d}</span>
                                    </td>
                                    <td className='KJH_inq_contents_status'>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Inquiry;
