import styles from "./CategoryPanelTwo.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faPhone,
  faTv,
  faChair,
  faStethoscope,
  faTshirt,
  faVolleyballBall,
  faUsers,
  faDog,
  faHamburger,
  faWrench,
  faToolbox,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCar,
  faPhone,
  faTv,
  faChair,
  faStethoscope,
  faTshirt,
  faVolleyballBall,
  faUsers,
  faDog,
  faHamburger,
  faWrench,
  faToolbox
);

const CategoryPanel = ({ icon, text, to }) => {
  return (
    <>
      {/* this is where u will see vehicles mobile phones electronics nav */}
      <div className={styles.category}>
        <div className={styles.category_main}>
          <FontAwesomeIcon
            className={styles.category_icon}
            icon={["fas", `${icon}`]}
          />
          <p>{text} </p>
        </div>
        <div className={styles.category_subMain}>
          <div className={styles.category_subLinks}>
            <Link href="/login">
              <div className={styles.category_content}>
                <p>cars </p>
              </div>
            </Link>
          </div>
          <div className={styles.category_subLinks}>
            <Link href="/login">
              <div className={styles.category_content}>
                <p>car </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPanel;
