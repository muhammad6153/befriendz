import AuthLayout from '../../shared/layouts/Auth-layout';
import VerifyEmailForm from '../../components/forms/auth/verify-email-form';
import { imageURL } from '../../shared/helper';
import { Link } from 'react-router-dom';
const VerifyEmail = () => {    
    return (
        <AuthLayout>
            <Link to='/back' className='back'><i class="fa fa-times" aria-hidden="true"></i> Cancel</Link>
            <div className='step-wrapper'>
                <div>
                    <h1 className='h2 text-dark'>Verify Email</h1>
                    <p className='sm'>Enter OTP sent to <a href="mailto:demaraigray@gmail.com">demaraigray@gmail.com</a> below</p>
                </div>
                <h5 className='step'>2 of 6</h5>
            </div>
            <img src={imageURL('email-sent.png')} alt="Email Sent"/>
            <VerifyEmailForm />           

        </AuthLayout>
    )
}
export default VerifyEmail;