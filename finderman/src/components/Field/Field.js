import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Field = ({ fieldType, type, text, name, dropDown, cols, rows }) => {
  if (fieldType == "Input") {
    return (
      <>
        {/* <!-- Start of Input Container --> */}
        <div className="input_box">
          <input type={type} placeholder={text} name={name} />
        </div>
        {/* <!-- End of Input Container --> */}
      </>
    );
  } else if (fieldType == "Select") {
    return (
      <>
        {/* <!-- Start of Select Container --> */}
        <div className="select_box">
          <select name={name} id={name}>
            <option value={text} disabled selected hidden>
              {text}
            </option>
            <option value="Sup">Sup</option>
          </select>
          <div className={dropDown ? "select_drop_down" : "displayNone"}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {/* <!-- End of Select Container --> */}
      </>
    );
  } else if (fieldType == "TextArea") {
    return (
      <>
        {/* <!-- Start of Text Area Container --> */}
        <div className="text_area_section">
          <textarea
            name={name}
            placeholder={text}
            cols={cols}
            rows={rows}
          ></textarea>
        </div>
        {/* <!-- End of Text Area Container --> */}
      </>
    );
  }

  return null;
};

export default Field;
