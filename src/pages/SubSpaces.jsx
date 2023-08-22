import React from "react";
import Container from "react-bootstrap/Container";
import { MyNavbar } from "../components/Navbar";

export const SubSpaces = (props) => {
  return (
    <>
      <MyNavbar />
      <Container>
        <h1>Sub-Spaces</h1>

        <p>
          This will be a page that contains a form and map to capture our
          subspaces for our project
        </p>

        <p>It will have these features:</p>

        <ul>
          <li>
            if spaces are points, re-use coordinates for each space (there can
            be only subspace for each). Prompt for subspace name and
            description.
          </li>
          <li> if polygon, provide radio buttons for:</li>
          <ul>
            <li>Subspaces are points</li>
            <li>Subspaces are polgyons</li>
          </ul>
          <li>there will be a form array for each space</li>
          <li>if subspaces are points</li>
          <ul>
            <li>all points must be within geomery of the associated space</li>
          </ul>

          <li>if subspaces are polygons</li>
          <ul>
            <li>provide input for lat-lon as point</li>
            <li>text input for geosjon input</li>
            <li>plot geometry map</li>
            <li>
              popup for map canvas - zoomed to geometry of associated space
            </li>
            <li>all polygons must be within the space geometry</li>
            <li>subspace polygons cannot overlap</li>
          </ul>
        </ul>
      </Container>
    </>
  );
};
