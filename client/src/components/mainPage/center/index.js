import React from "react";

const Center = () => {

    function sandwich_cl(e) {
        e.preventDefault();
        console.log('클래식 클릭');
    }

    function sandwich_fl(e) {
        e.preventDefault();
        console.log('프레쉬&라이트 클릭');
    }

    return (
        <>
            <div className="center_hd">
                <h2>Subway's Menu</h2>
                    <div className="center_tab">
                        <ul>
                            <li>
                                <form onClick={sandwich_cl}>
                                    <button type="submit">클래식</button>
                                </form>
                            </li>
                            <li>
                                <form onClick={sandwich_fl}>
                                    <button type="submit">프레쉬&라이트</button>
                                </form>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className="center_menu">

            </div>
        </>
    )
}

export default Center;