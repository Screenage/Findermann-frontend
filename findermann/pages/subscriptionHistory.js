import Link from "next/link";
import styles from "../styles/subscriptionHistory.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function subscriptionHistory() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className={styles.post_person_box}>
          <h3 className="heading" style={{ textAlign: "left" }}>
            Update Profile
          </h3>
          <div className="table-responsive">
            <table
              className="table table-bordered "
              style={{ color: "#0D325C !important" }}
            >
              <thead>
                <tr>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Subscription Plan</th>
                  {/* <th scope="col">Lite</th> */}
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
                <tr>
                  <th scope="row">#10344</th>
                  <td>Lite</td>
                  <td>21/05/2020 - 2/06/2020</td>
                  {/* <td>@mdo</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default subscriptionHistory;
