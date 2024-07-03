// import React, { useState } from "react";
// import classNames from "classnames/bind";
// import styles from "./Home.module.scss";
// import { Link } from "react-router-dom";
// import { FaFire, FaEye, FaHeart } from "react-icons/fa";
// const cx = classNames.bind(styles);

// function Home() {
//     return (
//         <div className={cx("content")}>
//             <div className={cx("popular-comics")}>
//                 <div className={cx("title")}>
//                     <FaFire className={cx("icon-fire")}></FaFire>
//                     <h2>Truyện nổi tiếng</h2>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx("comics")}>
//                     <Link to={""} className={cx("link-comics")}>
//                         <img
//                             src="https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg"
//                             alt=""
//                             className={cx("img-comics")}
//                         ></img>
//                     </Link>
//                     <div className={cx("info-comics")}>
//                         <h4 className={cx("title-comics")}>
//                             Võ Luyện Đình Phong
//                         </h4>
//                         <div className={cx("borders")}></div>
//                         <div className={cx("info")}>
//                             <div className={cx("view")}>
//                                 <FaEye className={cx("icon-eye")}></FaEye>
//                                 <p>18.5M</p>
//                             </div>
//                             <div className={cx("favourite")}>
//                                 <FaHeart className={cx("icon-heart")}></FaHeart>
//                                 <p>3.7k</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaFire, FaEye, FaHeart } from "react-icons/fa";

const cx = classNames.bind(styles);

const data = [
    {
        title: "Võ Luyện Đình Phong",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong1",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong2",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong3",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong4",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong5",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong6",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong7",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong8",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong9",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong10",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong11",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong12",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },
    {
        title: "Võ Luyện Đình Phong13",
        views: "18.5M",
        favorites: "3.7k",
        img: "https://salt.tikicdn.com/ts/product/37/bf/17/5db9914c60985c3d878f6ce637ec0dc6.jpg",
    },

    // Thêm các mục dữ liệu khác tại đây
];

const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 6;

    const handleNext = () => {
        if (startIndex + itemsToShow < data.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    // const Home = () => {
    //     const [startIndex, setStartIndex] = useState(0);
    //     const [itemsToShow, setItemsToShow] = useState(7);

    //     const handleNext = () => {
    //         if (startIndex + itemsToShow < data.length) {
    //             setStartIndex(startIndex + 1);
    //         }
    //     };

    //     const handlePrevious = () => {
    //         if (startIndex > 0) {
    //             setStartIndex(startIndex - 1);
    //         }
    //     };

    //     useEffect(() => {
    //         const handleResize = debounce(() => {
    //             requestAnimationFrame(() => {
    //                 if (window.innerWidth <= 600) {
    //                     setItemsToShow(2);
    //                 } else {
    //                     setItemsToShow(7);
    //                 }
    //             });
    //         }, 200);

    //         // Sử dụng ResizeObserver để lắng nghe thay đổi kích thước
    //         const observer = new ResizeObserver(() => {
    //             handleResize();
    //         });

    //         // Quan sát body để phát hiện thay đổi kích thước
    //         observer.observe(document.body);

    //         // Gọi handleResize ngay lập tức để thiết lập đúng số phần tử khi tải trang
    //         handleResize();

    //         // Cleanup event listener khi component bị unmount
    //         return () => {
    //             observer.disconnect();
    //         };
    //     }, []);

    return (
        <div className={cx("content")}>
            <div className={cx("popular-comics")}>
                <div className={cx("title")}>
                    <FaFire className={cx("icon-fire")}></FaFire>
                    <h2>Truyện nổi tiếng</h2>
                </div>
                <div className={cx("comics-container")}>
                    {data
                        .slice(startIndex, startIndex + itemsToShow)
                        .map((item, index) => (
                            <div key={index} className={cx("comics")}>
                                <Link to={""} className={cx("link-comics")}>
                                    <img
                                        src={item.img}
                                        alt=""
                                        className={cx("img-comics")}
                                    ></img>
                                </Link>
                                <div className={cx("info-comics")}>
                                    <h4 className={cx("title-comics")}>
                                        {item.title}
                                    </h4>
                                    <div className={cx("borders")}></div>
                                    <div className={cx("info")}>
                                        <div className={cx("view")}>
                                            <FaEye
                                                className={cx("icon-eye")}
                                            ></FaEye>
                                            <p>{item.views}</p>
                                        </div>
                                        <div className={cx("favourite")}>
                                            <FaHeart
                                                className={cx("icon-heart")}
                                            ></FaHeart>
                                            <p>{item.favorites}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={cx("navigation-buttons")}>
                    <button
                        onClick={handlePrevious}
                        disabled={startIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex + itemsToShow >= data.length}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
