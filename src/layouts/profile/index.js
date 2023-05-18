
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

import profilesListData from "layouts/profile/data/profilesListData";

import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="My name is Alec and I am a 35-year-old architect living in New York City. I graduated from Columbia University with a degree in architecture and have been working in the field for over 10 years. In my free time, I enjoy playing basketball, hiking, and exploring new neighborhoods in the city. "
                info={{
                  fullName: "user1",
                  mobile: "7575757575",
                  email: "user1@gmail.com",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="Doctors Consulted" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Recent Reports
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="Report 1"
                title="Abc Hospital"
                description=" No new health concerns. Weight and BMI within healthy range. Recommended annual blood work and mammogram scheduled. Next checkup scheduled for 03/04/2024."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view detailed report",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="report 2"
                title="abc hospital"
                description="No new health concerns. Blood pressure, cholesterol, and blood sugar levels all within normal range. Next checkup scheduled for 03/05/2024."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view detailed report",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="Report 3"
                title="abc hospital"
                description="treated with antibiotics and respiratory therapy. Discharged on 02/28/2023 in improved condition. Follow-up appointment scheduled for 03/08/2023."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view detailed report",
                }}
                authors={[
                  { image: team4, name: "Peterson" },

                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="Report 4"
                title="xyz hospital"
                description="Fractured right ankle, treated with casting and pain management. Follow-up appointment scheduled for 03/15/2023."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view detailed report",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
