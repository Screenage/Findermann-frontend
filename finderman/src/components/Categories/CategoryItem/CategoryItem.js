import "./style.css";
import Image from "next/image";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const CategoryItem = ({
  imageSrc,
  itemStatus,
  itemName,
  itemSection,
  itemCategory,
  itemReward,
  to,
  itemAd,
}) => {
  useEffect(() => {
    console.log(to);
  }, []);
  return (
    <>
      {/* start of item */}
      <Link to={`${to}`}>
        <div className="item">
          <Image
            className="item_pics"
            layout="responsive"
            src={imageSrc}
            width={175}
            height={175}
            alt="Item"
          />
          <div
            className={`'item_content' ${
              itemSection == "found"
                ? "item_content-heightShort"
                : "item_content-heightTall"
            } `}
          >
            <div className={itemSection == "found" ? "displayNone" : null}>
              <div className="item_missing_or_found">
                <p>{itemSection}</p>
              </div>
              <p className="item_name">{itemName}</p>
              <p className="item_status">
                Status: &nbsp;
                {itemStatus}
              </p>
              <p className="item_reward">
                Reward: &nbsp;
                {itemReward}
              </p>
              <div className={`${itemAd ? "item_ad" : "displayNone"}`}>
                Boosted
              </div>
            </div>
            <div
              className={
                itemSection == "found" ? " found_items" : "displayNone"
              }
            >
              <p className={`${itemAd ? "floating_boosted" : "displayNone"}`}>
                Boosted
              </p>
              <p className="item_name">{itemName}</p>
              <div className="item_status">Section: &nbsp;{itemSection}</div>
              <p className="item_category">
                Category: &nbsp;
                {itemCategory}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* start of item */}
    </>
  );
};

export default CategoryItem;
