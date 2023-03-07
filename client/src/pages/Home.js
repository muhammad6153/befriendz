import BrandLogo from "../shared/components/brand-logo";
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section id="home-section" >
            <div className="container">
                <BrandLogo /> 
                <div className="col-lg-10 col-md-11 mx-auto">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} navText={['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']}>
                        <div className='item'>            
                            <h2 className="h1">Meet People From All Walks Of Life</h2>
                            <p className="lg">Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit. Fringilla elementum erat tortor purus magnis proin urna. </p>
                        </div>
                        <div className='item'>            
                            <h2 className="h1">Meet People From All Walks Of Life</h2>
                            <p className="lg">Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit. Fringilla elementum erat tortor purus magnis proin urna. </p>
                        </div>
                        <div className='item'>            
                            <h2 className="h1">Meet People From All Walks Of Life</h2>
                            <p className="lg">Lorem ipsum dolor sit amet consectetur. Tellus posuere arcu gravida turpis morbi. In nunc at a varius. Nibh ornare sit interdum sit mauris blandit. Fringilla elementum erat tortor purus magnis proin urna. </p>
                        </div>
                    </OwlCarousel>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/create-account" className="btn btn-lg w-100 btn-radius btn-primary">Create Account</Link>
                        </div>                        
                        <div className="col-md-6">
                            <Link to="/sign-in" className="btn btn-lg w-100 btn-radius btn-outline-light">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;