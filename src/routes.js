import Dashboard from "layouts/dashboard";
// import DashboardHos from "layouts/dashboardHos";
// import DashboardDoc from "layouts/dashboardDoc";
import Home from "layouts/Home/Home"
import Hospital from "layouts/tables";
// import Billing from "layouts/billing";
import Doctor from "layouts/doctor";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
// import SignInDoc from "layouts/authentication/sign-in-doc";
// import SignInHos from "layouts/authentication/sign-in-hos";
import SignUp from "layouts/authentication/sign-up";
// import SignUpDoc from "layouts/authentication/sign-up-doc";
// import SignUpHos from "layouts/authentication/sign-up-hos";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Dashboard2",
  //   key: "dashboard2",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboardHosID",
  //   component: <DashboardHos />,
  // },
  // {
  //   type: "collapse",
  //   name: "Dashboard3",
  //   key: "dashboard3",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboardDocID",
  //   component: <DashboardDoc />,
  // },
  
  {
    type: "collapse",
    name: "Hospital Pannel",
    key: "Hospital Pannel",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Hospital/>,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },

  {
    type: "collapse",
    name: "Book an Appointment",
    key: "doctor",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/doctor",
    component: <Doctor />,
  },

  {
    type: "collapse",
    name: "My Reports",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In Doc",
  //   key: "sign-in-doc",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in-doc",
  //   component: <SignInDoc />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up Doc",
  //   key: "sign-up-doc",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up-doc",
  //   component: <SignUpDoc />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign In Hos",
  //   key: "sign-in-hos",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in-hos",
  //   component: <SignInHos />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up Hos",
  //   key: "sign-up-hos",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up-hos",
  //   component: <SignUpHos />,
  // },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home />,
  },
];

export default routes;
