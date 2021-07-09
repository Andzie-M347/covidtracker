export default function Validations (values) {
    
    let errors = {};

    if(!values.firstname.trim()) {
        errors.firstname = 'First Name required';
    }
    
    if(!values.lastname.trim()) {
        errors.lastname = 'Last Name required';
    }

   if (!values.email.trim()) {
        errors.email = 'Email required';
    
    }

    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';   
    }


    if(!values.phone.trim()) {
        errors.phone = 'Phone required';
    }

    // else if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/.test(values.phone)) {
    //     errors.phone = 'Phone is invalid';   
    // }



    if(!values.message.trim()) {
        errors.message = 'Message required';
    }


    return errors;

}