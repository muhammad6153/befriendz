import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AccountType from "./pages/Auth/Account-type";
import './App.scss';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} />   
          <Route path="/account-type"  element={<AccountType />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
