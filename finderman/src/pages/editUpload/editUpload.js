import "./style.css";
import Field from "../../components/Field/Field";
import UploadCard from "../../components/UploadCard/UploadCard";
import DashboardPanel from "../../components/Dashboard/DashboardPanel/DashboardPanel";

function editUpload() {
  return (
    <>
      {/* start of container */}
      <div className="container">
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className="post_person_box">
          <h3 className="heading">Edit Uploads</h3>

          <UploadCard />

          <UploadCard />
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default editUpload;
