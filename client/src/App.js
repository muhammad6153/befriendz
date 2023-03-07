import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AccountType from "./pages/Auth/Account-type";
import CreateAccount from "./pages/Auth/Create-Account";
import VerifyEmail from "./pages/Auth/Verify-email";
import CreatePassword from "./pages/Auth/Create-password";
import CreateProfile from "./pages/Auth/Create-profile";
import './App.scss';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />   
          <Route path="/create-account"  element={<AccountType />} />   
          <Route path="/create-account/:type"  element={<CreateAccount />} />     
          <Route path="/verify-email"  element={<VerifyEmail />} />        
          <Route path="/create-password"  element={<CreatePassword />} />     
          <Route path="/create-profile"  element={<CreateProfile />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
