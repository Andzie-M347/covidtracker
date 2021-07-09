import React from 'react';
import Form from './Form';

function Contact() {
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // function submitForm () {
    //     setIsSubmitted(true);
    // }

    return (
        <section className="contact-section">
            <div className="contact-section__row">
                <header className="contact-section__header">
                    <h2 className="contact-section__header--heading">Drop us a line</h2>
                    <p className="contact-section__header--subheading">Should you have any questions? Reach out to us and we will get back to you shortly.</p>
                </header>
                {/* Header */}
               <Form />
                {/* #Contact Form */}
            </div>
        </section>
    )
}

export default Contact;
