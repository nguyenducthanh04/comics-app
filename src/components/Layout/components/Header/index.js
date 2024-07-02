// import React, { useState, useEffect } from "react";
// import classNames from "classnames/bind";
// import axios from "axios";
// import styles from "./Header.module.scss";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const cx = classNames.bind(styles);
// function Header() {
//     return (
//         <div className={cx("wrapper")}>
//             <div className={cx("navbar")}>
//                 <div className={cx("nav-left")}>

/* <ul>
    <h2>THANHCOMICS</h2>
    <Link to={"/"} className={cx("link")}>
        <li>Trang Chủ</li>
    </Link>
    <Link to={"/genres"} className={cx("link")}>
        <li>Thể Loại</li>
    </Link>
    <Link to={"/new"} className={cx("link")}>
        <li>Mới</li>
    </Link>
    <Link to={"/top"} className={cx("link")}>
        <li>Top</li>
    </Link>
</ul> */

//                 </div>
//                 <div className={cx("nav-right")}>
//                     <div className={cx("search-container")}>
//                         <input
//                             placeholder="Tìm kiếm truyện/tác giả"
//                             className={cx("search-input")}
//                         />
//                         <FaSearch className={cx("icon-search")} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaClock } from "react-icons/fa";

const cx = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("navbar")}>
                <div className={cx("nav-left")}>
                    <h2>THANHCOMICS</h2>
                    <ul>
                        <Link to={"/"} className={cx("link")}>
                            <li>Trang Chủ</li>
                        </Link>
                        <Link to={"/genres"} className={cx("link")}>
                            <li>Thể Loại</li>
                        </Link>
                        <Link to={"/new"} className={cx("link")}>
                            <li>Mới</li>
                        </Link>
                        <Link to={"/top"} className={cx("link")}>
                            <li>Top</li>
                        </Link>
                    </ul>
                </div>
                <div className={cx("nav-right")}>
                    <div className={cx("search-container")}>
                        <Link to={"/history"} className={cx("history")}>
                            <FaClock className={cx("icon-history")}></FaClock>
                        </Link>
                        <input
                            placeholder="Tìm kiếm truyện/tác giả"
                            className={cx("search-input")}
                        />
                        <FaSearch className={cx("icon-search")} />
                    </div>
                    <div className={cx("menu-icon")} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className={cx("mobile-menu")}>
                    <div className={cx("search-container-mobile")}>
                        <input
                            placeholder="Tìm kiếm truyện/tác giả"
                            className={cx("search-input-mobile")}
                        />
                        <FaSearch className={cx("icon-search-mobile")} />
                    </div>
                    <ul>
                        <Link
                            to={"/"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Trang Chủ</li>
                        </Link>
                        <Link
                            to={"/genres"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Thể Loại</li>
                        </Link>
                        <Link
                            to={"/new"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Mới</li>
                        </Link>
                        <Link
                            to={"/top"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Top</li>
                        </Link>
                        <Link
                            to={"/history"}
                            className={cx("link-mobile")}
                            onClick={toggleMenu}
                        >
                            <li>Lịch sử</li>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
