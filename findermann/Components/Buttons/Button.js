import styles from "./Button.module.css";
import Image from "next/image";
import Link from "next/link";
const Button = ({ text, width, margin }) => {
  return (
    <>
      {/* <!-- start of Button container --> */}
      <div className={styles.button}>
        <input
          type="submit"
          value={text}
          style={{ width: width, margin: margin }}
        ></input>
      </div>
      {/* <!-- end of Button container --> */}
    </>
  );
};

export default Button;
