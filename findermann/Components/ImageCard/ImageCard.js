import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "./ImageCard.module.css";

const ImageCard = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <>
      <div className={styles.upload_image}>
        {preview ? (
          <img
            src={preview}
            style={{ objectFit: "cover" }}
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
          />
        ) : (
          <div
            class={styles.add_image_content}
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <FontAwesomeIcon icon={faImage} />
            <p>Add Photo</p>
          </div>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </div>
    </>
  );
};

export default ImageCard;