import BrandLogo from '../components/brand-logo';
import './Auth-layout.scss';

const AuthLayout = (props) => {
    return (
        <section id="auth-section" >
            <div className='container'>
                <div className='col-md-8 col-lg-7 col-xl-5 mx-auto'>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <BrandLogo image="logo-black.png"/>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AuthLayout;