import React from 'react'
import './FooterMain.css'
import { assets } from '../../assets/assets'

const FooterMain = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>dummy text</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>Aout us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+12345678</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copy 2024 - All Right Reserved</p>
        </div>
    )
}

export default FooterMain
