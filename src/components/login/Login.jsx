import React from 'react'
import './login.scss'

function Register() {
    return (
        <div className="">
            <form action="">
                <div className="form">
                    <div className="form-header-title">
                        <h1>Đăng Nhập</h1>
                        <div className="form-header-title-right">
                            <div className="form-header-title-right-text">
                                Đăng nhập với mã QR
                            </div>
                            <a class="form-header-title-right-image" href="/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"><svg width="40" height="40" fill="none" class="_3F92IZ"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg></a>  
                        </div>
                    </div>
                    <div className="form-body">
                        <div className="form-body-input-pt">
                            <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập"/>
                        </div>
                        <div className="form-body-input-pt">
                            <input type="password" placeholder="Mật khẩu"/>
                        </div>
                        <button className="btn-continue">Đăng Nhập</button>
                        <div className="forget">
                            <a href="">Quên mật khẩu</a>
                            <a href="">Đăng nhập với SMS</a>
                        </div>
                        <div className="form-body-line pb20">
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
                        <div className="has-auth pt30">
                            <span>Bạn đã có tài khoản? <a href="/auth/register">Đăng ký</a></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
