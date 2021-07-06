import React from 'react';
import {GrPaypal, SiMastercard, GiTakeMyMoney} from 'react-icons/all';

import ImageFirst from '../../../assets/images/about-img.jpg';
import ImageSecond from '../../../assets/images/about-img-2.jpg';
import Contact from '../../Contact';


function Layout() {
    return (
        <>
            <section className="donate-page">
                    <div className="donate-page__row">
                        <div className="donate-page__left">
                                <div className="donate-page__left--pattern"></div>
                                <div className="image-decor">
                                    <div className="image-decor__row">
                                        <div className="image-decor__left">
                                            <figure className="image-decor__left--image">
                                            <img src={ImageFirst} alt="About " className="responsive-image" />
                                            </figure>
                                        </div>
                                        <div className="image-decor__left">
                                            <div className="image-decor__left__row">
                                                <div className="stats">
                                                    <div className="stats__number">
                                                    <h4> 300+ </h4>
                                                    </div>
                                                    <div className="stats__title">
                                                        Donations
                                                    </div>
                                                </div>

                                                <figure className="responsive-image">
                                                    <img src={ImageSecond} alt="About " className="responsive-image" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Decor */}
                                </div>
                        </div>
                        <div className="donate-page__right">
                            
                            <div className="donations">
                                <div className="donations__header">
                                    <h2 className="donations__header--title">Donate to help affected areas</h2>
                                </div>

                                <div className="donations__content">
                                    <div className="donations__content__align">
                                        <div className="donations__content--amount">
                                            <span>
                                                R
                                            </span>
                                            <h4> R100.00 </h4>
                                        </div>
                                        <div className="donations__content--amount">
                                                <span>
                                                R
                                            </span>
                                            <h4> R500.00 </h4>
                                        </div>
                                        <div className="donations__content--amount">
                                                <span>
                                                R
                                            </span>
                                            <h4> R1000.00 </h4>
                                        </div>
                                    </div>{/* #Align */}

                                    <div className="donations__custom-amount">
                                        <span>
                                            <GiTakeMyMoney />
                                        </span>
                                       
                                            <input type="number" name="amount" className="contact-form__fieldset" id="amount" placeholder="Enter Amount" />
                                       
                                    </div>
                                </div>

                                <div className="donations__footer">
                                    <h3> Payment Method</h3>
                                    <footer>
                                    <div className="donations__paypal">
                                        <button className="donations-button"> 
                                            <span className="donations-button__icon">
                                                <GrPaypal />
                                            </span>
                                            <span className="donations-button__title">Paypal</span>
                                        </button>
                                    </div>
                                    <div className="donations__stripe">
                                            <button className="donations-button"> 
                                            <span className="donations-button__icon">
                                                <SiMastercard />
                                            </span>
                                            <span className="donations-button__title">Stripe</span>
                                        </button>
                                    </div>
                                    </footer>
                                </div>
                                
                            </div>
                        </div>
                    </div>{/* #Row */}
            </section>

        <Contact />
        </>
    )
}

export default Layout;
