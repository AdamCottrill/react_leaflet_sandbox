import React from "react";
import Container from "react-bootstrap/Container";

import { MyNavbar } from "../components/Navbar";

export const StudyArea = (props) => {
  return (
    <>
      <MyNavbar />
      <Container>
        <h1>Study Area</h1>

        <p>
          This will be a page that contains a form and map to capture our
          project study area.
        </p>

        <p>It will have these features:</p>
        <ul>
          <li>radio button select lake - change extent of maps</li>
          <li>form to capture study area as point or geojson</li>
          <li>map to show study area</li>
          <li>modal map to capture geometry from user's mouse click</li>
          <li>modal - fetch spatial attributes from existing project</li>
        </ul>
      </Container>
    </>
  );
};
