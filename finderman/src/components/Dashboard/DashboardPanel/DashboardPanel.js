import { Link } from "react-router-dom";
import "./style.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserEdit,
  faStickyNote,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const DashboardPanel = () => {
  return (
    <>
      {/* start of user_nav_pane */}
      <div className="user_nav_pane">
        <div className="user_nav_pane__user_info_section">
          <div className="user_nav_pane__user_info_section__image">
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={180}
              height={180}
              alt="User"
            />
          </div>
          <p className="user_nav_pane__user_info_section__name">Sammy</p>
        </div>
        <div className="user_nav_pane__links">
          <li>
            <Link to="/">
              <div className="user_nav_pane__links_content">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faUser} className="icon" />{" "}
                </div>
                <p> Update Profile </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/editUploadPage">
              <div className="user_nav_pane__links_content">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faUserEdit} className="icon " />
                </div>
                <p> Edit Uploads </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/subscriptionHistory">
              <div className="user_nav_pane__links_content">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faStickyNote} className="icon" />{" "}
                </div>
                <p> Subscription History </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/resetPassword">
              <div className="user_nav_pane__links_content">
                <div className="iconDiv">
                  <FontAwesomeIcon icon={faKey} className="icon " />{" "}
                </div>
                <p> Change Password </p>
              </div>
            </Link>
          </li>
        </div>
      </div>
      {/* end of user_nav_pane */}
    </>
  );
};

export default DashboardPanel;
