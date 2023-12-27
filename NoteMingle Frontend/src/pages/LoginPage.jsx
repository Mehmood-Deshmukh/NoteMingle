import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/users/user.actions";
export default function LoginPage() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  console.log(auth, token);

  if (auth) {
    nav("/notes")
  }

  function handleLogin(email, password) {
    const handleLLogin = () => {
      dispatch(getUser({ email, password }));
    };
    handleLLogin();
  }
  return (
    <div className="loginPage">
      <Header />
      <div className="loginBox">
        <div>
          <h1 className="homeHeading">Let's get You Signed In !</h1>
          <p className="loginBoxPara">Go ahead and enter your details</p>
        </div>
        <SignIn handleLogin={handleLogin} />
      </div>
      <Footer />
    </div>
  );
}
