import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const postItemOption = () => {
  return (
    <>
      <div className="container">
        {/* start of missing_or_found_container */}
        <div className="missing_or_found_container">
          {/* start of missing_div */}
          <Link to="/">
            <div className="missing_div">
              <div>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p>Missing</p>
              </div>
            </div>
          </Link>
          <div className="middleLine"></div>
          <Link to="/foundItems">
            <div className="missing_div">
              <div>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <p>Found</p>
              </div>
            </div>
          </Link>
          {/* end of missing_div */}
        </div>
        {/* end of missing_or_found_container */}
      </div>
    </>
  );
};

export default postItemOption;
