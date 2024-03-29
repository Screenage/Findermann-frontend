import Head from "next/head";
import Button from "../../components/Buttons/Button";
import "./style.css";
import Field from "../../components/Field/Field";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form action="" className="resetPassword">
          <h2>Reset Password</h2>
          <p>A link will be sent to your registers email address</p>
          <Field
            text="Enter New Password"
            type="password"
            name="password"
            fieldType="Input"
          />
          <Button
            type="submit"
            text="Reset"
            width="100%"
            margin="0.5rem 0 0 0 "
          />
        </form>
      </div>
      {/* <!-- end of container --> */}
    </>
  );
}
