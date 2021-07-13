import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      {/* <!-- start of footer_container --> */}
      <footer>
        <div className={styles.footer_container}>
          <h2 id={`${styles["finderman-Logo"]}`}>Finderman</h2>
          <div className={styles.footer_other_links}>
            <div className={styles.other_link}>
              <h4>Support</h4>
              <li>
                <Link href="/">
                  <a href="">Contact us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a href="">Safty Tips</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a href="">FAQ</a>
                </Link>
              </li>
            </div>

            <div className={styles.other_link}>
              <h4>Useful Links</h4>
              <li>
                <Link href="/">
                  <a href="">Missing items</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a href="">Found items</a>
                </Link>
              </li>
            </div>

            <div className={styles.other_link}>
              <h4>Social Links</h4>
              <li>
                <a href=""> Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </div>
            <div
              className={`${styles["download_app"]} ${styles["other_link"]}`}
            >
              <h4>Download our app</h4>
              <Image
                className=""
                src="/assets/app-store-google-play-logo.png"
                width={180}
                height={120}
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className={styles.copywright_section}>
          <p>Findermann &#169; 2021</p>
        </div>
      </footer>
      {/* <!-- end of footer_container --> */}
    </>
  );
};

export default Footer;
