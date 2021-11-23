import React from 'react'
import image1 from '../../assets/img/image1.jfif';
import image2 from '../../assets/img/image2.jfif';
import image3 from '../../assets/img/image3.jfif';
import image4 from '../../assets/img/image4.jfif';
import image5 from '../../assets/img/image5.jfif';
import image6 from '../../assets/img/image6.jfif';
import './usersale.scss'
function UserSale() {
    return (
        <div>
            <div className="container">
                <div className="image1">
                    <img src={image1} alt="" />
                </div>
                <div className="image2">
                    <img src={image2} alt="" />
                </div>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/dFkXJhz6olo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="image3">
                    <img src={image3} alt="" />
                </div>
                <div className="image4">
                    <img src={image4} alt="" />
                </div>
                <div className="image5">
                    <img src={image5} alt="" />
                </div>
                <div className="image6">
                    <img src={image6} alt="" />
                </div>
                <div className="">
                <img src="https://cf.shopee.vn/file/86ac4c21f55d7ee336df331dc7e2d075"/>
                </div>
                <div className="">
                    <img src="https://cf.shopee.vn/file/3de3c18d9f49af8d2af44f44bbc14446"/>
                </div>
                <div className="">
                    <img class="lazyload _2JzMfm" src="https://cf.shopee.vn/file/d926382e804796bb728d94544150b791"/>
                </div>
                <div className="">
                    <img class="lazyload _2JzMfm" src="https://cf.shopee.vn/file/5599e2bfb22a4e453daf95ea1ca9406a"/>
                </div>
                <div className="last-image">
                    <img class="lazyload _2JzMfm" src="https://cf.shopee.vn/file/20c837e0e31044bb0bc71726461ac005"/>
                </div>
            </div>
        </div>
    )
}

export default UserSale
