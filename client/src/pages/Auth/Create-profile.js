import { Link } from 'react-router-dom';
import AuthLayout from '../../shared/layouts/Auth-layout';

const CreateProfile = () => {
    return (
        <AuthLayout>
            <Link to='/back' className='back'><i class="fa fa-arrow-left" aria-hidden="true"></i> Cancel</Link>
            <div className='step-wrapper'>
                <div>
                    <h1 className='h2 text-dark'>Profile</h1>
                    <p className='sm'>Let us build your profile to optimize your account </p>
                </div>
                <h5 className='step'>4 of 6</h5>
            </div>           
        </AuthLayout>
    )
}
export default CreateProfile;