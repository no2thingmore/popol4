import CL_Data from './sandwich_data/cl_data'
import FL_Data from './sandwich_data/fl_data'
import PM_Data from './sandwich_data/pm_data'
import BF_Data from './sandwich_data/bf_data'

const menuItems = [
    { id: 1, path: "/one", label: "클래식", data: CL_Data },
    { id: 2, path: "/two", label: "프레쉬&라이트", data: FL_Data  },
    { id: 3, path: "/three", label: "프리미엄", data: PM_Data  },
    { id: 4, path: "/four", label: "아침메뉴", data: BF_Data  },
];

export default menuItems;