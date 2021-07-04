import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

function Checkout() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
           type: 'card ',
           card: elements.getElement(CardElement)
        });

        if(!error) {
            try {
                const{id}  = paymentMethod
                    await fetch('http://localhost:5000', {
                        amount: 1000,
                        id
                    }) 
                    .then(response => response.json())
                    .then(data =>  {
                        setSuccess(true);
                        console.log('Success!!!')
                    })
                    .catch (err => console.log(err))
            
            } catch (error) {
                console.log(error);
            }
        }
    }

 

    return (
        <section className="checkout-page">
           <div className="checkout-page__row">
                {!success} ?
                <form onSubmit={handleSubmit} >
                    <fieldset className="FormGroup">

                    </fieldset>
                </form>
           </div>
        </section>
    )
}

export default Checkout;
