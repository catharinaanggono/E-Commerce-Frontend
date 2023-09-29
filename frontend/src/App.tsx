import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import RetrieveData from "./components/RetrieveData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SearchResults from "./pages/SearchResult";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<RetrieveData />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product">
                <Route path=":productName" element={<Product />} />
              </Route>
              <Route path="/result/:keyword" element={<SearchResults />}>
                {/* <Route path=":keyword" element={<SearchResults />} /> */}
              </Route>
              <Route path="/forgetPassword">
                <Route path="enterEmail" element={<ForgetPassword />} />
                <Route path="resetPassword" element={<ResetPassword />} />
              </Route>
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
