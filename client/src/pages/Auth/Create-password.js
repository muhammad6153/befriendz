import AuthLayout from '../../shared/layouts/Auth-layout';
import CreatePasswordForm from '../../components/forms/auth/create-password-form';
import { Link } from 'react-router-dom';
const CreatePassword = () => {    
    return (
        <AuthLayout>
            <Link to='/back' className='back'><i class="fa fa-arrow-left" aria-hidden="true"></i> Cancel</Link>
            <div className='step-wrapper'>
                <div>
                    <h1 className='h2 text-dark'>Create Password</h1>
                    <p className='sm'>Add security to your account by creating a password</p>
                </div>
                <h5 className='step'>3 of 6</h5>
            </div>
            <CreatePasswordForm />
        </AuthLayout>
    )
}
export default CreatePassword;