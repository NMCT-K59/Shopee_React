import React from 'react'
import HeaderMain from './HeaderMain/HeaderMain'
import HeaderTop from './HeaderTop/HeaderTop'
import './header.scss'
function Header() {
    return (
        <div className="app">
             <div className="header">
                <div className="container">
                    <HeaderTop/>
                    <HeaderMain/>
                </div>
            </div>
        </div>
    )
}

export default Header
