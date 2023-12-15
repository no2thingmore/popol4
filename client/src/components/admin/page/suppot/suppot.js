import { useParams } from 'react-router-dom';
import SubTemplate from './sub_template';
import Inquiry from './submenu/inquiry';
function Suppot(){
  const {category} = useParams()
  return (
    <div>
      <SubTemplate></SubTemplate>
      {category === "inquiry" ? <Inquiry></Inquiry> : ""}
      {category === "inquiry" ? <Inquiry></Inquiry> : ""}
      {category === "inquiry" ? <Inquiry></Inquiry> : ""}
    </div>
  )
}

export default Suppot;