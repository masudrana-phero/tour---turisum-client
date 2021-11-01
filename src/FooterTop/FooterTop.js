import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <div className="footer-top">
            <div className="row px-5">
                <div className="col-md-7 description">
                    <h2>Grab Our Newsletter</h2>
                    <h4>To receive latest offers and discounts from the shop</h4>
                    <form onSubmit="">
                        <input type="email" placeholder="Enter Your Email Address" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
                <div className="col-md-5">
                    <img className="footer-top-img" src="https://i.ibb.co/6vwm8g6/newsletter.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;