import { imageURL } from "../../../shared/helper";

const CreatePasswordForm = () => {    
    return (
        <form>
            <div className="form-group password">
                <label htmlFor="password">Create Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter Your Password" />
                <img src={imageURL('icons/eye.png')} alt="View Password" className="view-password" />
            </div>
            <div className="form-group password">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Your Password" />
                <img src={imageURL('icons/eye.png')} alt="View Password" className="view-password" />
            </div>
            
            <button type="submit" className="btn btn-lg w-100 btn-radius btn-primary fixed-button">Continue</button>
        </form>
    )
}
export default CreatePasswordForm;