import React, { useState, useRef, useEffect } from "react";

import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import "leaflet-draw/dist/leaflet.draw.css";

export const EditableMap = ({ bounds }) => {
  console.log("bounds = ", bounds);

  const [center, setCenter] = useState({
    lat: 45,
    lng: -81,
  });

  const ZOOM_LEVEL = 9;

  const mapRef = useRef();

  useEffect(() => {
    const mymap = mapRef.current;
    if (mymap) {
      const new_bounds = [
        [bounds[1], bounds[0]],
        [bounds[3], bounds[2]],
      ];
      mymap.fitBounds(new_bounds);
    }
  }, [mapRef, bounds]);

  console.log(mapRef.current);

  let lastLeafletID;

  const _created = (e) => {
    const _leaflet_id = e.layer._leaflet_id;

    console.log("_leaflet_id", _leaflet_id);

    if (e.layerType === "polygon" || e.layerType === "marker") {
      if (lastLeafletID) {
        e.sourceTarget._layers[lastLeafletID].remove();
      }
      lastLeafletID = _leaflet_id;
    }
    if (e.layerType === "polygon") {
      console.log("polygon coordinates:", e.layer.getLatLngs());
    } else {
      console.log("marker coordinates:", e.layer.getLatLng());
    }
  };

  return (
    <>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_created}
            draw={{
              circle: false,
              circlemarker: false,
              polyline: false,
              rectangle: false,
            }}
            edit={{ edit: false }}
          />
        </FeatureGroup>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};
