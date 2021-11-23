import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slide_First from '../components/slider_first/Slide_First'
import BodyCategory from '../components/body_category/BodyCategory'
import FlashSale from '../components/flashsale/FlashSale'
import ShopeeMall from '../components/shopeemall/ShopeeMall'
import SearchTrend from '../components/searchtrend/SearchTrend'
import SearchTop from '../components/searchtop/SearchTop'
import Recomender from '../components/recomender/Recomender'
import { useEffect, useState } from 'react'
function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <div>
            <Header/>
            <div className="pm-respon">
                <Slide_First/>
                <BodyCategory/>
                <FlashSale/>
                <ShopeeMall/>
                <SearchTrend/>
                <SearchTop/>
                <Recomender/>
                <Footer/>
            </div>
            <div className="scroll-to-top">
                {isVisible && 
                    <div onClick={scrollToTop}>
                    <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
                    </div>}
                </div>
        </div>
    )
}

export default Home


