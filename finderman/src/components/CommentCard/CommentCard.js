import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Image from "next/image";

const CommentCard = () => {
  return (
    <>
      <div className="comment_box">
        <div className="comment_owner_info">
          <div className="owner_of_comment_image">
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={200}
              height={200}
              alt="User"
            />
          </div>
          <p className="owner_comment_name">John Doe</p>
        </div>
        <div className="owner_comment_text">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur excepturi tempora, laboriosam earum asperiores, soluta nam
          quod vitae nobis libero vero ipsam explicabo id ab voluptas dolor
          dolores unde quidem! dolor sit amet consectetur adipisicing elit.
          Delectus, voluptas!
        </div>
      </div>
    </>
  );
};

export default CommentCard;
