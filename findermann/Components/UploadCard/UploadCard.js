import { useRef, useState, useEffect } from "react";
import styles from "./UploadCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt, faPenAlt } from "@fortawesome/free-solid-svg-icons";

const UploadCard = () => {
  return (
    <>
      {/* start of editupload_card */}
      <div className={styles.editupload_card}>
        {/* start of editupload__image_container */}
        <div className={styles.editupload__image_container}>
          <Image
            layout="responsive"
            src="/assets/dummy2.jpg"
            width={240}
            height={180}
            alt="User"
          />
        </div>
        {/* end of editupload__image_container */}
        <div className={styles.editupload__moreinfo}>
          <div className={styles.editupload__nameinfo}>
            <p className={styles.item_name}>Nike Shoe</p>
            <p className={styles.category}>Category: fashion</p>
            <p className={styles.section}>Section: Missing</p>
          </div>
          <p className={styles.num_of_view}>
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
            <span id>42</span> views
          </p>
          <button className={styles.boosted}>Boosted</button>
          <button className={`${styles["btn"]} ${styles["delete_btn"]}`}>
            <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
            Delete
          </button>
          <button className={`${styles["btn"]} ${styles["edit_btn"]}`}>
            <FontAwesomeIcon icon={faPenAlt} className={styles.icon} /> Edit
          </button>
        </div>
      </div>
      {/* end of editupload_card */}
    </>
  );
};

export default UploadCard;
