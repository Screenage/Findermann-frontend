import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import ChangePassword from "./pages/changePassword/changePassword";
import Checkout from "./pages/checkout/checkout";
import ContactUs from "./pages/contactUs/contactUs";
import EditUpload from "./pages/editUpload/editUpload";
import Faq from "./pages/faq/faq";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import FoundItem from "./pages/foundItem/foundItem";
import FoundItems from "./pages/foundItems/foundItems";
import FoundItemsForm from "./pages/foundItemsForm/foundItemsForm";
import Login from "./pages/login/login";
import MissingItem from "./pages/missingItem/missingItem";
import MissingItemsForm from "./pages/missingItemsForm/missingItemsForm";
import MissingPersonForm from "./pages/missingPersonForm/missingPersonForm";
import PostItemOption from "./pages/postItemOption/postItemOption";
import ResetPassword from "./pages/resetPassword/resetPassword";
import SafetyTips from "./pages/safetyTips/safetyTips";
import SignUp from "./pages/signup/signup";
import Subscription from "./pages/subscription/subscription";
import SubscriptionHistory from "./pages/subscriptionHistory/subscriptionHistory";
import UpdateMissingItem from "./pages/updateMissingItem/updateMissingItem";
import UserDashboard from "./pages/userDashboard/userDashboard";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        <Route path="/changePassword" exact component={ChangePassword} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/editUpload" exact component={EditUpload} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/foundItem" exact component={FoundItem} />
        <Route path="/foundItems" exact component={FoundItems} />
        <Route path="/foundItemsForm" exact component={FoundItemsForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/missingItem" exact component={MissingItem} />
        <Route path="/missingItemsForm" exact component={MissingItemsForm} />
        <Route path="/missingPersonForm" exact component={MissingPersonForm} />
        <Route path="/postItemOption" exact component={PostItemOption} />
        <Route path="/resetPassword" exact component={ResetPassword} />
        <Route path="/safetyTips" exact component={SafetyTips} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/subscription" exact component={Subscription} />
        <Route
          path="/subscriptionHistory"
          exact
          component={SubscriptionHistory}
        />
        <Route path="/updateMissingItem" exact component={UpdateMissingItem} />
        <Route path="/userDashboard" exact component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;
