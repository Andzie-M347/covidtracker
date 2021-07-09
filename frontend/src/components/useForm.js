import {useState} from 'react';

const useForm = (Validations) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues ({
            ...values,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validations(values));
        setIsSubmitting(true);

    
    }

    console.log(isSubmitting);

    return {handleChange, values, handleSubmit, errors}
 }




 export default useForm;