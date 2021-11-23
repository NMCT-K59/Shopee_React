import React from 'react'
import './register.scss'

function Register() {
    return (
        <div className="">
            <form action="">
                <div className="form">
                    <div className="form-header-title">
                        <h1>Đăng Ký</h1>
                    </div>
                    <div className="form-body">
                        <div className="form-body-input-pt">
                            <input type="text" placeholder="Số điện thoại"/>
                        </div>
                        <button className="btn-continue">TIẾP THEO</button>
                        <div className="form-body-line pb20 pt30">
                            <div className="form-body-line-left"></div>
                            <span className="form-body-line-center">Hoặc</span>
                            <div className="form-body-line-right"></div>
                        </div>
                        <div className="form-body-button">
                            <button className="button-socials-fb">
                                <div className="button-social">
                                    <div className="button-item social-white-background social-white-fb-png"></div>
                                </div>
                                <div className="button-brand">Facebook</div>
                            </button>
                            <button className="button-socials-gg">
                                <div className="button-social bg-white">
                                    <div className="button-item social-white-background social-white-google-png"></div>
                                </div>
                                <div className="button-brand">Google</div>
                            </button>
                            <button className="button-socials-ap">
                                <div className="button-social">
                                    <div className="button-item social-white-background social-white-apple-png"></div>
                                </div>
                                <div className="button-brand">Apple</div>
                            </button>
                        </div>
                        <div className="rules">
                            <span className="rules-span">Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br/> <a href="">Điều khoản dịch vụ</a> & <a href="">Chính sách bảo mật</a></span>
                        </div>
                        <div className="has-auth">
                            <span>Bạn đã có tài khoản? <a href="/auth/login">Đăng nhập</a></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
