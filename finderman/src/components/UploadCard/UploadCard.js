import { useRef, useState, useEffect } from "react";
import "./style.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt, faPenAlt } from "@fortawesome/free-solid-svg-icons";

const UploadCard = () => {
  return (
    <>
      {/* start of editupload_card */}
      <div className="editupload_card">
        {/* start of editupload__image_container */}
        <div className="editupload__image_container">
          <Image
            layout="responsive"
            src="/assets/dummy2.jpg"
            width={240}
            height={180}
            alt="User"
          />
        </div>
        {/* end of editupload__image_container */}
        <div className="editupload__moreinfo">
          <div className="editupload__nameinfo">
            <p className="item_name">Nike Shoe</p>
            <p className="category">Category: fashion</p>
            <p className="section">Section: Missing</p>
          </div>
          <p className="num_of_view">
            <FontAwesomeIcon icon={faEye} className="icon" />
            <span id>42</span> views
          </p>
          <button className="boosted">Boosted</button>
          <button className="btn delete_btn">
            <FontAwesomeIcon icon={faTrashAlt} className="icon" />
            Delete
          </button>
          <button className="btn edit_btn">
            <FontAwesomeIcon icon={faPenAlt} className="icon" /> Edit
          </button>
        </div>
      </div>
      {/* end of editupload_card */}
    </>
  );
};

export default UploadCard;
