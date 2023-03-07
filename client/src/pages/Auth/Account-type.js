import { Link } from 'react-router-dom';
import AuthLayout from '../../shared/layouts/Auth-layout';

const AccountType = () => {
    return (
        <AuthLayout>
            <h1 className='h2 text-dark'>Welcome 🤗</h1>
            <p className='sm'>What type of account do you want to create?</p>
            <div className='personal-account-box box'>
                <h3>Personal Account</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed faucibus vitae suscipit pellentesque diam urna quis neque fames.</p>
                    <Link to="/create-account/personal" className='btn btn-light'><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>
            <div className='business-account-box box'>
                <h3>Business Account</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur. Sed faucibus vitae suscipit pellentesque diam urna quis neque fames.</p>
                    <Link to="/create-account/business" className='btn btn-light'><i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>
            <p className='sm text-dark text-center'>Already a member <Link to="/sign-in">Sign In</Link></p>
        </AuthLayout>
    )
}
export default AccountType;