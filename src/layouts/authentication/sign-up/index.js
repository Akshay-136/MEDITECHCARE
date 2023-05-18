/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
import axios from "axios";
// react-router-dom components
import { Link,useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const navigate = useNavigate();
  const onClicksubmit =async(event)=>{
    event.preventDefault();
    const json = JSON.stringify(state);
    console.log(json)
    const result = await axios.post(
      "http://localhost:8080/api/createUser", 
      json, 
      {
          headers: { 
            'Content-Type' : 'application/json' 
          }
      }
)
console.log(result);
navigate('/authentication/sign-in')

  }
  const [state, setState] = useState({
    userName:"",
    fistName:"",
    lastName:"",
    status:"",
    patientId:"",
    mobno:"",
    DOB:"",
    gender:"",
    email:"",
    password: "",

  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          style={{background:"#71d5c9"}}
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Username" variant="standard"name="userName"
            value={state.userName}
            onChange={handleInputChange} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="First Name" variant="standard" name="fistName"
            value={state.fistName}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="Last Name" variant="standard" name="lastName"
            value={state.lastName}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="Status" variant="standard" name="status"
            value={state.status}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="ID" variant="standard" name="patientId"
            value={state.patientId}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="Phone no" variant="standard" name="mobno"
            value={state.mobno}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="DOB" variant="standard" name="DOB"
            value={state.DOB}
            onChange={handleInputChange} fullWidth />
            </MDBox><MDBox mb={2}>
              <MDInput type="text" label="Gender" variant="standard" name="gender"
            value={state.gender}
            onChange={handleInputChange} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" name="email"
            value={state.email}
            onChange={handleInputChange} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" name="password"
            value={state.password}
            onChange={handleInputChange} fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="success"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
          
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={onClicksubmit} style={{background:"#71d5c9"}} fullWidth>
            sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
