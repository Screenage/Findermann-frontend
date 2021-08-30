import Button from "../../components/Buttons/Button";
import "./style.css";
import { Link } from "react-router-dom";
import Field from "../../components/Field/Field";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form action="" className="loginForm login">
          <h2>Login</h2>

          <Field
            text="Username:"
            type="text"
            name="username"
            fieldType="Input"
          />

          <Field
            text="Password:"
            type="password"
            name="password"
            fieldType="Input"
          />

          <Button text="Login" width="100%" />

          <div className="extra_login_info">
            <div className="extra_login_info__rememberMe">
              <input type="checkbox" name="rememberMe" id="rememberMe"></input>
              <label>Remember Me</label>
            </div>

            <Link to="/forgotPassword"> Forgot Password? </Link>
          </div>

          <p className="extra_login_info__signUp">
            {`
            Don't have an account?
      `}

            <Link to="/signup"> Sign up </Link>
          </p>
        </form>
      </div>
      {/* <!-- end of container --> */}
    </>
  );
}
