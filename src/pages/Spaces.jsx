import React from "react";
import Container from "react-bootstrap/Container";

import { MyNavbar } from "../components/Navbar";

export const Spaces = (props) => {
  return (
    <>
      <MyNavbar />

      <Container>
        <h1>Spaces</h1>

        <p>
          This will be a page that contains a form and map to capture our spaces
          for our project
        </p>

        <p>It will have these features:</p>

        <ul>
          <li>
            if study area is a point, re-use coordinates for space (there can be
            only one). Prompt for space name and description.
          </li>
          <li> if polygon, provide radio buttons for:</li>
          <ul>
            <li>Spaces are points</li>
            <li>Spaces are polgyons</li>
          </ul>

          <li> if points, repeat existing wizard</li>
          <ul>
            <li>all points must be within study area</li>
          </ul>

          <li>if polygons, re-use study region widget</li>
          <ul>
            <li>provide input for lat-lon as point</li>
            <li>text input for geosjon input</li>
            <li>plot geometry map</li>
            <li>popup for map canvas - zoomed to lake bounds</li>
            <li>all polygons must be within the study area</li>
            <li>space polygons cannot overlap</li>
          </ul>
        </ul>
      </Container>
    </>
  );
};
