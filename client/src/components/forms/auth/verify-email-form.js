
import { Link } from "react-router-dom";
const VerifyEmailForm = () => {    
    return (
        <form className="verifyEmail">
            <div className="code-row">                
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
            
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
            
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
            
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
            
                <div className="form-group">
                    <input type="text" name="business_name" className="form-control" placeholder="" />
                </div>
            </div>
            
            <p className='sm text-dark text-center'>Did not receive email? <Link to="/sign-in">Resend Code</Link></p>
            <button type="submit" className="btn btn-lg w-100 btn-radius btn-primary fixed-button">Verify Email</button>
        </form>
    )
}
export default VerifyEmailForm;