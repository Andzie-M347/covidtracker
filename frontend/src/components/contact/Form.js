import React from 'react';
import useForm from '../useForm';
import Validations from './Validations';

function Form() {
    const {handleChange, values, handleSubmit, errors} = useForm( Validations);


    return (
        <>
            <form className="contact-form" autoComplete="off" onSubmit={handleSubmit} noValidate>
                <div className="personal-info">
                    <div className="personal-info__firstname">
                        <input 
                            type="text" 
                            name="firstname" 
                            className="contact-form__fieldset" 
                            id="firstname" 
                            placeholder="First Name*" 
                            value={values.firstname}
                            onChange={handleChange}
                            />

                            {errors.firstname && <small className='errors'>{errors.firstname}</small>}
                    </div>
                    <div className="personal-info__lastname">
                        <input 
                            type="text" 
                            name="lastname" 
                            className="contact-form__fieldset" 
                            id="lastname" 
                            placeholder="Last Name*" 
                            value={values.lastname}
                            onChange={handleChange}
                            />

                            {errors.lastname && <small className='errors'>{errors.lastname}</small>}
                    </div>
                </div>
                <div className="contact-info">
                        <div className="contact-info__firstname">
                        <input 
                            type="email" 
                            name="email" 
                            className="contact-form__fieldset" 
                            id="email" 
                            placeholder="Email*"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <small className='errors'>{errors.email}</small>}
                    </div>
                    <div className="contact-info__lastname">
                        <input 
                            type="tel" 
                            name="phone" 
                            className="contact-form__fieldset" 
                            id="phone" 
                            placeholder="Phone* " 
                            value={values.phone}
                            onChange={handleChange}
                            />

                            {errors.phone && <small className='errors'>{errors.phone}</small>}
                    </div>
                </div>
                <div className="contact-message">
                    <textarea 
                        name="message" 
                        className="contact-form__fieldset" 
                        id="message" 
                        rows="4" 
                        placeholder="Message*" 
                        value={values.message}
                        onChange={handleChange}
                        /> 
                    
                </div>
                   <div className="contact-message__error-last">
                       {errors.message && <small className='errors'>{errors.message}</small>}
                   </div>
                <div className="send-button">
                    <button type="submit" className="primary-button">
                        Send Message &rarr;
                    </button>
                </div>
            </form> 
        </>
    )
}

export default Form
