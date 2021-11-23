import React from 'react'
import './searchtop.scss'
import { useState, useEffect } from 'react'
const SearchTop = () => {
    return (
        <div className="bg-body"> 
            <div className="bg-searchtop">
                <div className="container">
                    <section className="searchtop">
                        <div className="searchtop-title">
                            <div className="searchtop-header-logo">TÌM KIẾM HÀNG ĐẦU</div>
                            <a href="" className="searchtop-header-reload">Xem Tất Cả <i class="fas fa-chevron-right"></i></a>
                        </div>
                        <div className="searchtop-body">
                            <div className="searchtop-list">
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Ốp Lưng Iphone</span>
                                    <div className="searchtop-top"></div>
                                </div>
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/e2554cef6590565127bca9f0322945be_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Quần Lót Nữ Cotton</span>
                                    <div className="searchtop-top"></div>
                                </div>
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/8824e9807942671de4dde9c65c716579_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Bông Tẩy Trang 3 Lớp Cotton Pads</span>
                                    <div className="searchtop-top"></div>
                                </div>
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/46f4a1c42ce6c897c179817f956bea8f_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Quần Ống Rộng Nữ</span>
                                    <div className="searchtop-top"></div>
                                </div>
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/569f5566d9c55f4b3fa34d70e0d5acc3_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Nước Tẩy Trang L'Oreal Paris 3 In 1</span>
                                    <div className="searchtop-top"></div>
                                </div>
                                <div className="searchtop-item">
                                    <img src="https://cf.shopee.vn/file/18d5c5e9d7c3563a35c954c2c854988c_tn" alt="" />
                                    <div className="searchtop-item-text">
                                        <span>Bán 165k/tháng</span>
                                    </div>
                                    <span className="searchtop-item-name">Bút Kẻ Mắt Chống Nước</span>
                                    <div className="searchtop-top"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SearchTop
