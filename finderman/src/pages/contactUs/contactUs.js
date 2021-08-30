import { Link } from "react-router-dom";
import "./style.css";
import Field from "../../components/Field/Field";
import Button from "../../components/Buttons/Button";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function contactUs() {
  return (
    <div>
      {/* start of container */}
      <div className="container container-in-contactus">
        {/* start of user_nav_pane */}
        <div className="user_nav_pane contact_us_info_pane">
          <p className="contact_us_info_pane_header">Contact Us</p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            +234 906 065 0951
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            support@findermann.com
          </p>
          <div className="circle_box">
            <div className="blue_circle" />
            <div className="light_pink_circle" />
            <div className="purple_circle" />
          </div>
          <div className="contact_us_info_pane_socials">
            <Link to="/">
              <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </Link>
          </div>
        </div>
        {/* end of user_nav_pane */}
        <div className="post_person_box contactBox">
          {/* <h3 class="heading" >Update Profile</h3> */}
          {/* start of post_person_info */}
          <form action="" id="">
            {/* start of post_person_info */}
            <div className="post_person_info">
              <Field
                text="First Name"
                type="text"
                name="fName"
                fieldType="Input"
                className="contact_input"
              />

              <Field
                text="Last Name"
                type="text"
                name="lName"
                fieldType="Input"
                className="contact_input"
              />
            </div>
            {/* end of post_person_info */}

            <Field
              text="Email"
              type="email"
              name="email"
              className="contact_input"
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
              text="Message"
              name="message"
              cols="30"
              rows="10"
              fieldType="TextArea"
              className="text_area_section"
            />

            <div className="submit_contact_btn">
              <Button
                type="submit"
                text="Send"
                width="100%"
                margin="0 0 0 0 "
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
      {/* end of container */}
    </div>
  );
}

export default contactUs;
