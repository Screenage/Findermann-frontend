import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Signup.module.css";
import Button from "../Components/Buttons/Button";
import InputField from "../Components/Inputs/Inputs";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}

      <div className="container">
        {/* start of post_person_info */}

        {/* this is a signup form that is just inheriting the grid property from post_person_info class */}

        <form
          action=""
          id=""
          className={`${styles["signupForm"]} ${styles["signup"]}`}
        >
          <h2>Sign up</h2>
          <div className="post_person_info">
            <InputField text="First Name:" />
            <InputField text="Last Name:" />
            <InputField text="Email:" />
            <InputField text="Phone Number:" />
            <InputField text="Username:" />
            <InputField text="Password:" />
            <div className={styles.select_box}>
              <select name="" className={styles.state} id="">
                <option value selected>
                  State
                </option>
              </select>
              <div className={styles.select_drop_down}>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <InputField text="Address:" />
          </div>
          <Button text="Sign up" width="47%" />
          <p>
            Already have an account? <a href="login.html">Sign in</a>{" "}
          </p>
        </form>

        {/* end of post_person_info */}
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
