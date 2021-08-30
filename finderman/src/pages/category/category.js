import Head from "next/head";
import Image from "next/image";
import { Link } from "react-router-dom";
import "./style.css";
import CategoryNav from "../../components/Categories/CategoryPanelTwo/CategoryPanelTwo";
import CategoryItem from "../../components/Categories/CategoryItem/CategoryItem";
import Field from "../../components/Field/Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDog,
  faPhone,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

export default function Category() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="content">
        <div className="container">
          {/* start of items_nav */}
          <div className="items_nav">
            {/* this is where u will see vehicles mobile phones electronics nav */}
            <div className="filters">
              <div className="location">
                <p>Filter By location</p>
                <form action="">
                  <Field
                    text="Location"
                    type="text"
                    name="location"
                    fieldType="Select"
                    dropDown
                  />
                </form>
              </div>
              <div className="type">
                <p>Filter By Type</p>
                <form action="">
                  <Field
                    text="Type"
                    type="text"
                    name="type"
                    fieldType="Select"
                    dropDown
                  />
                </form>
              </div>
            </div>
            <div className="category">
              <p>Category</p>
              <CategoryNav text={"Vehicles"} icon={"car"} to={"/login"} />
            </div>
          </div>
          {/* end of items_nav */}

          {/* this where the main content will be located */}
          <main className="main_content">
            <div className="items_container">
              {/* start of items_grid */}
              <div className="items_grid">
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
