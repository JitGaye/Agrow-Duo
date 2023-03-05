import React from "react";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Loader from "./Loader"

function LandingPage() {
  return (
    <div style={{ width: "88vw", marginTop: "6%", marginBottom: "10%", marginLeft: "9%" }}>
      <Loader/>
      <Aboutus/>
      <Services/>
    </div>
  );
}

export default LandingPage;
