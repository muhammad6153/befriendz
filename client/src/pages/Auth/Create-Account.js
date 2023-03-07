import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AuthLayout from '../../shared/layouts/Auth-layout';
import PersonalSignUp from '../../components/forms/auth/personal-signup';
import BusinessSignUp from '../../components/forms/auth/business-signup';
const CreateAccount = () => {
    
  const type = useParams().type;
    return (
        <AuthLayout>
            <div className='step-wrapper'>
                <div>
                    <h1 className='h2 text-dark'>Welcome 🤗</h1>
                    <p className='sm'>Don’t keep your friends waiting, Sign Up</p>
                </div>
                <h5 className='step'>1 of 6</h5>
            </div>
            {
                type === 'personal' ? <PersonalSignUp /> : <BusinessSignUp />
            }

           
            <p className='sm text-dark text-center'>Already a member <Link to="/sign-in">Sign In</Link></p>
        </AuthLayout>
    )
}
export default CreateAccount;