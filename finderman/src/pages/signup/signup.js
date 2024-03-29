import Head from "next/head";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "../../components/Buttons/Button";
import Field from "../../components/Field/Field";

export default function signup() {
  return (
    <>
      {/* <!-- start of container --> */}

      <div className="container">
        {/* start of post_person_info */}

        {/* this is a signup form that is just inheriting the grid property from post_person_info class */}

        <form action="" id="" className="signupFormn signup">
          <h2>Sign up</h2>
          <div className="post_person_info">
            <Field
              text="First Name"
              type="text"
              name="fName"
              fieldType="Input"
            />

            <Field
              text="Last Name"
              type="text"
              name="lName"
              fieldType="Input"
            />

            <Field text="Email" type="email" name="email" fieldType="Input" />

            <Field
              text="Phone Number"
              type="number"
              name="phoneNumber"
              fieldType="Input"
            />

            <Field text="Username" type="text" name="name" fieldType="Input" />

            <Field
              text="Password"
              type="password"
              name="password"
              fieldType="Input"
            />

            <Field
              text="State"
              type="text"
              name="state"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Address"
              type="text"
              name="address"
              fieldType="Input"
            />
          </div>
          <Button
            type="submit"
            text="Sign up"
            width="47%"
            // margin="2.5rem 0 0 0 "
          />
          <p>
            Already have an account?
            <Link to="/login"> Sign in </Link>
          </p>
        </form>

        {/* end of post_person_info */}
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
