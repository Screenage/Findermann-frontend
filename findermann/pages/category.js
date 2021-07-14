import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/category.module.css";
import CategoryNav from "../Components/Categories/CategoryPanelTwo/CategoryPanelTwo";
import CategoryItem from "../Components/Categories/CategoryItem/CategoryItem";
import Field from "../Components/Field/Field";
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
      <div className={styles.content}>
        <div className={styles.container}>
          {/* start of items_nav */}
          <div className={styles.items_nav}>
            {/* this is where u will see vehicles mobile phones electronics nav */}
            <div className={styles.filters}>
              <div className={styles.location}>
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
              <div className={styles.type}>
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
            <div className={styles.category}>
              <p>Category</p>
              <CategoryNav text={"Vehicles"} icon={"car"} to={"/login"} />
            </div>
          </div>
          {/* end of items_nav */}

          {/* this where the main content will be located */}
          <main className={styles.main_content}>
            <div className="items_container">
              {/* start of items_grid */}
              <div className="items_grid">
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  itemAd
                />
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
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
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