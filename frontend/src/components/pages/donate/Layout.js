import React from 'react';
import {GrPaypal, SiMastercard} from 'react-icons/all';

import ImageFirst from '../../../assets/images/about-img.jpg';
import ImageSecond from '../../../assets/images/about-img-2.jpg';


function Layout() {
    return (
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
                       <div className="donations__content">
                           <h2 className="donations__content--title">Donate to help affected areas</h2>
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
           </div>
        </section>
    )
}

export default Layout;
