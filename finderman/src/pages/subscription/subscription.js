import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Button from "../../components/Buttons/Button";
import Image from "next/image";

function subscription() {
  return (
    <>
      {/* start of container */}
      <div className="container price_container">
        {/* start of price_card */}
        <div className="price_card">
          {/* start of price_header_container */}
          <div className="price_header_container">
            <div className="price_category">
              <h3>Free</h3>
              <div className="price_category_underline" />
            </div>
          </div>
          {/* end of price_header_container */}
          <div className="price_body_container">
            <span className="price_listed_item">
              <FontAwesomeIcon icon={faCheck} />
              <p>Top uploads for a week</p>
            </span>
            <div className="subscribe_btn">
              <Button
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
        {/* start of price_card */}
        <div className="price_card">
          {/* start of price_header_container */}
          <div className="price_header_container">
            <div className="price_category">
              <h3>Lite</h3>
              <div className="price_category_underline" />
            </div>
            <p className="price_amount_details">
              <span className="price_amount">800 naira</span>
              <br />
              <span className="price_duration">Weekly</span>
            </p>
          </div>
          {/* end of price_header_container */}
          <div className="price_body_container">
            <span className="price_listed_item">
              <FontAwesomeIcon icon={faCheck} />

              <p>Top uploads for a week</p>
            </span>
            <span className="price_listed_item">
              <FontAwesomeIcon icon={faCheck} />

              <p>7X visibility chance</p>
            </span>
            <div className="subscribe_btn">
              <Button
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
        {/* start of price_card */}
        <div className="price_card">
          {/* start of price_header_container */}
          <div className="price_header_container">
            <div className="price_category">
              <h3>Pro</h3>
              <div className="price_category_underline" />
            </div>
            <p className="price_amount_details">
              <span className="price_amount">2500 naira</span>
              <br />
              <span className="price_duration">monthly</span>
            </p>
          </div>
          {/* end of price_header_container */}
          <div className="price_body_container">
            <span className="price_listed_item">
              <FontAwesomeIcon icon={faCheck} />
              <p>Top uploads for a week</p>
            </span>
            <span className="price_listed_item">
              <FontAwesomeIcon icon={faCheck} />
              <p>7X visibility chance</p>
            </span>

            <div className="subscribe_btn">
              <Button
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
      </div>
      {/* end of container */}
    </>
  );
}

export default subscription;
