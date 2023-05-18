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

// @mui material components
import "./components/doctor.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Doctor() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const [liked, setLiked] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Find Your Favourite Doctor
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <div className="doc">
                  <div className="caard-container">
                    <div className="caard">
                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>
                      </div>
                      <div className="caard-details">
                        <h2>Dr. Doc1</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9734;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> Bhopal
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>ENT</li>
                            <li>Internal Medicine</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div>

                    {/* <div className="caard ">

                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>

                   

                      </div>
                      <div className="caard-details">
                        <h2>Dr. John Doe</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9734;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> 123 Main St, Anytown USA
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>caardiology</li>
                            <li>Internal Medicine</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div> */}

                    {/* <div className="caard">
                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>
                      </div>
                      <div className="caard-details">
                        <h2>Dr. John Doe</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9734;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> 123 Main St, Anytown USA
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>caardiology</li>
                            <li>Internal Medicine</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div> */}

                    {/* <div className="caard">
                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>
                      </div>
                      <div className="caard-details">
                        <h2>Dr. John Doe</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9734;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> 123 Main St, Anytown USA
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>caardiology</li>
                            <li>Internal Medicine</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div> */}

                    {/* <div className="caard">
                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>
                      </div>
                      <div className="caard-details">
                        <h2>Dr. John Doe</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9734;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> 123 Main St, Anytown USA
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>caardiology</li>
                            <li>Internal Medicine</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div> */}
                    {/* <div className="caard">
                      <div className="caard-image">
                        <img src="https://via.placeholder.com/150" alt="Doctor" />
                        <button className="like-button">&#10084;</button>
                      </div>
                      <div className="caard-details">
                        <h2>Dr. Jane Smith</h2>
                        <div className="caard-rating">
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                          <span className="rating-star">&#9733;</span>
                        </div>
                        <p className="caard-address">
                          <span className="gmap-symbol">&#127968;</span> 456 Oak St, Anytown USA
                        </p>
                        <div className="caard-specialization">
                          <h3>Specialization:</h3>
                          <ul>
                            <li>Obstetrics and Gynecology</li>
                          </ul>
                        </div>
                        <button className="book-docointment-button">Book an appointment</button>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Doctor;
