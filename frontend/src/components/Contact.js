import React from 'react';

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-section__row">
                <header className="contact-section__header">
                    <h2 className="contact-section__header--heading">Drop us a line</h2>
                    <p className="contact-section__header--subheading">Should you have any questions? Reach out to us and we will get back to you shortly.</p>
                </header>
                    <form className="contact-form" autoComplete="off">
                        <div className="personal-info">
                            <div className="personal-info__firstname">
                                <input type="text" name="firstname" className="contact-form__fieldset" id="firstname" placeholder="First Name*" />
                            </div>
                            <div className="personal-info__lastname">
                                <input type="text" name="lastname" className="contact-form__fieldset" id="lastname" placeholder="Last Name*" />
                            </div>
                        </div>
                        <div className="contact-info">
                             <div className="contact-info__firstname">
                                <input type="email" name="email" className="contact-form__fieldset" id="email" placeholder="Email*" />
                            </div>
                            <div className="contact-info__lastname">
                                <input type="tel" name="phone" className="contact-form__fieldset" id="phone" placeholder="Phone*" />
                            </div>
                        </div>
                        <div className="contact-message">
                            <textarea name="message" className="contact-form__fieldset" id="message" rows="4" placeholder="Message*" /> 
                        </div>
                        <div className="send-button">
                            <button type="submit" className="primary-button">
                                Send Message &rarr;
                            </button>
                        </div>
                    </form>
                
            </div>
        </section>
    )
}

export default Contact;
