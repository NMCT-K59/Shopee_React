import React from 'react';
import './header_top.scss';
import qr from '../../../assets/img/qr_code.png'
import ggplay from '../../../assets/img/ggplay.png'
import appstore from '../../../assets/img/appstore.png'
import gallery from '../../../assets/img/gallery.png'
import notify from '../../../assets/img/notify.png';
import { useEffect } from 'react'

function HeaderTop() {
    useEffect(() => {
        const scrollHeaderrespon = document.querySelector('.header-respon')
        const scroll = window.addEventListener('scroll', event => {
            if(window.scrollY > 40){
                scrollHeaderrespon.style.backgroundColor = '#FF6533'
                scrollHeaderrespon.style.paddingBottom = '48px'
            }
            else{
                scrollHeaderrespon.style.backgroundColor = 'transparent'
                scrollHeaderrespon.style.paddingBottom = '0'
            }
        })
        return () => window.removeEventListener('scroll',scroll)
    }, [])
    return (
        <div>
            <div className="header-top">
                <ul className="header-top-list">
                    <li className="header-top-item header-top-item--separate">
                        <a href="#" class="header-top-item-link">Kênh Người Bán</a>
                    </li>
                    <li className="header-top-item header-top-item--separate">
                        <a href="/usersale" class="header-top-item-link">Trở thành Người bán Shopee</a>
                    </li>
                    <li className="header-top-item header-top-item--has-qr header-top-item--separate">
                        <a href="/download" class="header-top-item-link">Tải ứng dụng</a>
                        <div class="header__qr">
                            <img src={qr} alt="QR code" class="header__qr-img"/>
                            <div class="header__qr-apps">
                                <a href="" class="header__qr-link">
                                    <img src={ggplay} alt="" class="header__qr-download-img"/>
                                </a>
                                <a href="" class="header__qr-link">
                                    <img src={appstore} alt="" class="header__qr-download-img"/>
                                </a>
                                <a href="" class="header__qr-link">
                                    <img src={gallery} alt="" class="header__qr-download-img"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="header-top-item">
                        <span class="">Kết nối</span>
                        <a href="" class="header-top-item-link">
                            <i class="header-top-icon fab fa-facebook"></i>
                        </a>
                        <a href="" class="header-top-item-link">
                            <i class="header-top-icon fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <ul className="header-top-list">
                    <li class="header-top-item header-top-item--has-notify">
                        <a href="" class="header-top-item-link">
                            <i class="header-top-icon far fa-bell"></i>
                                Thông báo
                        </a>
                        <div class="header-top-notify">
                            <img src={notify} alt="QR code" class="header-top-notify-img"/>
                            <div class="header-top-notify-actions">
                                <button className="header-top-notify-actions-btn">Đăng ký</button>
                                <button className="header-top-notify-actions-btn">Đăng nhập</button>
                            </div>
                        </div>
                    </li>
                    <li class="header-top-item">
                        <a href="" class="header-top-item-link">
                            <i class="header-top-icon far fa-question-circle"></i>
                            Hỗ trợ
                        </a>
                    </li>
                    <li class="header-top-item header-top-item--separate">
                        <a href="/auth/register" class="header-top-item-link">
                            Đăng Ký
                        </a>
                    </li>   
                    <li class="header-top-item">
                        <a href="/auth/login" class="header-top-item-link">
                            Đăng Nhập
                        </a>
                    </li>   
                </ul>
            </div>
            <div className="header-respon">
                <div className="header-respon-wrapper">
                    <i class="header-respon-search-btn-icon fas fa-search"></i>
                    <input className="header-respon-input" type="text" placeholder="Siêu sale công nghệ" />
                </div>
                <div className="header-respon-icons-wrapper">
                    <i class="header-respon-icon fas fa-shopping-cart"></i>  
                    <i class="header-respon-icon far fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
