import React from "react";
import { Link } from 'react-router-dom';
import './center.css';
import menuItems from './data/tabdata';
import CL_Data from './data/sandwich_data/cl_data';

const Center = () => {

    const rendertext = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <>
            <div className="center_hd_section">
                <div className="center_hd_menu">
                    <h2 className="center_hd2">Subway's Menu</h2>
                    <div className="center_hd_tab">
                        <ul>
                            {/* 탭 메뉴 */}
                            {menuItems.map(item => (
                                    <li key={item.path}>
                                        <Link to={item.path}>
                                            {item.label}
                                        </Link>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="center_main_section">
                    <div className="subway_menu_section">
                        {CL_Data.map((item, index) => (
                            <div key={index} className="menus_sction">
                                <Link to={item.path}>
                                    <img src={item.image} alt={item.alt} />
                                    <div className="menus_name">
                                        {item.title}
                                    </div>
                                    <div className="menus_info">
                                        <p>{rendertext(item.text)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Center;
