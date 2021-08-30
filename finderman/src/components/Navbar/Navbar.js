import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- start of nav --> */}

      <nav>
        <div className="nav">
          <Link to="/">
            <h2 id="finderman-Logo">Finderman</h2>
          </Link>
          {/* Start of mobile navlinks */}

          <ul className="navlinks">
            <form action="">
              {/* <!-- start of input container --> */}

              <div className="inputContainer">
                <input type="text" id="searchText" placeholder="Search"></input>
                {/* <!-- start of select container --> */}

                <div className="select-container">
                  <div className="select-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <select name="" id="loction">
                    <option value="" defaultValue>
                      Location
                    </option>
                    <option value="">Hello World</option>
                  </select>
                </div>

                {/* <!-- end of select continer --> */}
              </div>
              <button className="btn nav-search">Search</button>

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

          {/* Start of laptop navlinks */}

          <ul className="laptop_navlinks">
            <form action="">
              {/* <!-- start of input container --> */}
              <div className="inputContainer">
                <input
                  type="text"
                  id="laptop_navlinks_searchText"
                  placeholder="Search"
                ></input>

                {/* <!-- start of select continer --> */}
                <div className="select-container">
                  <div className="select-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <select name="" id="loction">
                    <option value="" defaultValue>
                      Location
                    </option>
                    <option value="">Hello World</option>
                  </select>
                </div>
                {/* <!-- end of select continer --> */}
              </div>
              <button className="btn nav-search">Search</button>
              {/* <!-- end of input container --> */}
            </form>

            <div className="extra_links">
              <div className="extra_links__links extra_links__links--spaceOne">
                <Link to="/">
                  <li className="extra_links__item">Missing items</li>
                </Link>
                <Link to="/">
                  <li className="extra_links__item extra_links__item--padding">
                    Found items
                  </li>
                </Link>
              </div>

              <div className="extra_links__links extra_links__links--spaceTwo">
                <li>
                  <Link to="/login">Signin</Link>
                  <Link to="/signup">/Register</Link>
                </li>
                <li className="extra_links__item extra_links__item--padding">
                  <Link to="/">
                    <div href="index.html" className="post_ad">
                      Post Ad
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </ul>

          {/* End of mobile navlinks */}

          {/* --------------------------- */}

          {/* Start of Mobile Hamburger */}

          <div className="ham">
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
