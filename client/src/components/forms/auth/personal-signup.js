const PersonalSignUp = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" className="form-control" placeholder="Demarai" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" className="form-control" placeholder="Gray" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" placeholder="demarai_gray" />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" placeholder="demaraigray@gmail.com" />
            </div>
            <p className="terms-aggrement">By clicking continue, You have accepted our Terms of Use and Policy.</p>
            
            <div className="form-group">
                <button type="submit" className="btn btn-lg w-100 btn-radius btn-primary">Create Account</button>
            </div>
        </form>
    )
}
export default PersonalSignUp;