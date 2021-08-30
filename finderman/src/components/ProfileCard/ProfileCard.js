import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <>
      {/* Start of Owner Contact Panel  */}
      <div className="owner_contact_pane">
        <p className="category">Missing</p>
        <button className="extra_details_pane_btn blue close_extra_details_pane">
          close
        </button>
        <div className="owner_contact_pane_top">
          <div className="owner_image_box">
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={180}
              height={180}
              alt="User"
            />
          </div>
          <p className="owner_name">Sammy</p>
        </div>
        <button className="extra_details_pane_btn red">
          {" "}
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <span className="text">Show Contact</span>
        </button>
        <button className="extra_details_pane_btn blue">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span className="text">Send Message</span>
        </button>
      </div>

      {/* End of Owner Contact Panel */}
    </>
  );
};

export default ProfileCard;
