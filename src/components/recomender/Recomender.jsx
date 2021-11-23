import React from 'react'
import './recomender.scss'
import { useEffect, useState } from 'react'
const Recomender = () => {
    const [products, setProducts] = useState([])
    const format = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    const [loadmore, setLoadmore] = useState(18)   
    const [loadmore1, setLoadmore1] = useState(28)
    
    useEffect(() => {
        const getProduct = async () =>{
            try {
                const proxyurl = 'https://cors-anywhere.herokuapp.com/';
                const respond = await fetch(proxyurl + 'https://shopee.vn/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=1&limit=200')
                const res = await respond.json()
                setProducts(res.data.sections)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])

    const setcount = (count) => {
        setLoadmore(count => count + 6)
    }
    const setcount1 = (count1) => {
        setLoadmore1(count1 => count1 + 6)
    }
    return (
        
        <div className="bg-body">
           <div className="container">
                <div class="tabs effect-1">
                    <input className="recomender-input" type="radio" id="tab-1" name="tab-effect-1" checked="checked"/>
                    <span>GỢI Ý MUA HÀNG</span>
                    <input className="recomender-input" type="radio" id="tab-2" name="tab-effect-1"/>
                    <span>
                        <img src="https://cf.shopee.vn/file/42a28847b773ee5eccdbd931e44d6af7" className="recomender-header-img" alt="" />
                    </span>


                    <div class="tab-content">
                        <section id="tab-item-1">
                            <div className="recomender-product">
                                <div className="recomender-product-list">
                                    {
                                        products[0]?.data.item.slice(0, loadmore).map(productitem => (
                                            <div className="recomender-product-item" key={productitem.itemid}>
                                                <img src="https://cf.shopee.vn/file/b400dd3d700b5190e5e5feadf4310bf9_tn" className="flashsale-item-all" alt="" />
                                                <img className="recomender-product-image" src={`https://cf.shopee.vn/file/${productitem.image}_tn`} alt="" />
                                                <div className="recomender-product-text">
                                                    <span className="recomender-product-name">{productitem.name}</span>
                                                    { productitem.voucher_info != null ? 
                                                        <div className="recomender-product-sale-bottom">
                                                            <svg class="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" stroke="currentColor" fill="#f69113"></path></svg>
                                                            <span className="recomender-product-sale-bottom-text">{productitem.voucher_info.label}</span>
                                                            <svg class="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113"></path></svg>
                                                        </div> :
                                                        null 
                                                    }
                                                    
                                                    <div className="recomender-product-wrapper">
                                                        <div className="recomender-product-wrapper-price">
                                                            <span class="recomender-product-wrapper-price-dola">₫ </span>
                                                            <span class="recomender-product-wrapper-price-value">{format(productitem.price / 100000)}</span>
                                                        </div>
                                                        {
                                                            productitem.historical_sold > 1000 ?
                                                            <span className="recomender-product-buyed">Đã bán {parseFloat(productitem.historical_sold/1000).toFixed(1)}k</span> :
                                                            <span className="recomender-product-buyed">Đã bán {productitem.historical_sold}</span>
                                                        }
                                                    </div>
                                                </div>
                                                { productitem.discount === null ? 
                                                    null :
                                                    
                                                    <div className="recomender-product-sale">
                                                        <div className="recomender-product-wrapper-price-sale">
                                                            <span class="recomender-product-sale-price">{productitem.discount}</span>
                                                            <span class="recomender-product-sale-text">Giảm</span>
                                                        </div>
                                                    </div>
                                                    
                                                }
                                                { productitem.item_rating.rating_star < 4.5 ? 
                                                    <div className="recomender-product-tag">
                                                        <img className="recomender-product-tag-image" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ea7594a0e6dbc0cdb8640b83a1079bb.png" alt="" />
                                                    </div> :
                                                    
                                                    <div className="recomender-product-like">
                                                        <span className="recomender-product-like-text">Yêu thích</span>
                                                    </div>
                                                }
                                                 { productitem.brand === null ? 
                                                    null :
                                                    <div className="recomender-product-taitro">
                                                        <span className="recomender-product-taitro-text">Tài trợ</span>
                                                    </div>
                                                }
                                                <div className="recomender-product-same">
                                                    <span className="recomender-product-same-text">Tìm sản phẩm tương tự</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="btn-loadmore-wrapper">
                                <button onClick={setcount} className="btn-loadmore">Xem thêm</button>
                            </div>
                        </section>
                        <section id="tab-item-2">
                            <div className="recomender-product">
                                <div className="recomender-product-list">
                                    {
                                        products[0]?.data.item.slice(10, loadmore1).map(productitem => (
                                            <div className="recomender-product-item" key={productitem.itemid}>
                                                <img src="https://cf.shopee.vn/file/b400dd3d700b5190e5e5feadf4310bf9_tn" className="flashsale-item-all" alt="" />
                                                <img className="recomender-product-image" src={`https://cf.shopee.vn/file/${productitem.image}_tn`} alt="" />
                                                <div className="recomender-product-text">
                                                    <span className="recomender-product-name">{productitem.name}</span>
                                                    { productitem.voucher_info != null ? 
                                                        <div className="recomender-product-sale-bottom">
                                                            <svg class="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="" stroke="currentColor" fill="#f69113"></path></svg>
                                                            <span className="recomender-product-sale-bottom-text">{productitem.voucher_info.label}</span>
                                                            <svg class="_2DRZW _2xFcL" viewBox="-0.5 -0.5 4 16"><path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" transform="rotate(180) translate(-3 -15)" stroke="currentColor" fill="#f69113"></path></svg>
                                                        </div> :
                                                        null 
                                                    }
                                                    
                                                    <div className="recomender-product-wrapper">
                                                        <div className="recomender-product-wrapper-price">
                                                            <span class="recomender-product-wrapper-price-dola">₫ </span>
                                                            <span class="recomender-product-wrapper-price-value">{format(productitem.price / 100000)}</span>
                                                        </div>
                                                        {
                                                            productitem.historical_sold > 1000 ?
                                                            <span className="recomender-product-buyed">Đã bán {parseFloat(productitem.historical_sold/1000).toFixed(1)}k</span> :
                                                            <span className="recomender-product-buyed">Đã bán {productitem.historical_sold}</span>
                                                        }
                                                    </div>
                                                </div>
                                                { productitem.discount === null ? 
                                                    null :
                                                    
                                                    <div className="recomender-product-sale">
                                                        <div className="recomender-product-wrapper-price-sale">
                                                            <span class="recomender-product-sale-price">{productitem.discount}</span>
                                                            <span class="recomender-product-sale-text">Giảm</span>
                                                        </div>
                                                    </div>
                                                    
                                                }
                                                { productitem.item_rating.rating_star < 4.5 ? 
                                                    <div className="recomender-product-tag">
                                                        <img className="recomender-product-tag-image" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ea7594a0e6dbc0cdb8640b83a1079bb.png" alt="" />
                                                    </div> :
                                                    
                                                    <div className="recomender-product-like">
                                                        <span className="recomender-product-like-text">Yêu thích</span>
                                                    </div>
                                                }
                                                 { productitem.brand === null ? 
                                                    null :
                                                    <div className="recomender-product-taitro">
                                                        <span className="recomender-product-taitro-text">Tài trợ</span>
                                                    </div>
                                                }
                                                <div className="recomender-product-same">
                                                    <span className="recomender-product-same-text">Tìm sản phẩm tương tự</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="btn-loadmore-wrapper">
                                    <button onClick={setcount1} className="btn-loadmore">Xem thêm</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Recomender
