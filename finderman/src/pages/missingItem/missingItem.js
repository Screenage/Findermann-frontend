import "./style.css";
import Image from "next/image";
import Field from "../../components/Field/Field";
import ImageUpload from "../../components/ImageCard/ImageCard";
import Button from "../../components/Buttons/Button";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import StatusCard from "../../components/StatusCard/StatusCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import CategoryItem from "../../components/Categories/CategoryItem/CategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEye,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// import { SliderData } from "../../components/data";

function missingItem() {
  return (
    <>
      {/* start of container */}
      <div className="container">
        {/* start of extra_details_pane */}
        <button className="extra_details_pane_btn blue close_extra_details_pane">
          Get User Info
        </button>
        <div className="extra_details_pane">
          <div className="extra_details_grid">
            {/* start of owner_contact_pane */}
            <ProfileCard />
            {/* start owner_status_about_item */}
            <StatusCard />
            {/* end owner_status_about_item */}
            <div className="safety_tips_pane">
              <p className="safety_tips_pane__header">Safety Tips</p>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </div>
          </div>
          {/* end of owner_contact_pane */}
        </div>
        {/* end of extra_details_pane */}
        {/*start of detail_container */}
        <div className="detail_container">
          {/* start of slider_container */}
          <div className="slider_container">
            {/* <ImageCarousel
            // slides={SliderData}
            /> */}
          </div>
          {/* start of slider_container */}
          {/* start of upload_images_section */}
          <div className="upload_images_section">
            {/* <h3 class="heading">Upload Images</h3> */}
            <br />
            <div className="upload_image_container">
              <ImageUpload />
              <ImageUpload />
              <ImageUpload />
              <ImageUpload />
            </div>
            {/* <button class="btn  upload_image_btn">Post</button> */}
          </div>
          {/* start of upload_images_section */}
          <div className="item_image_detail">
            {/* start of num_of_views */}
            <div className="num_of_views">
              <FontAwesomeIcon icon={faEye} className="icon" />
              <p>42 views</p>
            </div>
            {/* end of num_of_views */}
            <button className="item_boosted_btn">Boosted</button>
            <span className="time-posted">
              <FontAwesomeIcon icon={faClock} className="icon" />
              <p> Posted Today,6:30 </p>
            </span>
            <span className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p> Lagos,Ikorodu </p>
            </span>
          </div>
          {/* start of about_item */}
          <div className="about_item">
            <h2 className="about_item__name">Nike Shoes</h2>
            <div className="about_item_line"></div>
            <div className="about_item__description_pane">
              <h2 className="about_item__description_pane__header">
                Description
              </h2>
              <div className="about_item__description_pane_content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, mollitia ex ullam labore magnam nesciunt soluta,
                  officiis fuga pariatur inventore optio a quibusdam praesentium
                  sint! Quisquam ratione fuga officiis odit. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Facere, mollitia ex
                  ullam labore magnam nesciunt soluta, officiis fuga pariatur
                  inventore optio a quibusdam praesentium sint! Quisquam ratione
                  fuga officiis odit.
                </p>
              </div>
            </div>
          </div>
          {/* end of about_item */}
          {/* start of item_comment_section */}
          <div className="item_comment_sectio" n>
            <h3 className="item_comment_section__header">Comments</h3>
            {/* start of create_item_comment */}
            <form action="" className="create_item_comment">
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
              <div className="text_area_section">
                <Field
                  text="Type your comment"
                  name="comments"
                  cols="30"
                  rows="10"
                  fieldType="TextArea"
                />
                <div className="create_comment_btn">
                  <Button
                    type="submit"
                    text="Comment"
                    width="100%"
                    borderRadius="10px"
                    fontSize="0.9rem"
                    margin="0"
                  />
                </div>
              </div>
              {/* hey u can change it to atag or button it doesnt matter it works ;) */}
            </form>
            {/* end of create_item_comment */}
            {/* start of other_item_comment_pane */}
            <div className="other_item_comment_pane">
              <CommentCard />
              <CommentCard />
            </div>
            {/* end of other_item_comment_pane */}
          </div>
          {/* end  of item_comment_section */}
          {/* start of similar upload */}
          <div className="items_container">
            <div className="items_header">
              <h2>Similar Uploads</h2>
              {/* <a href="">
                     View more <i class="fas fa-greater-than"></i>
                    </a> */}
            </div>
            {/* start of items_grid */}
            <div className="items_grid">
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
              <CategoryItem
                imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                itemSection="Missing"
                itemName="Nike Shoe"
                itemStatus="Recovered"
                itemReward="₦5,000.00"
                itemAd
              />{" "}
            </div>
            {/* start of items_grid */}
          </div>
          {/* end of similar upload */}
        </div>
        {/*end of detail_container */}
      </div>
      {/* end of container */}
    </>
  );
}

export default missingItem;
