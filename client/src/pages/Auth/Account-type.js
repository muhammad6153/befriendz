import { Link } from 'react-router-dom';
import BrandLogo from '../../shared/components/brand-logo';
import './Auth.scss';

const AccountType = () => {
    return (
        <section id="auth-section" >
            <div className='container'>
                <div className='col-md-7 col-lg-6 col-xl-5 mx-auto'>
                    <div className='card'>
                        <BrandLogo image="logo-black.png"/>
                        <h1 className='h2 text-dark'>Welcome 🤗</h1>
                        <p className='sm'>What type of account do you want to create?</p>
                        <div className='personal-account-box box'>
                        </div>
                        <div className='business-account-box box'>
                        </div>
                        <p className='sm text-dark text-center'>Already a member <Link to="/sign-in">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AccountType;