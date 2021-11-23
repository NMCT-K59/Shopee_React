import React from 'react'
import './shopeemall.scss'
import Slider2 from "react-slick";
const ShopeeMall = () => {
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                dots: false
              }
            },
          ]
      };
    return (
        <div className="bg-body">
            <div className="bg-shopeemall">
                <div className="container">
                    <section className="shopeemall">
                        <div className="shopeemall-title">
                            <div className="shopeemall-wrapper-header">
                                <div className="shopeemall-wrapper-header-logo">SHOPEE MALL</div>
                                <div className="shopeemall-wrapper-header-list">
                                    <div className="shopeemall-wrapper-header-item">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png" alt="" />
                                        <span>7 ngày miễn phí trả hàng</span>
                                    </div>
                                    <div className="shopeemall-wrapper-header-item">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png" alt="" />
                                        <span>Hàng Chính Hãng 100%</span>
                                    </div>
                                    <div className="shopeemall-wrapper-header-item">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="" />
                                        <span>Miễn Phí Vận Chuyển</span>
                                    </div>
                                </div>
                            </div>
                            <a href="">Xem tất cả <i class="fas fa-chevron-circle-right"></i></a>
                        </div>
                        <div className="shopeemall-body">
                            <Slider2 {...settings2} className="shopeemall-slider">
                                <img src="https://cf.shopee.sg/file/60aa85d10869759abd569d4171f63894" alt="" />
                                <img src="https://cf.shopee.sg/file/3a154597ecb4aaccb4b19905e5baa736" alt="" />
                                <img src="https://cf.shopee.sg/file/703a3c69811b1357863a07e4d92092a0" alt="" />
                                <img src="https://cf.shopee.sg/file/070e42f700cec234c31b56bb605f08b9" alt="" />
                            </Slider2>
                            <img className="shopeemall-respon-banner" src="https://cf.shopee.sg/file/6bfb682c1cc354c0b0151e06050280f6" alt="" />
                            <div className="shopeemall-products">
                                <div className="shopeemall-products-list">
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/8fb0d875330665ec0dbca02f4bd66682_xhdpi" alt="" />
                                        <span>Chốt mục tiêu</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/90c90357ba84dc77122e02e7a2cc3bdb_xhdpi" alt="" />
                                        <span>Săn deal siêu hot</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F7d5ddd21cc10e484de60e12d6c58734e_xhdpi" alt="" />
                                        <span>Giảm đến 50%</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/3af8a8072e21f02c9f13605eeacc42d7_xhdpi" alt="" />
                                        <span>Da khỏe sạch mụn</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/ae84a92ed8e4d399ae927c78a1410fe8_xhdpi" alt="" />
                                        <span>Mua 1 tặng 1</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/90b38589a9c10c286313ef54d6c6de02_xhdpi" alt="" />
                                        <span>Da sáng rạng ngời</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/cd87b35a9bc32ddf59024a8339aef4a6_xhdpi" alt="" />
                                        <span>Giảm đến 50%</span>
                                    </div>
                                    <div className="shopeemall-products-item">
                                        <img src="https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fea507ee06252bb4c0d90eed99c1db288_xhdpi" alt="" />
                                        <span>Deli giảm tới 50%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ShopeeMall
