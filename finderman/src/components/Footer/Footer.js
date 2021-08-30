import "./style.css";
import Image from "next/image";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* <!-- start of footer_container --> */}
      <footer>
        <div className="footer_container">
          <h2 id="finderman-Logo">Finderman</h2>
          <div className="footer_other_links">
            <div className="other_link">
              <h4>Support</h4>
              <li>
                <Link to="/contactUs">
                  <a href="">Contact us</a>
                </Link>
              </li>
              <li>
                <Link to="/safetyTips">
                  <a href="">Safty Tips</a>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
            </div>

            <div className="other_link">
              <h4>Useful Links</h4>
              <li>
                <Link to="/">
                  <a>Missing items</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a>Found items</a>
                </Link>
              </li>
            </div>

            <div className="other_link">
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
            <div className="download_app other_link">
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

        <div className="copywright_section">
          <p>Findermann &#169; 2021</p>
        </div>
      </footer>
      {/* <!-- end of footer_container --> */}
    </>
  );
};

export default Footer;
