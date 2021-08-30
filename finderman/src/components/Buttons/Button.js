import "./style.css";
import { Link } from "react-router-dom";
const Button = ({ text, width, margin, borderRadius, fontSize }) => {
  return (
    <>
      {/* <!-- start of Button container --> */}
      <div className="button">
        <input
          type="submit"
          value={text}
          style={{
            width: width,
            margin: margin,
            borderRadius: borderRadius,
            fontSize: fontSize,
          }}
        ></input>
      </div>
      {/* <!-- end of Button container --> */}
    </>
  );
};

export default Button;
