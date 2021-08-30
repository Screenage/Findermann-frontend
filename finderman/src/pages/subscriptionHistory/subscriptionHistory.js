import { Link } from "react-router-dom";
import "./style.css";
import Field from "../../components/Field/Field";
import Button from "../../components/Buttons/Button";
import DashboardPanel from "../../components/Dashboard/DashboardPanel/DashboardPanel";
import DashboardTable from "../../components/Dashboard/DashboardTable/DashboardTable";

function subscriptionHistory() {
  return (
    <>
      {/* start of container */}
      <div className="container">
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className="post_person_box">
          <h3 className="heading">Subscription History</h3>
          <div className="table">
            <DashboardTable />
          </div>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default subscriptionHistory;
