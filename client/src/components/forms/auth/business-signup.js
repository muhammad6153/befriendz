const BusinessSignUp = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="business_name">Full Business Name</label>
                <input type="text" name="business_name" className="form-control" placeholder="S7N D3SIGNS" />
            </div>
            <div className="form-group">
                <label htmlFor="business_type">Business Type</label>
                <input type="text" name="business_type" className="form-control" placeholder="Design" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" placeholder="s7n_design" />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Business Email Address</label>
                <input type="email" name="email" className="form-control" placeholder="demaraigray@gmail.com" />
            </div>
            <p className="terms-aggrement">By clicking continue, You have accepted our Terms of Use and Policy.</p>
            
            <div className="form-group">
                <button type="submit" className="btn btn-lg w-100 btn-radius btn-primary">Create Account</button>
            </div>
        </form>
    )
}
export default BusinessSignUp;