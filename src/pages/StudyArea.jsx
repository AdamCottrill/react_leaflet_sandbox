import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { MyNavbar } from "../components/Navbar";
import { EditableMap } from "../components/EditableMap";

export const StudyArea = (props) => {
  const lakes = [
    {
      lake_name: "Lake Erie",
      abbrev: "ER",
      extent: [-83.14, 41.67, -78.91, 42.89],
    },
    {
      lake_name: "Lake Huron",
      abbrev: "HU",
      extent: [-83.98, 43.0, -79.65, 46.33],
    },
    {
      lake_name: "Lake Ontario",
      abbrev: "ON",
      extent: [-79.93, 43.16, -76.39, 44.24],
    },
    {
      lake_name: "Lake St. Clair",
      abbrev: "SC",
      extent: [-82.93, 42.28, -82.4, 42.6],
    },
    {
      lake_name: "Lake Superior",
      abbrev: "SU",
      extent: [-89.56, 46.45, -84.35, 49.015],
    },
  ];

  const [extent, setExtent] = useState([-83.98, 43.0, -79.65, 46.33]);

  const onChange = (e) => {
    const lake = lakes.filter((x) => x.abbrev === e.target.id)[0];
    setExtent(lake.extent);
    console.log(extent);
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <h1>Study Area</h1>

        <Card className="my-2">
          <Card.Body>
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
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Form>
              {lakes.map((item) => (
                <Form.Check
                  inline
                  label={item.lake_name}
                  name="lake_options"
                  type="radio"
                  id={item.abbrev}
                  key={item.abbrev}
                  onChange={onChange}
                  checked={item.abbrev === "HU"}
                />
              ))}
            </Form>
          </Card.Body>
        </Card>

        <EditableMap bounds={extent} />
      </Container>
    </>
  );
};
