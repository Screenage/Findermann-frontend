import { Link } from "react-router-dom";
import "./style.css";
import Field from "../../components/Field/Field";
import Button from "../../components/Buttons/Button";
import DashboardPanel from "../../components/Dashboard/DashboardPanel/DashboardPanel";

function changePassword() {
  return (
    <>
      {/* start of container */}
      <div className="container">
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className="post_person_box">
          <h3 className="heading">Change Password</h3>
          {/* start of post_person_info */}
          <form action id>
            <div className="input_stacking_on_eachOther">
              <Field
                text="Old Password"
                type="password"
                name="password"
                fieldType="Input"
              />

              <Field
                text="New Password"
                type="password"
                name="password"
                fieldType="Input"
              />

              <Field
                text="Confirm Password"
                type="password"
                name="password"
                fieldType="Input"
              />
            </div>

            <Button
              type="submit"
              text="Update Password"
              width="50%"
              margin="2.5rem 0 0 0 "
            />
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default changePassword;
