import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      {/* <!-- start of nav --> */}

      <nav>
        <div className={styles.nav}>
          <h2 id={styles["finderman-Logo"]}>Finderman</h2>

          {/* Start of mobile navlinks */}

          <ul className={styles.navlinks}>
            <form action="">
              {/* <!-- start of input container --> */}

              <div className={styles.inputContainer}>
                <input type="text" id="searchText" placeholder="Search"></input>
                {/* <!-- start of select container --> */}

                <div className={styles["select-container"]}>
                  <div className={styles["select-icon"]}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <select name="" id="loction">
                    <option value="" selected>
                      Location
                    </option>
                    <option value="">Hello World</option>
                  </select>
                </div>

                {/* <!-- end of select continer --> */}
              </div>
              <button className={`${styles.btn} ${styles["nav-search"]}`}>
                Search
              </button>

              {/* <!-- end of input container --> */}
            </form>

            <li>
              <a href="ListOfItems.html">Missing items</a>
            </li>
            <li>
              <a href="ListOfItems2.html">Found items</a>
            </li>
            <li>
              <a href="login.html">signin</a>
            </li>
            <li>
              <a href="signup.html">register</a>
            </li>
            <li>
              <a href="index.html">Post Ad</a>
            </li>
          </ul>

          {/* End of mobile navlinks */}

          {/* --------------------------- */}

          {/* Start of laptop navlinks */}

          <ul className={styles.laptop_navlinks}>
            <form action="">
              {/* <!-- start of input container --> */}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id={styles["laptop_navlinks_searchText"]}
                  placeholder="Search"
                ></input>

                {/* <!-- start of select continer --> */}
                <div className={styles["select-container"]}>
                  <div className={styles["select-icon"]}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <select name="" id="loction">
                    <option value="" selected>
                      Location
                    </option>
                    <option value="">Hello World</option>
                  </select>
                </div>
                {/* <!-- end of select continer --> */}
              </div>
              <button className={`${styles.btn} ${styles["nav-search"]}`}>
                Search
              </button>
              {/* <!-- end of input container --> */}
            </form>

            <div className={styles.extra_links}>
              <div
                className={`${styles["extra_links__links"]} ${styles["extra_links__links--spaceOne"]}`}
              >
                <li className={`${styles["extra_links__item"]}`}>
                  <a href="ListOfItems.html">Missing items</a>
                </li>
                <li
                  className={`${styles["extra_links__item"]} ${styles["extra_links__item--padding"]}`}
                >
                  <a href="ListOfItems2.html">Found items</a>
                </li>
              </div>

              <div
                className={`${styles["extra_links__links"]} ${styles["extra_links__links--spaceTwo"]}`}
              >
                <li>
                  <a href="login.html">signin</a>
                  <a href="signup.html">/register</a>
                </li>
                <li
                  className={`${styles["extra_links__item"]} ${styles["extra_links__item--padding"]}`}
                >
                  <a href="index.html" className={styles.post_ad}>
                    Post Ad
                  </a>
                </li>
              </div>
            </div>
          </ul>

          {/* End of mobile navlinks */}

          {/* --------------------------- */}

          {/* Start of Mobile Hamburger */}

          <div className={styles.ham}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/* End of Mobile Hamburger */}
        </div>
      </nav>

      {/* end of nav  */}
    </>
  );
};

export default Navbar;
