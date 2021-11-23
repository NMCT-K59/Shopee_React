import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide_first.scss'
const Slide_First = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        
        <div className="bg-body">
            <section className="slide_first bg-image-first">
                <div className="container">
                    <div className="slide_first-container">
                        <div className="slide_first-left">
                            <Slider  {...settings}>
                                <img src="https://cf.shopee.sg/file/ef1f3dfe1379a24a2c73cf905cc34489_xxhdpi" className="slide_first-left-image" alt="" />
                                <img src="https://cf.shopee.sg/file/038aba390b80b663841e6562e601e647_xhdpi" className="slide_first-left-image" alt="" />
                                <img src="https://cf.shopee.sg/file/efd54d1b0b0edf31275f2f29d8451429_xxhdpi" className="slide_first-left-image" alt="" />
                                <img src="https://cf.shopee.sg/file/9cb51f63dcd8be91305a7022535cb2b1_xxhdpi" className="slide_first-left-image" alt="" />
                                <img src="https://cf.shopee.sg/file/c5bf8b4a8c1d3d4487a369994c1ff0a4_xxhdpi" className="slide_first-left-image" alt="" />
                            </Slider>
                        </div>
                        <div className="slide_first-right">
                            <div className="slide_first-right-image">
                                <img src="https://cf.shopee.sg/file/038aba390b80b663841e6562e601e647_xhdpi" className="slide_first-right-image-item"/>
                                <img src="https://cf.shopee.sg/file/282a258e73eddac3d7a9388223510045_xhdpi" className="slide_first-right-image-item"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
            <section className="slide_under">
                    <div className="slide_under-list">
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Tech Zone - Siêu Thị <br/> Điện Tử</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Gì Cũng Rẻ - Từ 1K</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Hoàn Xu 20% - Đơn Từ <br/> 0Đ</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Nạp Thẻ, Hóa Đơn & E- <br/> voucher</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/698f220a98642d9eebf8177db6a08700_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Freeship Xtra</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Hàng Hiệu -50%</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Hàng Quốc Tế</span>
                        </div>
                        <div className="slide_under-item">
                            <img src="https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi" className="slide_under-item-image" alt="" />
                            <span>Shopee Premium</span>
                        </div>
                    </div>
 
            </section>
            </div>
        </div>
    )
}

export default Slide_First
