import styles from "../styles/safetyTips.module.css";
import Field from "../Components/Field/Field";
import ImageUpload from "../Components/ImageCard/ImageCard";
import Button from "../Components/Buttons/Button";
import ImageCarousel from "../Components/ImageCarousel/ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDog,
  faPhone,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

function missingItem() {
  return (
    <>
      {/* start of container */}
      <div className="container" style={{ maxWidth: "unset" }}>
        {/* start of extra_details_pane */}
        <button
          id="toggle_extra_detail_pane_btn"
          className="extra_details_pane_btn blue scaleWhenHover"
        >
          Get User Info
        </button>
        <div className="extra_details_pane">
          <div className="extra_details_grid">
            {/* start of owner_contact_pane */}
            <div className="owner_contact_pane">
              <p>Missing</p>
              <button
                id="close_extra_details_pane"
                className="extra_details_pane_btn blue"
              >
                close
              </button>
              <div className="owner_image_box">
                <img src="./img/user.jpg" alt="" />
              </div>
              <p className="owner_name">Sammy</p>
              <button className="extra_details_pane_btn red scaleWhenHover">
                {" "}
                <i className="fas li-icon fa-phone" /> Show Contact
              </button>
              <button className="extra_details_pane_btn blue scaleWhenHover">
                {" "}
                <i className="fas li-icon fa-phone" /> Send Message
              </button>
            </div>
            {/* start owner_status_about_item */}
            <div className="owner_status_about_item">
              <p className="owner_status_about_item__heading">Status</p>
              <p className="owner_status_about_item__content">Recovered</p>
            </div>
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
            <ImageCarousel />
            <div id="leftBtn" className="image-curacel">
              <i className="fas fa-chevron-left" />
            </div>
            {/* start this what will hold the image */}
            <div
              className="slider"
              style={{ backgroundImage: "url(./img/dummy2.jpg)" }}
            ></div>
            {/* endthis what will hold the image */}
            {/* start this what will hold the image */}
            <div
              className="slider"
              style={{ backgroundImage: "url(./img/dummy2.png)" }}
            ></div>
            {/* endthis what will hold the image */}
            {/* start this what will hold the image */}
            <div
              className="slider"
              style={{ backgroundImage: "url(./img/dummy3.png)" }}
            ></div>
            {/* endthis what will hold the image */}
            <div id="rightBtn" className="image-curacel">
              <i className="fas fa-chevron-right" />
            </div>
            <div className="camera">
              <i className="fas fa-camera" />
              <p id="num_of_pics">12</p>
            </div>
          </div>
          {/* start of slider_container */}
          {/* start of upload_images_section */}
          <div className="upload_images_section">
            {/* <h3 class="heading">Upload Images</h3> */}
            <br />
            <div className="upload_image_container">
              {/* NOTE!!!!!!!
                    if U ADD A PICTURE TO IT  -- INCLUDE "imageAdded" TO THE CLASS
                    */}
              <div className="upload_image imageAdded">
                <img src="./img/user.jpg" alt="" className="imageToUpload" />
                <div className="add_image_content">
                  <i className="far fa-image" />
                  <p>Add Photo</p>
                </div>
              </div>
              {/* NOTE!!!!!!!
                    if U ADD A PICTURE TO IT  -- INCLUDE "imageAdded" TO THE CLASS
                    */}
              <div className="upload_image">
                <img src alt="" className="imageToUpload" />
                <div className="add_image_content">
                  <i className="far fa-image" />
                  <p>Add Photo</p>
                </div>
              </div>
              {/* NOTE!!!!!!!
                    if U ADD A PICTURE TO IT  -- INCLUDE "imageAdded" TO THE CLASS
                    */}
              <div className="upload_image">
                <img src alt="" className="imageToUpload" />
                <div className="add_image_content">
                  <i className="far fa-image" />
                  <p>Add Photo</p>
                </div>
              </div>
              <div className="upload_image">
                <img src alt="" className="imageToUpload" />
                <div className="add_image_content">
                  <i className="far fa-image" />
                  <p>Add Photo</p>
                </div>
              </div>
            </div>
            {/* <button class="btn  upload_image_btn">Post</button> */}
          </div>
          {/* start of upload_images_section */}
          <div className="item_image_detail">
            {/* start of num_of_views */}
            <div className="num_of_views">
              <i className="far fa-eye" />
              <p>42 views</p>
            </div>
            {/* end of num_of_views */}
            <button className="item_boosted_btn">Boosted</button>
            <p className="time-posted">
              <i className="far fa-clock" /> Posted Today,6:30
            </p>
            <p className="location">
              <i className="fas fa-map-marker-alt" /> Lagos,Ikorodu
            </p>
          </div>
          {/* start of about_item */}
          <div className="about_item">
            <h2 className="about_item__name">Nike Shoes</h2>
            <hr className="about_item_line" />
            <div className="about_item__description_pane">
              <h2 className="about_item__description_pane__header">
                Description
              </h2>
              <div className="about_item__description_pane_content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, mollitia ex ullam labore magnam nesciunt soluta,
                  officiis fuga pariatur inventore optio a quibusdam praesentium
                  sint! Quisquam ratione fuga officiis odit.
                </p>
              </div>
            </div>
          </div>
          {/* end of about_item */}
          {/* start of item_comment_section */}
          <div className="item_comment_section">
            <h3 className="item_comment_section__header">Comments</h3>
            {/* start of create_item_comment */}
            <form action className="create_item_comment">
              <div className="comment_owner_info">
                <div className="owner_of_comment_image">
                  <img src="./img/user.jpg" alt="" />
                </div>
                <p className="owner_comment_name">John Doe</p>
              </div>
              <div className="text_area_section">
                <textarea
                  name
                  id
                  cols={30}
                  rows={10}
                  placeholder="Type your comment"
                  defaultValue={""}
                />
                <input
                  type="submit"
                  defaultValue="Comment"
                  className="create_comment_btn"
                />
              </div>
              {/* hey u can change it to atag or button it doesnt matter it works ;) */}
            </form>
            {/* end of create_item_comment */}
            {/* start of other_item_comment_pane */}
            <div className="other_item_comment_pane">
              <div className="comment_box">
                <div className="comment_owner_info">
                  <div className="owner_of_comment_image">
                    <img src="./img/user.jpg" alt="" />
                  </div>
                  <p className="owner_comment_name">John Doe</p>
                </div>
                <div className="owner_comment_text">
                  Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Tenetur excepturi tempora, laboriosam earum asperiores,
                  soluta nam quod vitae nobis libero vero ipsam explicabo id ab
                  voluptas dolor dolores unde quidem! dolor sit amet consectetur
                  adipisicing elit. Delectus, voluptas!
                </div>
              </div>
              <div className="comment_box">
                <div className="comment_owner_info">
                  <div className="owner_of_comment_image">
                    <img src="./img/user.jpg" alt="" />
                  </div>
                  <p className="owner_comment_name">John Doe</p>
                </div>
                <div className="owner_comment_text">
                  Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Labore assumenda nisi explicabo. Delectus
                  dolorem illum nulla similique earum dolores sint, tempora
                  laboriosam consequatur debitis. Nesciunt non molestiae
                  voluptates incidunt magni? sit amet consectetur adipisicing
                  elit. Delectus, voluptas!
                </div>
              </div>
            </div>
            {/* end of other_item_comment_pane */}
          </div>
          {/* end  of item_comment_section */}
          {/* start of similar upload */}
          <div className="popular_in_fashion_container items_container">
            <div className="popular_in_fashion_header items_header">
              <h2 style={{ color: "var(--thick-blue)" }}>Similar Uploads</h2>
              {/* <a href="">
                     View more <i class="fas fa-greater-than"></i>
                    </a> */}
            </div>
            {/* start of items_grid */}
            <div className="items_grid">
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
              {/* start of item */}
              <div className="item">
                <img src="./img/dummy Pics.jpg" className="item_pics" alt="" />
                <div className="item_content">
                  <div className="item_missing_or_found">
                    <p>Missing</p>
                  </div>
                  <p className="item_name">Nike Shoe</p>
                  <p className="item_status">Status: Recovered</p>
                  <p className="item_reward">Reward: 5k naira</p>
                  <button className="btn item_button">Boosted</button>
                </div>
              </div>
              {/* start of item */}
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
